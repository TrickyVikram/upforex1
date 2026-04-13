import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TermsService, TermsData } from '../../core/services/terms.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-terms-display',
  templateUrl: './terms-display.component.html',
  styleUrls: ['./terms-display.component.scss']
})
export class TermsDisplayComponent implements OnInit {
  terms: TermsData | null = null;
  loading = false;
  error = false;
  downloadingPdf = false; // Add PDF download loading state
  version: string | null = null;
  currentYear = new Date().getFullYear();
  currentDate = new Date();

  constructor(
    private route: ActivatedRoute,
    private termsService: TermsService
  ) {}

  ngOnInit(): void {
    this.version = this.route.snapshot.paramMap.get('version');
    this.loadTerms();
  }

  loadTerms(): void {
    this.loading = true;
    this.error = false;

    const request = this.version
      ? this.termsService.getPublicTerms(this.version)
      : this.termsService.getPublicTerms();

    request.subscribe({
      next: (response) => {
        if (response.status) {
          this.terms = response.data;
        } else {
          this.error = true;
        }
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  printTerms(): void {
    window.print();
  }

  downloadTerms(): void {
    if (!this.terms) return;

    this.downloadingPdf = true; // Set loading state to true

    // Get the terms content element
    const element = document.querySelector('.terms-content') as HTMLElement;
    if (!element) {
      console.error('Terms content element not found');
      this.downloadingPdf = false; // Reset loading state
      return;
    }

    // Configure html2canvas options
    const options = {
      scale: 2, // Higher quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: element.offsetWidth,
      height: element.offsetHeight
    };

    html2canvas(element, options).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate image dimensions
      const imgWidth = pdfWidth - 20; // 10mm margin on each side
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 10; // Top margin

      // Add first page
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= (pdfHeight - 20); // Account for margins

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight + 10;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= (pdfHeight - 20);
      }

      // Download the PDF
      pdf.save(`terms-and-conditions-${this.terms?.version}.pdf`);
      this.downloadingPdf = false; // Reset loading state
    }).catch((error) => {
      console.error('Error generating PDF:', error);
      this.downloadingPdf = false; // Reset loading state
      // Fallback to HTML download if PDF generation fails
      this.downloadAsHTML();
    });
  }

  // Fallback HTML download method
  private downloadAsHTML(): void {
    if (!this.terms) return;

    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${this.terms.title}</title>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 40px;
            line-height: 1.6;
            color: #333;
          }
          h1, h2, h3 { color: #333; margin-top: 20px; }
          .meta {
            color: #666;
            font-size: 14px;
            margin-bottom: 20px;
            padding: 10px;
            background-color: #f5f5f5;
            border-left: 4px solid #10b981;
          }
          .content { margin-top: 20px; }
          p { margin-bottom: 10px; }
          ul, ol { margin-left: 20px; }
        </style>
      </head>
      <body>
        <h1>${this.terms.title}</h1>
        <div class="meta">
          <strong>Version:</strong> ${this.terms.version}<br>
          <strong>Effective Date:</strong> ${new Date(this.terms.effectiveDate).toLocaleDateString()}<br>
          <strong>Last Modified:</strong> ${new Date(this.terms.lastModified).toLocaleDateString()}
        </div>
        <div class="content">
          ${this.terms.content}
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([content], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `terms-and-conditions-${this.terms.version}.html`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
