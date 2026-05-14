import { Injectable, Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Language {
  code: string;
  name: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
    { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
    { code: 'zh-CN', name: '中文 (简体)', flag: '🇨🇳', dir: 'ltr' },
    { code: 'zh-TW', name: '中文 (繁體)', flag: '🇹🇼', dir: 'ltr' },
    { code: 'ja', name: '日本語', flag: '🇯🇵', dir: 'ltr' },
    { code: 'pt', name: 'Português', flag: '🇧🇷', dir: 'ltr' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  ];

  private readonly STORAGE_KEY = 'upforex_language';
  private readonly MANUAL_SELECTION_KEY = 'upforex_lang_manual';
  private readonly GT_STORAGE_KEY = 'uf_lang';
  private readonly GT_MANUAL_SELECTION_KEY = 'uf_lang_manual';

  // Observable to track language changes
  private currentLanguageSubject: BehaviorSubject<Language>;
  public currentLanguage$: Observable<Language>;

  // Country code to language mapping for geo-location detection
  private readonly COUNTRY_LANGUAGE_MAP: { [key: string]: string } = {
    'IN': 'en', // India defaults to English; Hindi remains manually selectable
    'AE': 'en', // UAE defaults to English; Arabic remains manually selectable
    'SA': 'ar', 'EG': 'ar', 'DZ': 'ar', 'JO': 'ar', 'IQ': 'ar', 'KW': 'ar', 'LB': 'ar', 'LY': 'ar', 'OM': 'ar', 'QA': 'ar', 'SD': 'ar', 'SY': 'ar', 'TN': 'ar', 'YE': 'ar', // Arabic countries
    'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'CA': 'fr', 'CI': 'fr', 'CM': 'fr', 'GA': 'fr', 'HT': 'fr', 'ML': 'fr', 'SN': 'fr', // French countries
    'ES': 'es', 'MX': 'es', 'AR': 'es', 'CL': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es', 'BO': 'es', 'EC': 'es', 'PY': 'es', 'UY': 'es', // Spanish countries
    'DE': 'de', 'AT': 'de', // German countries
    'CN': 'zh-CN', 'TW': 'zh-TW', 'HK': 'zh-TW', 'MO': 'zh-TW', // Chinese countries/regions (CN=Simplified, TW/HK/MO=Traditional)
    'JP': 'ja', // Japan
    'BR': 'pt', 'PT': 'pt', 'AO': 'pt', 'MZ': 'pt', // Portuguese countries
    'RU': 'ru', 'BY': 'ru', 'KZ': 'ru', 'UA': 'ru', // Russian countries
  };

  constructor(
    private translate: TranslateService,
    @Optional() @Inject(DOCUMENT) private document: Document
  ) {
    // Initialize BehaviorSubject with current language
    this.currentLanguageSubject = new BehaviorSubject<Language>(this.getCurrentLanguage());
    this.currentLanguage$ = this.currentLanguageSubject.asObservable();
  }

  /**
   * Check if running in browser environment (has localStorage and window)
   */
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  initLanguage(): void {
    if (!this.isBrowser()) {
      // On server, just set default language
      this.translate.setDefaultLang('en');
      return;
    }

    const manualSelection = localStorage.getItem(this.MANUAL_SELECTION_KEY);
    const savedLang =
      localStorage.getItem(this.STORAGE_KEY) ||
      localStorage.getItem(this.GT_STORAGE_KEY);

    // If user manually selected a language before, use that
    if (manualSelection === 'true' && savedLang) {
      this.translate.setDefaultLang('en');
      this.setLanguage(savedLang);
      return;
    }

    // Default language must stay English unless the user manually changes it.
    this.translate.setDefaultLang('en');
    this.setLanguage('en');
  }

  /**
   * Detect language based on user's country/geo-location
   * Uses IP geolocation API to determine the country
   */
  private detectLanguageFromGeoLocation(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.isBrowser()) {
        // On server, can't detect geo-location
        resolve('en');
        return;
      }

      // Try using free geolocation API
      fetch('https://ipapi.co/json/')
        .then((response) => response.json())
        .then((data) => {
          const countryCode = data.country_code?.toUpperCase();
          if (countryCode && this.COUNTRY_LANGUAGE_MAP[countryCode]) {
            const mappedLang = this.COUNTRY_LANGUAGE_MAP[countryCode];
            // Check if the mapped language exists in our languages array
            if (this.languages.some((l) => l.code === mappedLang)) {
              resolve(mappedLang);
            } else {
              resolve('en');
            }
          } else {
            resolve('en');
          }
        })
        .catch(() => {
          // Fallback to browser language
          if (typeof navigator !== 'undefined') {
            const browserLang = navigator.language || 'en';
            const langCode = browserLang.split('-')[0];

            // Try to find a matching language in our list
            const matchedLang = this.languages.find(
              (l) => l.code.toLowerCase().startsWith(langCode.toLowerCase())
            );

            if (matchedLang) {
              resolve(matchedLang.code);
            } else {
              resolve('en');
            }
          } else {
            resolve('en');
          }
        });
    });
  }

  setLanguage(langCode: string, isManualSelection: boolean = false): void {
    const lang = this.languages.find((l) => l.code === langCode);
    if (lang) {
      this.translate.use(langCode);

      // Only save to localStorage in browser environment
      if (this.isBrowser()) {
        localStorage.setItem(this.STORAGE_KEY, langCode);
        localStorage.setItem(this.GT_STORAGE_KEY, langCode);

        // Mark if this was a manual selection
        if (isManualSelection) {
          localStorage.setItem(this.MANUAL_SELECTION_KEY, 'true');
          localStorage.setItem(this.GT_MANUAL_SELECTION_KEY, 'true');
        }

        // Set RTL/LTR direction for Arabic
        if (document) {
          document.documentElement.setAttribute('dir', lang.dir);
          document.documentElement.setAttribute('lang', langCode);
        }
      }

      // Emit language change to all subscribers (including navbar)
      this.currentLanguageSubject.next(lang);
    }
  }

  getCurrentLanguage(): Language {
    let savedLang = 'en';

    // Only read from localStorage in browser environment
    if (this.isBrowser()) {
      const manualSelection = localStorage.getItem(this.MANUAL_SELECTION_KEY);

      if (manualSelection === 'true') {
        savedLang =
          localStorage.getItem(this.STORAGE_KEY) ||
          localStorage.getItem(this.GT_STORAGE_KEY) ||
          'en';
      }
    }

    return this.languages.find((l) => l.code === savedLang) || this.languages[0];
  }
}


