import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { ApiResp, BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService extends BaseService {
  private endPoint = 'api/v1/admin';

  getAllAdmins(params: {
    pageNum: number;
    pageLimit: number;
    search: string;
  }): Observable<ApiResp> {
    return this.http
      .get<ApiResp>(`${this.baseUrl}/${this.endPoint}`, {
        params,
      })
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  createAdmin(data: {
    name: string;
    email: string;
    password: string;
  }): Observable<ApiResp> {
    return this.http
      .post<ApiResp>(`${this.baseUrl}/${this.endPoint}`, data)
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  getAdminById(id: string) {
    return this.http
      .get<ApiResp>(`${this.baseUrl}/${this.endPoint}/${id}`)
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  updateAdmin(data: {
    id: string;
    name: string;
    email: string;
    password?: string;
  }): Observable<ApiResp> {
    return this.http
      .put<ApiResp>(`${this.baseUrl}/${this.endPoint}/${data.id}`, data)
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  deleteAdmin(id: string) {
    return this.http
      .delete<ApiResp>(`${this.baseUrl}/${this.endPoint}/${id}`)
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  handleImageVideoUpload(
    fileData: File,
    type: 'image' | 'video'
  ): Observable<ApiResp> {
    const file = new FormData();
    file.append('file', fileData);
    return this.http
      .post<ApiResp>(`${this.baseUrl}/${this.endPoint}/upload`, file, {
        headers: {
          type,
        },
      })
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  handleFileDelete(key: string) {
    return this.http
      .post<ApiResp>(`${this.baseUrl}/${this.endPoint}/delete-file`, { key })
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }
}
