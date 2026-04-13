import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from './canonical.service';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  private defaultSEO: SEOData = {
    title: 'Globally Trusted & Regulated Forex Trading Platform - UPFOREX',
    description: 'Trade smarter with UPFOREX — the best forex trading platform offering fast execution, low spreads, and secure global access for Forex, CFDs, and Crypto trading.',
    keywords: 'Best forex trading platform, forex trading, CFDs, crypto trading, UPFOREX',
    canonicalUrl: 'https://www.upforex.com/',
    ogTitle: 'Globally Trusted & Regulated Forex Trading Platform - UPFOREX',
    ogDescription: 'Trade smarter with UPFOREX — the best forex trading platform offering fast execution, low spreads, and secure global access for Forex, CFDs, and Crypto trading.',
    ogImage: 'https://www.upforex.com/assets/images/updated-logos/logo-2.webp',
    twitterCard: 'summary_large_image'
  };

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private canonicalService: CanonicalService
  ) {}

  /**
   * Update all SEO meta tags
   */
  updateSEO(data: SEOData): void {
    // Merge with default values
    const seoData = { ...this.defaultSEO, ...data };

    // Update title
    if (seoData.title) {
      this.titleService.setTitle(seoData.title);
    }

    // Update meta description
    if (seoData.description) {
      this.metaService.updateTag({ name: 'description', content: seoData.description });
    }

    // Update keywords
    if (seoData.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: seoData.keywords });
    }

    // Update canonical URL
    if (seoData.canonicalUrl) {
      this.canonicalService.setCanonicalURL(seoData.canonicalUrl);
    }

    // Update Open Graph tags
    if (seoData.ogTitle) {
      this.metaService.updateTag({ property: 'og:title', content: seoData.ogTitle });
    }
    if (seoData.ogDescription) {
      this.metaService.updateTag({ property: 'og:description', content: seoData.ogDescription });
    }
    if (seoData.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: seoData.ogImage });
    }
    if (seoData.ogUrl) {
      this.metaService.updateTag({ property: 'og:url', content: seoData.ogUrl });
    }

    // Update Twitter Card tags
    if (seoData.twitterCard) {
      this.metaService.updateTag({ name: 'twitter:card', content: seoData.twitterCard });
    }
    if (seoData.twitterTitle) {
      this.metaService.updateTag({ name: 'twitter:title', content: seoData.twitterTitle });
    }
    if (seoData.twitterDescription) {
      this.metaService.updateTag({ name: 'twitter:description', content: seoData.twitterDescription });
    }
    if (seoData.twitterImage) {
      this.metaService.updateTag({ name: 'twitter:image', content: seoData.twitterImage });
    }
  }

  /**
   * Reset to default SEO data
   */
  resetToDefault(): void {
    this.updateSEO(this.defaultSEO);
  }

  /**
   * Update canonical URL only
   */
  updateCanonical(url: string): void {
    this.canonicalService.setCanonicalURL(url);
  }
}
