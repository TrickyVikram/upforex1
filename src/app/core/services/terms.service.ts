import { Injectable } from '@angular/core';
import { ApiResp, BaseService } from './base.service';
import { map, Observable } from 'rxjs';

export interface TermsData {
  _id?: string;
  version: string;
  title: string;
  content: string;
  isActive: boolean;
  effectiveDate: string;
  lastModified: string;
  modifiedBy: string;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TermsService extends BaseService {
  private termsEndPoint = 'api/v1/terms';

  getAllTerms(params: {
    pageNum: number;
    pageLimit: number;
    search: string;
  }): Observable<ApiResp> {
    return this.http
      .get<ApiResp>(`${this.baseUrl}/${this.termsEndPoint}`, {
        params,
      })
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  createTerms(data: Omit<TermsData, '_id' | 'createdAt' | 'updatedAt'>): Observable<ApiResp> {
    return this.http
      .post<ApiResp>(`${this.baseUrl}/${this.termsEndPoint}`, data)
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  getTermsById(id: string): Observable<ApiResp> {
    return this.http
      .get<ApiResp>(`${this.baseUrl}/${this.termsEndPoint}/${id}`)
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  getTermsByVersion(version: string): Observable<ApiResp> {
    return this.http
      .get<ApiResp>(`${this.baseUrl}/${this.termsEndPoint}/version/${version}`)
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  getActiveTerms(): Observable<ApiResp> {
    return this.http
      .get<ApiResp>(`${this.baseUrl}/${this.termsEndPoint}/active`)
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  updateTerms(id: string, data: Partial<TermsData>): Observable<ApiResp> {
    return this.http
      .put<ApiResp>(`${this.baseUrl}/${this.termsEndPoint}/${id}`, data)
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  setActiveVersion(id: string): Observable<ApiResp> {
    return this.http
      .post<ApiResp>(`${this.baseUrl}/${this.termsEndPoint}/${id}/activate`, {})
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  // Public endpoint for website
  getPublicTerms(version?: string): Observable<ApiResp> {
    const endpoint = version
      ? `${this.baseUrl}/${this.termsEndPoint}/public/${version}`
      : `${this.baseUrl}/${this.termsEndPoint}/public`;

    return this.http.get<ApiResp>(endpoint).pipe(
      map((res) => {
        if (!res.status) this.toastr.error(res.message, 'Error');
        return res;
      })
    );
  }
}
