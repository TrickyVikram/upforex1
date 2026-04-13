/**
 * EXAMPLE - Translation Setup in Any Component
 *
 * यह file एक example है कि किसी भी component में translations कैसे setup करें।
 * इसे अपने component में adapt करें।
 */

import { Component, OnInit } from '@angular/core';
import { HybridTranslationService } from 'src/app/core/services/hybrid-translation.service';

@Component({
  selector: 'app-example-translation',
  template: `
    <div class="container">
      <h1>{{ 'EXAMPLE.TITLE' | hybridTranslate: 'Example Component' }}</h1>

      <p>{{ 'EXAMPLE.DESCRIPTION' | hybridTranslate: 'This is an example component showing how to use hybrid translations' }}</p>

      <button>
        {{ 'EXAMPLE.SUBMIT_BUTTON' | hybridTranslate: 'Submit' }}
      </button>

      <button>
        {{ 'EXAMPLE.CANCEL_BUTTON' | hybridTranslate: 'Cancel' }}
      </button>

      <!-- Plain text without translation -->
      <p>{{ plainText }}</p>
    </div>
  `,
})
export class ExampleTranslationComponent implements OnInit {
  plainText = 'यह plain text है जिसे translate नहीं करना है';

  constructor(private hybridTranslation: HybridTranslationService) {
    // Step 1: Register your component translations
    // Format: componentName (lowercase) + translations object
    this.hybridTranslation.registerComponentTranslations('example', {
      // English translations
      en: {
        'TITLE': 'Example Component',
        'DESCRIPTION': 'This is an example component showing how to use hybrid translations',
        'SUBMIT_BUTTON': 'Submit',
        'CANCEL_BUTTON': 'Cancel',
      },

      // Hindi translations
      hi: {
        'TITLE': 'उदाहरण घटक',
        'DESCRIPTION': 'यह एक उदाहरण घटक है जो हाइब्रिड अनुवाद का उपयोग करने का तरीका दिखाता है',
        'SUBMIT_BUTTON': 'जमा करें',
        'CANCEL_BUTTON': 'रद्द करें',
      },

      // Arabic translations
      ar: {
        'TITLE': 'مثال المكون',
        'DESCRIPTION': 'هذا مثال على مكون يوضح كيفية استخدام الترجمات الهجينة',
        'SUBMIT_BUTTON': 'إرسال',
        'CANCEL_BUTTON': 'إلغاء',
      },

      // Spanish translations
      es: {
        'TITLE': 'Componente Ejemplo',
        'DESCRIPTION': 'Este es un componente de ejemplo que muestra cómo usar traducciones híbridas',
        'SUBMIT_BUTTON': 'Enviar',
        'CANCEL_BUTTON': 'Cancelar',
      },

      // French translations
      fr: {
        'TITLE': 'Composant Exemple',
        'DESCRIPTION': 'Ceci est un exemple de composant montrant comment utiliser les traductions hybrides',
        'SUBMIT_BUTTON': 'Soumettre',
        'CANCEL_BUTTON': 'Annuler',
      },
    });
  }

  ngOnInit() {
    console.log('Example component initialized with translations');
  }
}

/**
 * HOW TO USE IN YOUR COMPONENT:
 *
 * 1. Import the service:
 *    import { HybridTranslationService } from 'src/app/core/services/hybrid-translation.service';
 *
 * 2. Inject it in constructor:
 *    constructor(private hybridTranslation: HybridTranslationService)
 *
 * 3. Register translations in constructor:
 *    this.hybridTranslation.registerComponentTranslations('yourcomponent', {
 *      en: { KEY: 'English Text' },
 *      hi: { KEY: 'हिंदी पाठ' },
 *      // ... other languages
 *    });
 *
 * 4. Use in template:
 *    {{ 'YOURCOMPONENT.KEY' | hybridTranslate: 'Fallback Text' }}
 *
 * IMPORTANT NOTES:
 * - Component name should be lowercase
 * - Use UPPERCASE for translation keys
 * - Always provide a fallback text as second parameter to pipe
 * - Make sure your module imports CommonModules
 *
 * BENEFITS:
 * ✅ Auto translations: Default text shown if manual translation not found
 * ✅ Manual override: Define custom translations when needed
 * ✅ Easy to use: Simple pipe syntax in templates
 * ✅ Multiple languages: Support for all 10 languages
 * ✅ Fallback support: Always has a default text to show
 */
