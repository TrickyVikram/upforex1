import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export interface ApiResp {
  status: boolean;
  message: string;
  data: any;
  metaData?: {
    totalPage: number;
    pageNum: number;
    pageLimit: number;
    totalDocs?: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  protected baseUrl = 'https://api.upforex.com';
  // protected baseUrl = 'http://localhost:3000';
  constructor(protected http: HttpClient, protected toastr: ToastrService) {}
}
