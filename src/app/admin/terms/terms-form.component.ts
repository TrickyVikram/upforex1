import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TermsService, TermsData } from '../../core/services/terms.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-terms-form',
  templateUrl: './terms-form.component.html',
  styleUrls: ['./terms-form.component.scss']
})
export class TermsFormComponent implements OnInit {
  termsForm: FormGroup;
  isEditMode = false;
  loading = false;
  termsId: string | null = null;

  // Rich text editor configuration
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '300px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter your terms and conditions content here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'montserrat', name: 'Montserrat' },
    ],
    customClasses: [
      {
        name: 'highlight',
        class: 'highlight',
      },
      {
        name: 'important',
        class: 'important',
      },
      {
        name: 'section-heading',
        class: 'section-heading',
        tag: 'h3',
      },
    ],
    sanitize: false,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['insertImage', 'insertVideo']],
  };

  constructor(
    private fb: FormBuilder,
    private termsService: TermsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.termsForm = this.fb.group({
      version: ['', [Validators.required, Validators.pattern(/^v\d+\.[0-9]$/)]],
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(50)]],
      isActive: [false],
      effectiveDate: [new Date().toISOString().split('T')[0], Validators.required]
    });
  }

  ngOnInit(): void {
    this.termsId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.termsId;

    if (this.isEditMode) {
      this.loadTerms();
    } else {
      this.generateNextVersion();
    }
  }

  loadTerms(): void {
    if (!this.termsId) return;

    this.loading = true;
    this.termsService.getTermsById(this.termsId).subscribe({
      next: (response) => {
        if (response.status) {
          const terms = response.data;
          this.termsForm.patchValue({
            version: terms.version,
            title: terms.title,
            content: terms.content,
            isActive: terms.isActive,
            effectiveDate: new Date(terms.effectiveDate).toISOString().split('T')[0]
          });
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.router.navigate(['/admin/terms']);
      }
    });
  }

  generateNextVersion(): void {
    this.termsService.getAllTerms({ pageNum: 1, pageLimit: 1, search: '' }).subscribe({
      next: (response) => {
        if (response.status && response.data.length > 0) {
          const latestVersion = response.data[0].version;
          const versionMatch = latestVersion.match(/^v(\d+)\.(\d+)$/);
          if (versionMatch) {
            const major = parseInt(versionMatch[1]);
            const minor = parseInt(versionMatch[2]);
            
            if (minor >= 9) {
              // If minor version is 9, increment major and reset minor to 0
              this.termsForm.patchValue({ version: `v${major + 1}.0` });
            } else {
              // Increment minor version
              this.termsForm.patchValue({ version: `v${major}.${minor + 1}` });
            }
          }
        } else {
          this.termsForm.patchValue({ version: 'v1.0' });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.termsForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.loading = true;
    const formData = this.termsForm.value;

    if (this.isEditMode && this.termsId) {
      this.termsService.updateTerms(this.termsId, formData).subscribe({
        next: (response) => {
          if (response.status) {
            this.router.navigate(['/admin/terms']);
          }
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    } else {
      this.termsService.createTerms(formData).subscribe({
        next: (response) => {
          if (response.status) {
            this.router.navigate(['/admin/terms']);
          }
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/admin/terms']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.termsForm.controls).forEach(key => {
      const control = this.termsForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.termsForm.get(fieldName);
    if (field?.touched && field?.errors) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['minlength']) return `${fieldName} is too short`;
      if (field.errors['pattern']) {
        if (fieldName === 'version') {
          return 'Version format: v[major].[minor] where minor is 0-9 (e.g., v1.0, v1.5, v2.0)';
        }
        return `${fieldName} format is invalid`;
      }
    }
    return '';
  }
}
