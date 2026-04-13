import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ToastrService } from 'ngx-toastr';
import { Store } from 'src/app/Store/store';
import { SendmailService } from 'src/services/sendmail.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnDestroy {
  s3URL!: string;
  constructor(
    private mailService: SendmailService,
    private toastr: ToastrService,
    private store: Store,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {
    this.s3URL = this.store.s3BaseUrl();
  }
  buttonName = 'Send Message';
  isLoading = false;
  contactForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl(this.store?.contactUsData()?.subject ?? '', [
      Validators.required,
    ]),
    message: new FormControl(this.store?.contactUsData()?.message ?? '', [
      Validators.required,
    ]),
  });

  initialValue = 'Mr.';
  changeSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value || 'Mr.';
    this.initialValue = value;
  }

  initials = ['Mr.', 'Mrs.', 'Miss', 'Ms.'];

  onSubmit() {
    this.recaptchaV3Service.execute('contact_form_submit').subscribe({
      next: (token: string) => {
        // Append token to your form data
        const formData = {
          ...this.contactForm.value,
          fullName: `${this.initialValue} ${this.contactForm.value.fullName}`,
          recaptchaToken: token,
        };

        this.sendContactForm(formData);
      },
      error: (err) => {
        console.error('reCAPTCHA error:', err);
      },
    });
  }

  sendContactForm(data: any) {
    this.isLoading = true;

    this.mailService.sendMail(data).subscribe({
      next: (res) => {
        this.buttonName = 'Mail Sent!!';
        this.toastr.success('Mail Sent!!');
      },
      error: (err) => {
        this.isLoading = false;
        this.toastr.error(err.message ?? 'Something went wrong');
      },
      complete: () => {
        this.isLoading = false;
        setTimeout(() => {
          this.buttonName = 'Send Message';
        }, 2000);
        this.contactForm.reset();
      },
    });
  }

  ngOnDestroy(): void {
    this.store.setContactUsData(null);
  }
}
