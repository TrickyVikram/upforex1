import { Injectable } from '@angular/core';
import { ApiResp, BaseService } from './base.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends BaseService {
  private categoryEndPoint = 'api/v1/categories';
  getAllCategories(params: {
    pageNum?: number;
    pageLimit?: number;
    search?: string;
    allCategories?: boolean;
  }): Observable<ApiResp> {
    return this.http
      .get<ApiResp>(`${this.baseUrl}/${this.categoryEndPoint}`, {
        params,
      })
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  createCategory(data: { categoryName: string }): Observable<ApiResp> {
    return this.http
      .post<ApiResp>(`${this.baseUrl}/${this.categoryEndPoint}`, data)
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  getCategoryById(id: string) {
    return this.http
      .get<ApiResp>(`${this.baseUrl}/${this.categoryEndPoint}/${id}`)
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  updateCategory(data: {
    id: string;
    categoryName: string;
  }): Observable<ApiResp> {
    return this.http
      .put<ApiResp>(`${this.baseUrl}/${this.categoryEndPoint}/${data.id}`, data)
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  deleteCategory(id: string) {
    return this.http
      .delete<ApiResp>(`${this.baseUrl}/${this.categoryEndPoint}/${id}`)
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }
}
