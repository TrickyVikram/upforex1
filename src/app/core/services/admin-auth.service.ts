import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService extends BaseService {
  login(loginData: { email: string; password: string }) {
    return this.http.post(`${this.baseUrl}/api/v1/admin/login`, loginData);
  }
}
