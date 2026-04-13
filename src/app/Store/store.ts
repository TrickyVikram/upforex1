import { Injectable, WritableSignal } from '@angular/core';
import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

export interface ContactUsData {
  subject: string;
  message: string;
}

export interface AdminData {
  name: string;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class Store {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const adminData = JSON.parse(localStorage.getItem('adminData') ?? '{}');
      if (adminData && 'name' in adminData && 'id' in adminData) {
        this.adminData.set({ name: adminData.name, id: adminData.id });
      }
    }
  }

  contactUsData: WritableSignal<ContactUsData | null> =
    signal<ContactUsData | null>(null);

  adminData: WritableSignal<AdminData | null> = signal<AdminData | null>(null);

  setContactUsData(data: ContactUsData | null) {
    this.contactUsData.set(data);
  }

  setAdminData(data: AdminData | null) {
    this.adminData.set(data);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('adminData', JSON.stringify(data));
    }
  }

  getAdminData() {
    return this.adminData()?.name ?? '';
  }

  s3BaseUrl() {
    return 'https://upforex-assets.s3.eu-north-1.amazonaws.com/';
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
    this.adminData.set(null);
    this.router.navigate(['admin/login']);
  }
}
