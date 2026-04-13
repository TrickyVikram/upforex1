import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  /**
   * Set canonical URL for both SSR and client-side rendering
   * @param url - The canonical URL to set
   */
  setCanonicalURL(url?: string): void {
    // Get current URL if none provided
    const canonicalURL = url || this.getCanonicalURL();

    // Only manipulate DOM if we have a proper document object
    if (this.document && this.document.querySelector) {
      // Find existing canonical link element
      let canonicalElement = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

      if (!canonicalElement) {
        // Create new canonical element if it doesn't exist
        canonicalElement = this.document.createElement('link') as HTMLLinkElement;
        canonicalElement.setAttribute('rel', 'canonical');
        if (this.document.head) {
          this.document.head.appendChild(canonicalElement);
        }
      }

      // Set the href attribute
      canonicalElement.setAttribute('href', canonicalURL);
    }
  }

  /**
   * Get the current canonical URL
   * @returns The current canonical URL
   */
  getCanonicalURL(): string {
    if (isPlatformBrowser(this.platformId) && this.document && this.document.location) {
      return this.document.location.href;
    }

    // For SSR, we need to construct the URL from available information
    // You might want to inject a base URL from your environment or configuration
    const protocol = 'https';
    const host = (this.document && this.document.location?.hostname) || 'www.upforex.com';
    const pathname = (this.document && this.document.location?.pathname) || '';

    return `${protocol}://${host}${pathname}`;
  }

  /**
   * Remove canonical tag
   */
  removeCanonicalURL(): void {
    if (this.document && this.document.querySelector) {
      const canonicalElement = this.document.querySelector('link[rel="canonical"]');
      if (canonicalElement) {
        canonicalElement.remove();
      }
    }
  }

  /**
   * Update canonical URL for dynamic routes
   * @param baseUrl - Base URL of the site
   * @param path - Current route path
   */
  updateCanonicalForRoute(baseUrl: string, path: string): void {
    // Clean up the path (remove query parameters, fragments)
    const cleanPath = path.split('?')[0].split('#')[0];
    const fullUrl = `${baseUrl}${cleanPath}`;
    this.setCanonicalURL(fullUrl);
  }
}
