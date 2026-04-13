import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResp, BaseService } from './base.service';
import { map, Observable, shareReplay } from 'rxjs';

export interface CountryData {
  id: number;
  countryName: string;
  countryCode1: string | null;
  countryCode2: string;
}

export interface UserData {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNo: string;
  countryId: number;
  affiliateCode?: string;
  conditions: boolean;
  domain: string;
  role: string;
  isActive: boolean;
  registrationIp?: string;
  createdAt?: string;
  updatedAt?: string;
  t_and_c?: {
    accepted: boolean;
    acceptedAt?: string;
    ipAddress?: string;
    userAgent?: string;
    documents?: { type: string; url: string; version: string }[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  // Production API — different base URL from admin backend
  private readonly userBaseUrl = 'https://api.upforex.com';
  private endPoint = 'api/v1/user';
  private countryApiUrl = 'https://crm.upforex.live/api/DropDown/GetAll-Country';

  // Cache country list (only fetched once)
  private countries$: Observable<CountryData[]> | null = null;

  getCountries(): Observable<CountryData[]> {
    if (!this.countries$) {
      this.countries$ = this.http
        .get<{ success: boolean; data: CountryData[] }>(this.countryApiUrl)
        .pipe(
          map((res) => res.data || []),
          shareReplay(1)
        );
    }
    return this.countries$;
  }

  getAllUsers(params: {
    pageNum: number;
    pageLimit: number;
    search: string;
  }): Observable<ApiResp> {
    return this.http
      .get<ApiResp>(`${this.userBaseUrl}/${this.endPoint}`, { params })
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  getUserById(id: string): Observable<ApiResp> {
    return this.http
      .get<ApiResp>(`${this.userBaseUrl}/${this.endPoint}/${id}`)
      .pipe(
        map((res) => {
          if (!res.status) this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  updateUser(id: string, data: Partial<UserData>): Observable<ApiResp> {
    return this.http
      .put<ApiResp>(`${this.userBaseUrl}/${this.endPoint}/${id}`, data)
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }

  deleteUser(id: string): Observable<ApiResp> {
    return this.http
      .delete<ApiResp>(`${this.userBaseUrl}/${this.endPoint}/${id}`)
      .pipe(
        map((res) => {
          if (res.status) this.toastr.success(res.message, 'Success');
          else this.toastr.error(res.message, 'Error');
          return res;
        })
      );
  }
}
