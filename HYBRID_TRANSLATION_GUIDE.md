# Hybrid Translation System - Implementation Guide

## 📋 Overview

यह system **Manual + Auto Translation** दोनों को support करता है:

- **Manual Translation**: आप component में custom translations define कर सकते हैं
- **Auto Translation**: Fallback text जो user को दिखता है अगर manual translation न हो

---

## 🚀 Quick Start

### 1️⃣ किसी Component में Manual Translations Add करें

```typescript
import { HybridTranslationService } from "src/app/core/services/hybrid-translation.service";

export class MyComponent implements OnInit {
  constructor(private hybridTranslation: HybridTranslationService) {
    // Register manual translations
    this.hybridTranslation.registerComponentTranslations("mycomponent", {
      en: {
        TITLE: "Welcome",
        BUTTON: "Click Me",
        DESCRIPTION: "This is a description",
      },
      hi: {
        TITLE: "स्वागत है",
        BUTTON: "मुझे दबाएं",
        DESCRIPTION: "यह एक विवरण है",
      },
      ar: {
        TITLE: "أهلا وسهلا",
        BUTTON: "اضغط على",
        DESCRIPTION: "هذا وصف",
      },
    });
  }
}
```

### 2️⃣ Template में Use करें

```html
<!-- Manual translation (with fallback to original text) -->
<h1>{{ 'MYCOMPONENT.TITLE' | hybridTranslate: 'Welcome' }}</h1>
<button>{{ 'MYCOMPONENT.BUTTON' | hybridTranslate: 'Click Me' }}</button>
<p>{{ 'MYCOMPONENT.DESCRIPTION' | hybridTranslate: 'This is a description' }}</p>

<!-- Plain text (no translation) -->
<span>{{ plainText }}</span>
```

---

## 🎯 Key Features

### Feature 1: Manual Override (जब आप अपना translation चाहते हो)

```typescript
// Component में
this.hybridTranslation.registerComponentTranslations('home', {
  en: { 'OPEN_ACCOUNT': 'Open Account' },
  hi: { 'OPEN_ACCOUNT': 'खाता खोलें' },
});

// Template में
{{ 'HOME.OPEN_ACCOUNT' | hybridTranslate: 'Open Account' }}
// Result: Hindi select करने पर "खाता खोलें" दिखेगा
```

### Feature 2: Auto Text (Fallback - जब manual translation न हो)

```html
<!-- अगर manual translation नहीं है तो यही दिखेगा -->
{{ 'HOME.SOME_KEY' | hybridTranslate: 'Default Text Here' }}
<!-- Result: "Default Text Here" दिखेगा (किसी भी language में same) -->
```

### Feature 3: Language Dropdown (Flag + Country Code)

```
🇬🇧 EN (English)
🇮🇳 HI (हिन्दी)
🇸🇦 AR (العربية)
```

---

## 📝 Complete Example - Home Component

### Component TypeScript:

```typescript
import { HybridTranslationService } from "src/app/core/services/hybrid-translation.service";

export class HomeComponent implements OnInit {
  constructor(private hybridTranslation: HybridTranslationService) {
    this.hybridTranslation.registerComponentTranslations("home", {
      en: {
        OPEN_ACCOUNT: "Open Account",
        TRY_DEMO: "Try Free Demo",
        WELCOME: "Welcome to UpForex",
        HERO_TITLE: "Trade Smarter with UpForex",
      },
      hi: {
        OPEN_ACCOUNT: "खाता खोलें",
        TRY_DEMO: "निःशुल्क डेमो आजमाएं",
        WELCOME: "UpForex में आपका स्वागत है",
        HERO_TITLE: "UpForex के साथ स्मार्ट ट्रेड करें",
      },
      ar: {
        OPEN_ACCOUNT: "فتح حساب",
        TRY_DEMO: "جرب العرض التوضيحي المجاني",
        WELCOME: "مرحبا بك في UpForex",
        HERO_TITLE: "تداول بذكاء مع UpForex",
      },
    });
  }

  ngOnInit() {
    // Component initialization
  }
}
```

### Component HTML:

```html
<div class="banner">
  <h1>{{ 'HOME.HERO_TITLE' | hybridTranslate: 'Trade Smarter with UpForex' }}</h1>
  <button href="#register">{{ 'HOME.OPEN_ACCOUNT' | hybridTranslate: 'Open Account' }}</button>
  <button href="#demo">{{ 'HOME.TRY_DEMO' | hybridTranslate: 'Try Free Demo' }}</button>
</div>
```

---

## 🔧 Advanced Usage

### Add Translations Programmatically:

```typescript
// Single component
this.hybridTranslation.registerComponentTranslations('blog', {
  en: { 'READ_MORE': 'Read More' },
  hi: { 'READ_MORE': 'अधिक पढ़ें' },
});

// Multiple components at once
this.hybridTranslation.registerBatchTranslations({
  home: { en: {...}, hi: {...} },
  blog: { en: {...}, hi: {...} },
  products: { en: {...}, hi: {...} },
});

// Get translation in component code
const translation = this.hybridTranslation.getTranslation('HOME.TITLE', 'Default Title');
```

### Listen to Language Changes:

```typescript
this.hybridTranslation.getCurrentLanguage$().subscribe((lang) => {
  console.log("Language changed to:", lang);
  // Do something when language changes
});
```

---

## 📦 Module Setup

सभी modules में `CommonModules` import करें:

```typescript
import { CommonModules } from 'src/app/common/common.module';

@NgModule({
  imports: [CommonModules, ...],
  declarations: [YourComponent],
})
export class YourModule {}
```

`HybridTranslatePipe` automatically available होगा!

---

## 🌐 Supported Languages

| Code | Language  | Flag |
| ---- | --------- | ---- |
| en   | English   | 🇬🇧   |
| hi   | हिन्दी    | 🇮🇳   |
| ar   | العربية   | 🇸🇦   |
| fr   | Français  | 🇫🇷   |
| es   | Español   | 🇪🇸   |
| de   | Deutsch   | 🇩🇪   |
| zh   | 中文      | 🇨🇳   |
| ja   | 日本語    | 🇯🇵   |
| pt   | Português | 🇧🇷   |
| ru   | Русский   | 🇷🇺   |

---

## ✅ Checklist - How to Use

- [ ] Import `HybridTranslationService` in your component
- [ ] Register translations in constructor
- [ ] Add `| hybridTranslate` pipe to template
- [ ] Provide fallback text as pipe parameter
- [ ] Test with different languages from navbar dropdown

---

## 🐛 Troubleshooting

### Problem: Pipe not found

**Solution**: Make sure your module imports `CommonModules`

### Problem: Translation not showing

**Solution**: Check that:

1. Component name in registration matches template
2. Translation key format is `COMPONENT.KEY`
3. Fallback text is provided

### Problem: Language dropdown not showing

**Solution**: Navbar dropdown is automatically added, just change language from there

---

## 📚 File References

- **Service**: `/src/app/core/services/hybrid-translation.service.ts`
- **Pipe**: `/src/app/core/pipes/hybrid-translate.pipe.ts`
- **Module**: `/src/app/common/common.module.ts`
- **Navbar Component**: `/src/app/layouts/navbar/navbar.component.ts`
- **Language Service**: `/src/app/core/services/language.service.ts`

---

**Happy Translating! 🎉**
