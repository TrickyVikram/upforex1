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
  // Only inject token + handle 401-logout for our own admin backend
  private readonly adminBackend = 'localhost:4500';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isAdminBackend = req.url.includes(this.adminBackend);

    // For completely external URLs (country API etc.) — pass through untouched
    if (!req.url.includes('localhost:4500') && !req.url.includes('api.upforex.live')) {
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
        // Only trigger logout for 401 from the admin backend (localhost:4500)
        if (err.status === 401 && isAdminBackend) {
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
