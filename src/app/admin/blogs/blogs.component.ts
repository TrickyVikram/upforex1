import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ColumnValue } from 'src/app/common/data-table/data-table.component';
import {
  columns,
  editorConfig,
  MediaFile,
  MediaFiles,
  MediaTypes,
} from './constant';

import { Store } from 'src/app/Store/store';
import { catchError, finalize, forkJoin, of, switchMap, tap } from 'rxjs';

import { BlogData, BlogsService } from 'src/app/core/services/blogs.service';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogsComponent implements OnInit {
  totalPageSize: number = 1;
  pageNum: number = 1;
  pageLimit: number = 10;
  isUpdate: boolean = false;
  updateDeleteId: string = '';
  isLoading: boolean = false;
  isDataLoading: boolean = false;

  mediaFiles: MediaFile = MediaFiles;

  @ViewChild('blogModal') blogModal!: TemplateRef<HTMLElement>;
  @ViewChild('deleteConfirmation')
  deleteConfirmationRef!: TemplateRef<HTMLElement>;
  @ViewChild('contentModal') contentModal!: TemplateRef<HTMLElement>;
  removeVideoModal: NgbModalRef | null = null;
  deleteModalMessage: string = 'Do you want to delete this blog?';

  categoriesData: {
    value: string;
    label: string;
  }[] = [];

  editorConfig = editorConfig;

  tagsItems: { id: string; value: string }[] = [{ id: '', value: '' }];

  blogForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    metaTitle: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    imageUrl: new FormControl<File | null>(null, [Validators.required]),
    videoUrl: new FormControl<File | null>(null),
    textField: new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required]),
    imageAltTag: new FormControl('', [Validators.required]),
    videoAltTag: new FormControl(''),
    tags: new FormControl('', [Validators.required]),
    permaLink: new FormControl('', [Validators.required]),
    featuredImageUrl: new FormControl<File | null>(null, [Validators.required]),
  });

  constructor(
    private ngbModal: NgbModal,
    private toastr: ToastrService,
    private store: Store,
    private blogService: BlogsService,
    private categoryService: CategoriesService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllBlogs();
  }

  s3BaseUrl: string = this.store.s3BaseUrl();

  columns = columns;

  data: ColumnValue[] = [];

  tableActions(event: { action: string; item: ColumnValue }) {
    this.blogForm.controls.content.enable();
    this.updateDeleteId = event.item.id as string;
    if (event.action === 'Edit') {
      this.blogService.getBlogById(event.item.id as string).subscribe((res) => {
        if (res.status) this.handleEditFormData(res.data);
      });
    } else if (event.action === 'Delete') {
      if (this.totalPageSize === 1) {
        this.toastr.error('You can not delete the only blog');
        return;
      }
      this.openModal(this.deleteConfirmationRef);
    }
  }

  getAllBlogs(search = '') {
    const params = {
      pageNum: this.pageNum,
      pageLimit: this.pageLimit,
      search,
    };
    this.isDataLoading = true;
    this.blogService
      .getAllBlogs(params)
      .subscribe((res) => this.processBlogsResponse(res));
  }

  handlePageChange(pageNum: number) {
    this.pageNum = pageNum;
    this.getAllBlogs();
  }

  handlePageSizeChange(pageLimit: number) {
    this.pageLimit = pageLimit;
    this.pageNum = 1;
    this.getAllBlogs();
  }

  handleSearch(search: string) {
    this.pageNum = 1;
    this.pageLimit = 10;
    this.getAllBlogs(search);
  }

  openModal(content: TemplateRef<HTMLElement>) {
    this.ngbModal.open(content, {
      backdrop: 'static',
      centered: true,
      size: 'lg',
    });
  }

  createBlog() {
    this.resetAllValues();
    this.openModal(this.blogModal);
  }

  handleAddUpdateBlog() {
    this.isLoading = true;

    this.fetchImageVideoUrl()
      .pipe(
        switchMap(() => {
          if (this.isUpdate) {
            return this.deleteImagesFromServer().pipe(
              switchMap(() => {
                const blogPayload = this.createBlogPayload();
                return this.blogService.updateBlog(
                  blogPayload,
                  this.updateDeleteId
                );
              })
            );
          }

          const blogPayload = this.createBlogPayload();
          return this.blogService.createBlog(blogPayload);
        }),
        tap((res) => {
          if (res.status) {
            this.ngbModal.dismissAll();
            this.getAllBlogs();
            this.resetAllValues();
          }
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  handleBlogDelete(isFromRemoveVideo: boolean) {
    if (isFromRemoveVideo) {
      this.mediaFiles.video.file = null;
      this.mediaFiles.video.previewUrl = '';
      this.blogForm.controls.videoUrl.reset(null);
      this.removeVideoModal?.close();
      this.removeVideoModal = null;
      this.deleteModalMessage = 'Do you want to delete this blog?';
      return;
    }
    this.isLoading = true;
    this.blogService.deleteBlog(this.updateDeleteId).subscribe((res) => {
      this.isLoading = false;
      if (res.status) {
        this.ngbModal.dismissAll();
        this.getAllBlogs();
      }
    });
  }

  handleFileChange(event: Event, type: MediaTypes) {
    const file = (event.target as HTMLInputElement).files?.[0];
    const isFeaturedImage = type === 'featuredImage';
    const fileType = isFeaturedImage ? 'image' : type;

    if (!file || !file.type.includes(fileType)) {
      this.toastr.error(`Please upload a valid ${fileType}`);
      this.blogForm.controls[`${type}Url`].reset();
      return;
    }

    this.mediaFiles[type].previewUrl = URL.createObjectURL(file);
    this.mediaFiles[type].file = file;
  }

  handleFileClear(type: MediaTypes) {
    this.mediaFiles[type].previewUrl = '';
    this.blogForm.controls[`${type}Url`].reset(null);

    if (type === 'video') {
      if (this.isUpdate) {
        this.deleteModalMessage = 'Do you want to remove this video?';
        this.removeVideoModal = this.ngbModal.open(this.deleteConfirmationRef, {
          backdrop: 'static',
          centered: true,
          size: 'sm',
        });
      } else this.mediaFiles.video.file = null;
    } else {
      this.blogForm.controls[`${type}Url`].setValidators([Validators.required]);
      this.blogForm.controls[`${type}Url`].updateValueAndValidity();
    }
  }

  handleContent(item: ColumnValue) {
    this.blogForm.controls.content.setValue(item.content);
    this.blogForm.controls.content.disable();
    this.openModal(this.contentModal);
  }

  getAllCategories() {
    this.categoryService
      .getAllCategories({ allCategories: true, pageLimit: 1, pageNum: 1 })
      .subscribe((res) => {
        if (Array.isArray(res.data) && res.data.length) {
          this.categoriesData = res.data.map((item) => {
            return {
              value: item._id,
              label: item.categoryName,
            };
          });
        }
      });
  }

  // -----------------------------------------------
  createBlogPayload(): BlogData {
    const values = this.blogForm.value;
    const { image, video, featuredImage } = this.mediaFiles;
    return {
      categories: values.categories,
      title: values.title,
      metaTitle: values.metaTitle,
      description: values.description,
      content: values.content,
      textField: values.textField,
      imageAltTag: values.imageAltTag,
      videoAltTag: values.videoAltTag,
      tags: values.tags,
      permaLink: values.permaLink,
      imageUrl: this.isUpdate
        ? image.urlToStoreInDB || image.urlToDelete
        : image.urlToStoreInDB,
      videoUrl: this.isUpdate
        ? video.urlToStoreInDB || video.urlToDelete
        : video.urlToStoreInDB,
      featuredImageUrl: this.isUpdate
        ? featuredImage.urlToStoreInDB || featuredImage.urlToDelete
        : featuredImage.urlToStoreInDB,
    };
  }

  processBlogsResponse(res: any) {
    this.isDataLoading = false;
    if (res.status) {
      const { data, metaData } = res;
      this.data =
        Array.isArray(data) && data.length
          ? data.map(this.transformBlogData)
          : [];
      if (metaData) {
        this.totalPageSize = metaData.totalPage;
        this.pageNum = metaData.pageNum;
        this.pageLimit = metaData.pageLimit;
      }
    }
  }

  transformBlogData(item: any): ColumnValue {
    return {
      title: item.title,
      id: item._id,
      metaTitle: item.metaTitle,
      description: item.description,
      content: item.content,
      imageUrl: item.imageUrl,
      videoUrl: item.videoUrl,
      textField: item.textField,
      categories: item.categories.length
        ? item.categories.map((cat: any) => cat.categoryName)
        : [],
      imageAltTag: item.imageAltTag,
      videoAltTag: item.videoAltTag,
      tags: item.tags.length ? item.tags.map((tag: any) => tag) : [],
    };
  }

  handleFileUploadResponse(res: any, type: MediaTypes) {
    if (res.status && 'fileName' in res.data) {
      this.mediaFiles[type].urlToStoreInDB = res.data.fileName;
    }
  }

  handleEditFormData(data: BlogData) {
    this.blogForm.reset();
    this.isUpdate = true;
    const { imageUrl, videoUrl, featuredImageUrl, ...restData } = data;

    ['image', 'video', 'featuredImage'].forEach((t) => {
      const type = t as MediaTypes;
      this.blogForm.controls[`${type}Url`]?.clearValidators();
      this.blogForm.controls[`${type}Url`]?.updateValueAndValidity();
      this.mediaFiles[type] = {
        previewUrl: data[`${type}Url`]
          ? `${this.s3BaseUrl}${data[`${type}Url`]}`
          : '',
        file: null,
        urlToDelete: data[`${type}Url`],
        urlToStoreInDB: '',
      };
    });

    restData.categories = restData.categories.length
      ? restData.categories.map((item: any) => item._id)
      : [];
    this.tagsItems = restData.tags.length
      ? restData.tags.map((item: any) => ({ id: item, value: item }))
      : [];
    this.blogForm.patchValue(restData);
    this.openModal(this.blogModal);
  }

  fetchImageVideoUrl() {
    this.isLoading = true;

    const files = Object.keys(this.mediaFiles).map((t) => {
      const type = t as MediaTypes;
      return this.mediaFiles[type].file
        ? this.adminService
            .handleImageVideoUpload(
              this.mediaFiles[type].file!,
              type === 'video' ? 'video' : 'image'
            )
            .pipe(
              tap((res) => this.handleFileUploadResponse(res, type)),
              catchError(() => of(null))
            )
        : of(null);
    });

    return forkJoin(files);
  }

  deleteImagesFromServer() {
    this.isLoading = true;
    const files = Object.keys(this.mediaFiles).map((t) => {
      const type = t as MediaTypes;

      const condition =
        type === 'video'
          ? (this.mediaFiles[type].urlToStoreInDB &&
              this.mediaFiles[type].urlToDelete) ||
            this.mediaFiles[type].urlToDelete
          : this.mediaFiles[type].urlToStoreInDB;

      return condition
        ? this.adminService
            .handleFileDelete(this.mediaFiles[type].urlToDelete)
            .pipe(
              tap(() => {
                if (
                  type === 'video' &&
                  !this.mediaFiles[type].urlToStoreInDB &&
                  this.mediaFiles[type].urlToDelete
                ) {
                  this.mediaFiles[type].urlToDelete = '';
                }
              }),
              catchError(() => of(null))
            )
        : of(null);
    });

    return forkJoin(files);
  }

  addCustomTags(data: any) {
    return {
      id: data,
      value: data,
    };
  }

  resetAllValues() {
    this.blogForm.reset();
    this.blogForm.controls.content.enable();
    this.isUpdate = false;

    ['image', 'featuredImage'].forEach((t) => {
      const type = t as keyof MediaFile;
      this.blogForm.controls[`${type}Url`].setValidators([Validators.required]);
      this.blogForm.controls[`${type}Url`].updateValueAndValidity();
    });
    Object.keys(this.mediaFiles).forEach((key) => {
      const k = key as MediaTypes;
      this.mediaFiles[k] = {
        previewUrl: '',
        urlToDelete: '',
        urlToStoreInDB: '',
        file: null,
      };
    });

    this.tagsItems = [{ id: '', value: '' }];
    this.removeVideoModal = null;
  }

  createPermaLink(event: any) {
    const permaLink = event.target.value?.toLowerCase().split(' ').join('-');
    this.blogForm.patchValue({ permaLink });
  }

  handleModal(modal: NgbModalRef) {
    this.removeVideoModal = null;
    this.deleteModalMessage = 'Do you want to delete this blog?';
    modal.close();
  }
}
