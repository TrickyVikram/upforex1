import { Injectable } from '@angular/core';
import { ApiResp, BaseService } from './base.service';
import { map, Observable } from 'rxjs';
export interface BlogData {
  title: string;
  metaTitle: string;
  description: string;
  content: string;
  imageUrl: string;
  videoUrl: string;
  textField: string;
  categories: string[];
  imageAltTag: string;
  videoAltTag: string;
  tags: string[];
  featuredImageUrl: string;
  permaLink: string[];
}
@Injectable({
  providedIn: 'root',
})
export class BlogsService extends BaseService {
  private blogEndPoint = 'api/v1/blogs';

  createBlog(data: BlogData): Observable<ApiResp> {
    return this.http
      .post<ApiResp>(`${this.baseUrl}/${this.blogEndPoint}`, data)
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  getAllBlogs(params: {
    pageNum: number;
    pageLimit: number;
    search: string;
  }): Observable<ApiResp> {
    return this.http
      .get<ApiResp>(`${this.baseUrl}/${this.blogEndPoint}`, {
        params,
      })
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  getBlogById(id: string) {
    return this.http
      .get<ApiResp>(`${this.baseUrl}/${this.blogEndPoint}/${id}`)
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  updateBlog(data: Partial<BlogData>, id: string): Observable<ApiResp> {
    return this.http
      .put<ApiResp>(`${this.baseUrl}/${this.blogEndPoint}/${id}`, data)
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  deleteBlog(id: string) {
    return this.http
      .delete<ApiResp>(`${this.baseUrl}/${this.blogEndPoint}/${id}`)
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }
}
