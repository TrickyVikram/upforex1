import { Injectable } from '@angular/core';
import { ApiResp, BaseService } from './base.service';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WebBlogService extends BaseService {
  private blogEndPoint = 'api/v1/blogs/web';

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

  getRecommended(id: string) {
    return this.http
      .get<ApiResp>(`${this.baseUrl}/${this.blogEndPoint}/${id}/recommended`)
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }
}
