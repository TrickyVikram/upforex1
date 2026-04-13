import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UniversalCanonicalService {

  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) {}

  setCanonicalURL(url: string): void {
    try {
      // First, try to find existing canonical tag
      const existingCanonical = this.doc.querySelector('link[rel="canonical"]') as HTMLLinkElement;

      if (existingCanonical) {
        // Update existing canonical tag
        existingCanonical.href = url;
        console.log('Updated canonical URL to:', url);
      } else {
        // Create new canonical tag if none exists
        const link: HTMLLinkElement = this.doc.createElement('link');
        link.rel = 'canonical';
        link.href = url;

        // Insert into head
        if (this.doc.head) {
          this.doc.head.appendChild(link);
          console.log('Created new canonical URL:', url);
        }
      }
    } catch (error) {
      console.error('Error setting canonical URL:', error);
    }
  }
}
