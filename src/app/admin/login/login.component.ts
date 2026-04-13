import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminAuthService } from 'src/app/core/services/admin-auth.service';
import { Store } from 'src/app/Store/store';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private store: Store,
    private adminAuthService: AdminAuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isSubmitting = true;
      this.adminAuthService.login(this.loginForm.value).subscribe({
        next: (res: any) => {
          if (res.status) {
            const { name, id } = res.data;
            this.toastr.success(res.message);
            if (isPlatformBrowser(this.platformId)) {
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('adminData', JSON.stringify({ name, id }));
            }
            this.store.setAdminData({ name, id });
            this.router.navigate(['/admin/home']);
          } else {
            this.toastr.error(res.message);
          }
          this.isSubmitting = false;
        },
        error: (err) => {
          this.toastr.error(err.message);
          this.isSubmitting = false;
        },
      });
    } else {
      this.loginForm?.markAllAsTouched();
    }
  }
}
