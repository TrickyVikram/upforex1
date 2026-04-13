import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageService } from './language.service';

/**
 * Hybrid Translation Service
 * Supports both manual translations (via i18n JSON files) and auto-translations
 *
 * Usage:
 * 1. Manual (from i18n files): {{ 'HOME.OPEN_ACCOUNT' | translate }}
 * 2. Auto (fallback): {{ 'Open Account' | hybridTranslate }}
 * 3. Manual with Auto fallback: hybridTranslate.get('HOME.OPEN_ACCOUNT', 'Open Account')
 */

@Injectable({
  providedIn: 'root',
})
export class HybridTranslationService {
  private manualTranslations = new Map<string, Map<string, string>>();
  private currentLanguage$ = new BehaviorSubject<string>('en');
  private isLoading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.initializeService();
  }

  private initializeService(): void {
    // Listen to language changes
    this.languageService.getCurrentLanguage();
    this.currentLanguage$.next(this.languageService.getCurrentLanguage().code);

    // Initialize with default language
    this.loadLanguage(this.languageService.getCurrentLanguage().code);
    this.isLoading$.next(false);
  }

  /**
   * Register manual translations for a component
   * @param componentName - Unique component identifier
   * @param translations - Object with language codes as keys
   *
   * Example:
   * this.hybridTranslation.registerComponentTranslations('home', {
   *   en: { 'OPEN_ACCOUNT': 'Open Account' },
   *   hi: { 'OPEN_ACCOUNT': 'खाता खोलें' },
   *   ar: { 'OPEN_ACCOUNT': 'فتح حساب' }
   * });
   */
  registerComponentTranslations(
    componentName: string,
    translations: {
      [key: string]: { [key: string]: string };
    }
  ): void {
    Object.keys(translations).forEach((lang) => {
      if (!this.manualTranslations.has(lang)) {
        this.manualTranslations.set(lang, new Map());
      }
      const langMap = this.manualTranslations.get(lang)!;
      const componentKey = `${componentName.toUpperCase()}`;

      Object.keys(translations[lang]).forEach((key) => {
        langMap.set(`${componentKey}.${key}`, translations[lang][key]);
      });
    });
  }

  /**
   * Get translation with manual override support
   * @param key - Translation key (e.g., 'HOME.OPEN_ACCOUNT')
   * @param fallbackText - Text to auto-translate if key not found
   * @param currentLang - Current language code (auto-detected if not provided)
   */
  getTranslation(
    key: string,
    fallbackText?: string,
    currentLang?: string
  ): string {
    const lang = currentLang || this.currentLanguage$.value;
    const langMap = this.manualTranslations.get(lang);

    // Check if manual translation exists
    if (langMap && langMap.has(key)) {
      return langMap.get(key)!;
    }

    // Return fallback text or empty
    return fallbackText || key;
  }

  /**
   * Get translation as Observable (for template binding)
   */
  getTranslation$(
    key: string,
    fallbackText?: string
  ): Observable<string> {
    return new Observable((observer) => {
      const lang = this.currentLanguage$.value;
      const translation = this.getTranslation(key, fallbackText, lang);
      observer.next(translation);
      observer.complete();
    });
  }

  /**
   * Set current language and notify all subscribers
   */
  setLanguage(langCode: string): void {
    this.currentLanguage$.next(langCode);
    this.loadLanguage(langCode);
  }

  /**
   * Get current language observable
   */
  getCurrentLanguage$(): Observable<string> {
    return this.currentLanguage$.asObservable();
  }

  /**
   * Get loading state observable
   */
  isLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  /**
   * Load language data (async if needed)
   */
  private loadLanguage(langCode: string): void {
    // Language data will be loaded as needed
    this.currentLanguage$.next(langCode);
  }

  /**
   * Get all registered manual translations for a language
   */
  getManualTranslations(langCode: string): Map<string, string> | undefined {
    return this.manualTranslations.get(langCode);
  }

  /**
   * Clear all registered translations (useful for testing)
   */
  clearManualTranslations(): void {
    this.manualTranslations.clear();
  }

  /**
   * Batch register translations from multiple components
   */
  registerBatchTranslations(
    componentsTranslations: {
      [componentName: string]: {
        [lang: string]: { [key: string]: string };
      };
    }
  ): void {
    Object.keys(componentsTranslations).forEach((componentName) => {
      this.registerComponentTranslations(
        componentName,
        componentsTranslations[componentName]
      );
    });
  }
}
