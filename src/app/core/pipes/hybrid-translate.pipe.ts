import { Pipe, PipeTransform } from '@angular/core';
import { HybridTranslationService } from '../services/hybrid-translation.service';
import { TranslateService } from '@ngx-translate/core';

/**
 * Hybrid Translation Pipe
 *
 * Usage:
 * 1. Manual translation (from i18n): {{ 'HOME.OPEN_ACCOUNT' | translate }}
 * 2. Auto translate text: {{ 'Open Account' | hybridTranslate }}
 * 3. Manual with fallback: {{ 'HOME.OPEN_ACCOUNT' | hybridTranslate: 'Open Account' }}
 */

@Pipe({
  name: 'hybridTranslate',
  pure: false, // Important: needed to detect language changes
})
export class HybridTranslatePipe implements PipeTransform {
  constructor(
    private hybridTranslation: HybridTranslationService,
    private translate: TranslateService
  ) {}

  transform(value: string, fallback?: string): string {
    // If it looks like a translation key (contains dot notation), try manual translation first
    if (value && value.includes('.')) {
      const manualTranslation = this.hybridTranslation.getTranslation(
        value,
        fallback
      );
      if (manualTranslation && manualTranslation !== value) {
        return manualTranslation;
      }
    }

    // Otherwise, return the text as-is (user sees original text)
    // If auto-translation is needed in future, implement here
    return fallback || value;
  }
}
