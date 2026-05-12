import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // Only inject token + handle 401-logout for our own admin/backend APIs.
  private readonly protectedBackends = [
    'localhost:4500',
    'api.upforex.com',
    'api.upforex.live',
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isProtectedBackend = this.protectedBackends.some((backend) =>
      req.url.includes(backend)
    );

    // For completely external URLs (country API etc.) — pass through untouched
    if (!isProtectedBackend) {
      return next.handle(req);
    }

    let token: string | null = null;
    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('token');
    }
    const router = inject(Router);
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(req).pipe(
      catchError((err) => {
        // Only trigger logout for 401 from protected backend APIs.
        if (err.status === 401 && isProtectedBackend) {
          if (isPlatformBrowser(this.platformId)) {
            localStorage.clear();
            router.navigate(['admin/login']);
          }
        }
        return throwError(err);
      })
    );
  }
}