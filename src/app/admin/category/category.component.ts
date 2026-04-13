import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {
  ColumnValue,
  TableColumn,
} from 'src/app/common/data-table/data-table.component';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  totalPageSize: number = 10;
  pageNum: number = 1;
  pageLimit: number = 10;
  isUpdate: boolean = false;
  updateDeleteId: string = '';
  isLoading: boolean = false;
  isWorking: boolean = false;

  @ViewChild('categoryModal') categoryModalRef!: TemplateRef<HTMLElement>;
  @ViewChild('deleteConfirmation')
  deleteConfirmationRef!: TemplateRef<HTMLElement>;

  categoryName = new FormControl('', [Validators.required]);

  constructor(
    private categoryService: CategoriesService,
    private ngbModal: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  columns: TableColumn[] = [
    {
      key: 'categoryName',
      name: 'Category',
    },
    {
      key: 'actions',
      name: 'Actions',
      actions: [
        {
          name: 'Edit',
          icon: 'matEdit',
          class: 'btn-outline-primary',
        },
        {
          name: 'Delete',
          icon: 'matDelete',
          class: 'btn-outline-danger',
        },
      ],
    },
  ];

  data: ColumnValue[] = [];

  tableActions(event: { action: string; item: ColumnValue }) {
    this.updateDeleteId = event.item.id as string;
    if (event.action === 'Edit') {
      this.categoryService
        .getCategoryById(event.item.id as string)
        .subscribe((res) => {
          if (res.status) {
            this.isUpdate = true;
            const { data } = res;
            this.categoryName.setValue(data.categoryName);
            this.openModal(this.categoryModalRef);
          }
        });
    } else if (event.action === 'Delete') {
      if (this.totalPageSize === 1) {
        this.toastr.error('You can not delete the only category');
        return;
      }
      this.openModal(this.deleteConfirmationRef);
    }
  }

  getAllCategories(search = '') {
    const params = {
      pageNum: this.pageNum,
      pageLimit: this.pageLimit,
      search,
    };

    this.isLoading = true;
    this.categoryService.getAllCategories(params).subscribe((res) => {
      this.isLoading = false;
      if (res.status) {
        const { data, metaData } = res;
        if (Array.isArray(data) && data.length) {
          this.data = data.map((item) => {
            return {
              categoryName: item.categoryName,
              id: item._id,
            };
          });
        } else {
          this.data = [];
        }
        if (metaData) {
          const { totalPage, pageNum, pageLimit } = metaData;
          this.totalPageSize = totalPage;
          this.pageNum = pageNum;
          this.pageLimit = pageLimit;
        }
      }
    });
  }

  handlePageChange(pageNum: number) {
    this.pageNum = pageNum;
    this.getAllCategories();
  }

  handlePageSizeChange(pageLimit: number) {
    this.pageLimit = pageLimit;
    this.pageNum = 1;
    this.getAllCategories();
  }

  handleSearch(search: string) {
    this.pageNum = 1;
    this.pageLimit = 10;
    this.getAllCategories(search);
  }

  openModal(content: TemplateRef<HTMLElement>) {
    this.ngbModal.open(content, {
      backdrop: 'static',
      centered: true,
      size: 'md',
    });
  }

  createCategory() {
    this.isUpdate = false;
    this.categoryName.reset();
    this.openModal(this.categoryModalRef);
  }
  handleAddUpdateCategory() {
    if (this.isUpdate) {
      const categoryName = this.categoryName.value ?? '';
      const payload = {
        id: this.updateDeleteId,
        categoryName,
      };
      this.isWorking = true;
      this.categoryService.updateCategory(payload).subscribe((res) => {
        this.isWorking = false;
        if (res.status) {
          this.ngbModal.dismissAll();
          this.getAllCategories();
        }
      });

      return;
    }
    const categoryName = this.categoryName.value ?? '';
    this.isWorking = true;
    this.categoryService.createCategory({ categoryName }).subscribe((res) => {
      this.isWorking = false;
      if (res.status) {
        this.ngbModal.dismissAll();
        this.getAllCategories();
      }
    });
  }

  handleCategoryDelete() {
    this.isWorking = true;
    this.categoryService
      .deleteCategory(this.updateDeleteId)
      .subscribe((res) => {
        this.isWorking = false;
        if (res.status) {
          if (this.totalPageSize % this.pageLimit === 1) {
            this.pageNum = this.pageNum - 1;
          }
          this.ngbModal.dismissAll();
          this.getAllCategories();
        }
      });
  }
}
