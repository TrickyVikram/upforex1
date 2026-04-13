import { Component } from '@angular/core';
import { WebBlogService } from 'src/app/core/services/web-blog.service';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-list.blogs',
  templateUrl: './list.blogs.component.html',
  styleUrls: ['./list.blogs.component.scss'],
})
export class ListBlogsComponent {
  constructor(private blogService: WebBlogService, private store: Store) {}
  articles: any[] = [];
  isLoading: boolean = false;
  totalPageSize = 0;
  pageNum = 1;
  pageLimit = 10;
  s3URL = this.store.s3BaseUrl();
  ngOnInit() {
    this.getAllBlogs();
  }

  processBlogsResponse(res: any) {
    this.isLoading = false;
    if (res.status) {
      const { data, metaData } = res;
      this.articles = [...this.articles, ...data];
      if (metaData) {
        this.totalPageSize = metaData.totalPage;
        this.pageNum = metaData.pageNum;
        this.pageLimit = metaData.pageLimit;
      }
    }
  }

  getAllBlogs(search = '') {
    const params = {
      pageNum: this.pageNum,
      pageLimit: this.pageLimit,
      search,
    };
    this.isLoading = true;
    this.blogService
      .getAllBlogs(params)
      .subscribe((res) => this.processBlogsResponse(res));
  }

  loadMore() {
    this.pageNum += 1;
    this.getAllBlogs();
  }
}
