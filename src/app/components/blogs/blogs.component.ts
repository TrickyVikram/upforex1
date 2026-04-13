import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogData } from 'src/app/core/services/blogs.service';
import { WebBlogService } from 'src/app/core/services/web-blog.service';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {
  constructor(
    private blogService: WebBlogService,
    private _router: ActivatedRoute,
    private store: Store,
    private meta: Meta,
    private title: Title
  ) {}
  blogId!: string;
  blog!: BlogData;
  recommendedBlogs: any;
  s3URL = this.store.s3BaseUrl();
  ngOnInit() {
    this._router.params.subscribe((data) => {
      this.blogId = data.id;
      if (this.blogId) {
        this.getBlogById();
        this.getRecommendedBlogs();
      }
    });
  }
  isLoading: boolean = false;
  processBlogsResponse(res: any) {
    this.isLoading = false;
    if (res.status) {
      const { data } = res;
      this.blog = data;
      this.setMetaTags();
    }
  }

  getBlogById() {
    this.isLoading = true;
    this.blogService.getBlogById(this.blogId as string).subscribe((res) => {
      if (res.status) this.processBlogsResponse(res);
    });
  }

  getRecommendedBlogs() {
    this.isLoading = true;
    this.blogService.getRecommended(this.blogId as string).subscribe((res) => {
      if (res.status) this.recommendedBlogs = res.data;
    });
  }

  setMetaTags() {
    if (this.blog) {
      this.title.setTitle(this.blog.metaTitle);
      this.meta.updateTag({
        name: 'description',
        content: this.blog.description,
      });
      this.meta.updateTag({
        name: 'keywords',
        content: this.blog.tags.length ? this.blog.tags.join(',') : '',
      });
      this.meta.updateTag({
        name: 'title',
        content: this.blog.metaTitle,
      });
    }
  }
}
