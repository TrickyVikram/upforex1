import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {
  ColumnValue,
  TableColumn,
} from 'src/app/common/data-table/data-table.component';
import { AdminService } from 'src/app/core/services/admin.service';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  totalPageSize: number = 1;
  pageNum: number = 1;
  pageLimit: number = 10;
  isUpdate: boolean = false;
  shouldUpdatePassword: boolean = false;
  updateDeleteId: string = '';
  isLoading: boolean = false;
  isWorking: boolean = false;

  @ViewChild('adminModal') adminModal!: TemplateRef<HTMLElement>;
  @ViewChild('deleteConfirmation')
  deleteConfirmationRef!: TemplateRef<HTMLElement>;

  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: this.mustMatch('password', 'confirmPassword') }
  );

  constructor(
    private adminService: AdminService,
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private store: Store
  ) {}

  mustMatch(passwordKey: string, confirmPasswordKey: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(passwordKey);
      const confirmPassword = formGroup.get(confirmPasswordKey);

      // If either of the controls doesn't exist or is invalid, return null (no errors).
      if (!password || !confirmPassword) {
        return null;
      }

      // If there are already errors on confirmPassword, do nothing.
      if (confirmPassword.errors && !confirmPassword.errors['mustMatch']) {
        return null;
      }

      // Check if password values match
      if (password.value !== confirmPassword.value) {
        // Set the validation error on confirmPassword
        confirmPassword.setErrors({ mustMatch: true });
      } else {
        confirmPassword.setErrors(null); // Clear the errors if they match
      }

      return null;
    };
  }

  ngOnInit(): void {
    this.getAllAdmins();
  }

  columns: TableColumn[] = [
    {
      key: 'name',
      name: 'Name',
    },
    {
      key: 'email',
      name: 'Email',
    },
    {
      key: 'actions',
      name: 'Actions',
      actions: [
        {
          name: 'Edit',
          icon: 'matEdit',
          class: 'btn-outline-primary',
        },
        {
          name: 'Delete',
          icon: 'matDelete',
          class: 'btn-outline-danger',
        },
      ],
    },
  ];

  data: ColumnValue[] = [];

  tableActions(event: { action: string; item: ColumnValue }) {
    this.updateDeleteId = event.item.id as string;
    if (event.action === 'Edit') {
      this.adminService
        .getAdminById(event.item.id as string)
        .subscribe((res) => {
          if (res.status) {
            this.isUpdate = true;
            this.shouldUpdatePassword = false;
            const { data } = res;
            this.handleValidatorsOnPasswordChoiceChange(false);
            this.registerForm.patchValue({
              name: data.name,
              email: data.email,
            });
            this.openModal(this.adminModal);
          }
        });
    } else if (event.action === 'Delete') {
      if (this.totalPageSize === 1) {
        this.toastr.error('You can not delete the only admin');
        return;
      }
      this.openModal(this.deleteConfirmationRef);
    }
  }

  getAllAdmins(search = '') {
    const params = {
      pageNum: this.pageNum,
      pageLimit: this.pageLimit,
      search,
    };

    this.isLoading = true;
    this.adminService.getAllAdmins(params).subscribe((res) => {
      this.isLoading = false;
      if (res.status) {
        const { data, metaData } = res;
        if (Array.isArray(data) && data.length) {
          this.data = data.map((item) => {
            return {
              name: item.name,
              email: item.email,
              id: item._id,
            };
          });
        } else {
          this.data = [];
        }
        if (metaData) {
          const { totalPage, pageNum, pageLimit } = metaData;
          this.totalPageSize = totalPage;
          this.pageNum = pageNum;
          this.pageLimit = pageLimit;
        }
      }
    });
  }

  handlePageChange(pageNum: number) {
    this.pageNum = pageNum;
    this.getAllAdmins();
  }

  handlePageSizeChange(pageLimit: number) {
    this.pageLimit = pageLimit;
    this.pageNum = 1;
    this.getAllAdmins();
  }

  handleSearch(search: string) {
    this.pageNum = 1;
    this.pageLimit = 10;
    this.getAllAdmins(search);
  }

  openModal(content: TemplateRef<HTMLElement>) {
    this.ngbModal.open(content, {
      backdrop: 'static',
      centered: true,
      size: 'md',
    });
  }

  createAdmin() {
    this.isUpdate = false;
    this.registerForm.reset();
    this.openModal(this.adminModal);
  }
  handleAddUpdateAdmin() {
    if (this.isUpdate) {
      const { name, email, password } = this.registerForm.value;
      const payload = {
        name,
        email,
        id: this.updateDeleteId,
      };
      if (this.shouldUpdatePassword)
        Object.assign(payload, {
          password,
        });
      this.isWorking = true;
      this.adminService.updateAdmin(payload).subscribe((res) => {
        this.isWorking = false;
        if (res.status) {
          this.ngbModal.dismissAll();
          this.getAllAdmins();

          const isActiveAdmin = this.data.find(
            (data) => data.id === this.store.adminData()?.id
          );

          if (isActiveAdmin) {
            const { name, _id } = res.data;
            this.store.setAdminData({ name, id: _id });
          }
        }
      });

      return;
    }
    const { name, email, password } = this.registerForm.value;
    this.isWorking = true;
    this.adminService
      .createAdmin({ name, email, password })
      .subscribe((res) => {
        this.isWorking = false;
        if (res.status) {
          this.ngbModal.dismissAll();
          this.getAllAdmins();
        }
      });
  }

  handleValidatorsOnPasswordChoiceChange(condition = true) {
    if (condition) this.shouldUpdatePassword = !this.shouldUpdatePassword;
    const passwordValidators = this.shouldUpdatePassword
      ? [Validators.required, Validators.minLength(6)]
      : null;
    const confirmPasswordValidators = this.shouldUpdatePassword
      ? [Validators.required]
      : null;
    const formValidators = this.shouldUpdatePassword
      ? this.mustMatch('password', 'confirmPassword')
      : null;

    this.registerForm.setValidators(formValidators);
    this.registerForm.get('password')?.setValidators(passwordValidators);
    this.registerForm
      .get('confirmPassword')
      ?.setValidators(confirmPasswordValidators);

    this.registerForm.updateValueAndValidity();
    this.registerForm.get('password')?.updateValueAndValidity();
    this.registerForm.get('confirmPassword')?.updateValueAndValidity();
  }

  handleAdminDelete() {
    this.isWorking = true;
    this.adminService.deleteAdmin(this.updateDeleteId).subscribe((res) => {
      this.isWorking = false;
      if (res.status) {
        if (this.store.adminData()?.id === this.updateDeleteId) {
          this.store.logout();
        }
        this.ngbModal.dismissAll();
        this.getAllAdmins();
      }
    });
  }
}
