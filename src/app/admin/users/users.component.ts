import { Component, OnInit, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService, UserData, CountryData } from '../../core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: UserData[] = [];
  selectedUser: UserData | null = null;
  loading = false;
  countriesLoading = false;
  pageNum = 1;
  pageLimit = 10;
  totalPages = 0;
  totalDocs = 0;
  search = '';
  searchTimeout: any;
  isWorking = false;

  // Country lookup map: id → CountryData
  countryMap: Map<number, CountryData> = new Map();

  Math = Math;

  @ViewChild('userDetailModal') userDetailModal!: TemplateRef<any>;
  @ViewChild('deleteConfirmModal') deleteConfirmModal!: TemplateRef<any>;
  deleteTargetId = '';

  constructor(
    private userService: UserService,
    private ngbModal: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadCountries();
    this.loadUsers();
  }

  ngOnDestroy(): void {
    if (this.searchTimeout) clearTimeout(this.searchTimeout);
  }

  loadCountries(): void {
    this.countriesLoading = true;
    this.userService.getCountries().subscribe({
      next: (countries) => {
        this.countryMap = new Map(countries.map((c) => [c.id, c]));
        this.countriesLoading = false;
      },
      error: () => {
        this.countriesLoading = false;
      },
    });
  }

  getCountryName(countryId: number): string {
    const country = this.countryMap.get(countryId);
    return country ? country.countryName : `ID: ${countryId}`;
  }

  getCountryFlag(countryId: number): string {
    const country = this.countryMap.get(countryId);
    if (!country) return '';
    const code = country.countryCode2?.toUpperCase();
    if (!code || code.length !== 2) return '';
    // Convert country code to flag emoji
    return Array.from(code)
      .map((c) => String.fromCodePoint(0x1f1e0 - 0x41 + c.charCodeAt(0)))
      .join('');
  }

  loadUsers(): void {
    this.loading = true;
    this.userService
      .getAllUsers({ pageNum: this.pageNum, pageLimit: this.pageLimit, search: this.search })
      .subscribe({
        next: (res) => {
          if (res.status) {
            this.users = res.data || [];
            this.totalPages = res.metaData?.totalPage || 0;
            this.totalDocs = res.metaData?.totalDocs ?? this.users.length;
          }
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }

  onSearchChange(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.pageNum = 1;
      this.loadUsers();
    }, 500);
  }

  onSearch(): void {
    this.pageNum = 1;
    this.loadUsers();
  }

  onPageChange(page: number): void {
    this.pageNum = page;
    this.loadUsers();
  }

  viewUser(user: UserData): void {
    this.selectedUser = user;
    this.ngbModal.open(this.userDetailModal, {
      backdrop: 'static',
      centered: true,
      size: 'lg',
      scrollable: true,
    });
  }

  toggleActive(user: UserData): void {
    const newStatus = !user.isActive;
    const action = newStatus ? 'activate' : 'deactivate';
    if (!confirm(`Are you sure you want to ${action} this user?`)) return;

    this.userService.updateUser(user._id!, { isActive: newStatus }).subscribe({
      next: (res) => {
        if (res.status) this.loadUsers();
      },
    });
  }

  confirmDelete(user: UserData): void {
    this.deleteTargetId = user._id!;
    this.ngbModal.open(this.deleteConfirmModal, {
      backdrop: 'static',
      centered: true,
      size: 'sm',
    });
  }

  handleDelete(): void {
    this.isWorking = true;
    this.userService.deleteUser(this.deleteTargetId).subscribe({
      next: (res) => {
        this.isWorking = false;
        if (res.status) {
          this.ngbModal.dismissAll();
          this.loadUsers();
        }
      },
      error: () => {
        this.isWorking = false;
      },
    });
  }

  getStatusBadgeClass(isActive: boolean): string {
    return isActive
      ? 'tw-bg-green-600 tw-text-white'
      : 'tw-bg-red-600 tw-text-white';
  }
}
