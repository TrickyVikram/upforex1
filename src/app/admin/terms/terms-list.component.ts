import { Component, OnInit, OnDestroy } from '@angular/core';
import { TermsService, TermsData } from '../../core/services/terms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-list',
  templateUrl: './terms-list.component.html',
  styleUrls: ['./terms-list.component.scss']
})
export class TermsListComponent implements OnInit, OnDestroy {
  terms: TermsData[] = [];
  loading = false;
  pageNum = 1;
  pageLimit = 10;
  totalPages = 0;
  totalDocs = 0; // Add total documents count
  search = '';
  searchTimeout: any;

  // Make Math available in template
  Math = Math;

  constructor(
    private termsService: TermsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTerms();
  }

  ngOnDestroy(): void {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
  }

  loadTerms(): void {
    this.loading = true;
    this.termsService.getAllTerms({
      pageNum: this.pageNum,
      pageLimit: this.pageLimit,
      search: this.search
    }).subscribe({
      next: (response) => {
        if (response.status) {
          // Sort terms: active first, then by lastModified descending
          this.terms = response.data.sort((a: TermsData, b: TermsData) => {
            // First sort by active status (active items first)
            if (a.isActive && !b.isActive) return -1;
            if (!a.isActive && b.isActive) return 1;

            // Then sort by lastModified (newest first)
            return new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime();
          });
          this.totalPages = response.metaData?.totalPage || 0;
          this.totalDocs = response.data.length; // Use actual data length
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onSearch(): void {
    this.pageNum = 1;
    this.loadTerms();
  }

  onSearchChange(): void {
    // Debounce search to avoid too many API calls
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.pageNum = 1;
      this.loadTerms();
    }, 500); // Wait 500ms after user stops typing
  }

  onPageChange(page: number): void {
    this.pageNum = page;
    this.loadTerms();
  }

  createNewTerms(): void {
    this.router.navigate(['/admin/terms/create']);
  }

  editTerms(id: string): void {
    this.router.navigate(['/admin/terms/edit', id]);
  }

  viewTerms(version: string): void {
    window.open(`/terms/${version}`, '_blank');
  }

  setActiveVersion(id: string): void {
    if (confirm('Are you sure you want to set this version as active?')) {
      this.termsService.setActiveVersion(id).subscribe({
        next: (response) => {
          if (response.status) {
            this.loadTerms(); // Reload to see updated active status
          }
        }
      });
    }
  }

  getStatusBadgeClass(isActive: boolean): string {
    return isActive ? 'tw-bg-green-500' : 'tw-bg-gray-500';
  }
}
