# 🎯 Quick Reference - Copy Paste करें!

## 1️⃣ किसी भी Component में यह लिखें (Constructor में)

```typescript
import { HybridTranslationService } from "src/app/core/services/hybrid-translation.service";

export class YourComponent {
  constructor(private hybridTranslation: HybridTranslationService) {
    // बस यह copy-paste करें और apne text डालें
    this.hybridTranslation.registerComponentTranslations("yourcomponent", {
      en: {
        KEY1: "English Text Here",
        KEY2: "Another Text",
      },
      hi: {
        KEY1: "हिंदी टेक्स्ट यहाँ",
        KEY2: "और टेक्स्ट",
      },
    });
  }
}
```

## 2️⃣ Template में यह लिखें

```html
<h1>{{ 'YOURCOMPONENT.KEY1' | hybridTranslate: 'English Text Here' }}</h1>
<p>{{ 'YOURCOMPONENT.KEY2' | hybridTranslate: 'Another Text' }}</p>
```

## 3️⃣ बस! ✅

अब जब हिंदी select करोगे तो हिंदी text दिखेगा!

---

## 🔤 Translation Examples

### Example 1: Button Text

```typescript
en: { 'SUBMIT': 'Submit Form' },
hi: { 'SUBMIT': 'फॉर्म जमा करें' },
ar: { 'SUBMIT': 'إرسال النموذج' }

// Template: {{ 'COMPONENT.SUBMIT' | hybridTranslate: 'Submit Form' }}
```

### Example 2: Page Title

```typescript
en: { 'PAGE_TITLE': 'Welcome to Dashboard' },
hi: { 'PAGE_TITLE': 'डैशबोर्ड में स्वागत है' },
ar: { 'PAGE_TITLE': 'أهلا بك في لوحة التحكم' }

// Template: {{ 'COMPONENT.PAGE_TITLE' | hybridTranslate: 'Welcome to Dashboard' }}
```

### Example 3: Long Description

```typescript
en: { 'DESCRIPTION': 'This is a long description text' },
hi: { 'DESCRIPTION': 'यह एक लंबा विवरण टेक्स्ट है' },
ar: { 'DESCRIPTION': 'هذا نص وصف طويل' }

// Template: {{ 'COMPONENT.DESCRIPTION' | hybridTranslate: 'This is a long description text' }}
```

---

## 🔤 सभी 10 Languages के लिए Keys

हमेशा यही structure follow करें:

```typescript
this.hybridTranslation.registerComponentTranslations("mycomponent", {
  en: { KEY: "English" }, // English (🇬🇧)
  hi: { KEY: "हिंदी" }, // Hindi (🇮🇳)
  ar: { KEY: "عربي" }, // Arabic (🇸🇦)
  fr: { KEY: "Français" }, // French (🇫🇷)
  es: { KEY: "Español" }, // Spanish (🇪🇸)
  de: { KEY: "Deutsch" }, // German (🇩🇪)
  zh: { KEY: "中文" }, // Chinese (🇨🇳)
  ja: { KEY: "日本語" }, // Japanese (🇯🇵)
  pt: { KEY: "Português" }, // Portuguese (🇧🇷)
  ru: { KEY: "Русский" }, // Russian (🇷🇺)
});
```

---

## 💪 Practical Examples - Copy करके Use करें

### Blog Component

```typescript
this.hybridTranslation.registerComponentTranslations("blog", {
  en: {
    READ_MORE: "Read More",
    PUBLISHED: "Published on",
    AUTHOR: "By Author",
    SHARE: "Share This",
  },
  hi: {
    READ_MORE: "और पढ़ें",
    PUBLISHED: "प्रकाशित",
    AUTHOR: "लेखक द्वारा",
    SHARE: "साझा करें",
  },
  ar: {
    READ_MORE: "اقرأ أكثر",
    PUBLISHED: "نشرت على",
    AUTHOR: "بواسطة",
    SHARE: "شارك هذا",
  },
});
```

### Product Component

```typescript
this.hybridTranslation.registerComponentTranslations("product", {
  en: {
    ADD_TO_CART: "Add to Cart",
    BUY_NOW: "Buy Now",
    PRICE: "Price",
    IN_STOCK: "In Stock",
  },
  hi: {
    ADD_TO_CART: "कार्ट में जोड़ें",
    BUY_NOW: "अभी खरीदें",
    PRICE: "कीमत",
    IN_STOCK: "स्टॉक में है",
  },
  ar: {
    ADD_TO_CART: "أضف إلى السلة",
    BUY_NOW: "اشتري الآن",
    PRICE: "السعر",
    IN_STOCK: "متوفر",
  },
});
```

### Contact Component

```typescript
this.hybridTranslation.registerComponentTranslations("contact", {
  en: {
    CONTACT_US: "Contact Us",
    SEND_MESSAGE: "Send Message",
    EMAIL: "Email Address",
    PHONE: "Phone Number",
  },
  hi: {
    CONTACT_US: "हमसे संपर्क करें",
    SEND_MESSAGE: "संदेश भेजें",
    EMAIL: "ईमेल पता",
    PHONE: "फोन नंबर",
  },
  ar: {
    CONTACT_US: "اتصل بنا",
    SEND_MESSAGE: "أرسل رسالة",
    EMAIL: "عنوان البريد الإلكتروني",
    PHONE: "رقم الهاتف",
  },
});
```

---

## 🎨 Template Examples

### Simple Text

```html
<p>{{ 'COMPONENT.KEY' | hybridTranslate: 'Default Text' }}</p>
```

### Button

```html
<button class="btn">{{ 'COMPONENT.BUTTON_TEXT' | hybridTranslate: 'Click Me' }}</button>
```

### Input Label

```html
<label>{{ 'COMPONENT.LABEL' | hybridTranslate: 'Enter Name' }}</label> <input type="text" placeholder="{{ 'COMPONENT.LABEL' | hybridTranslate: 'Enter Name' }}" />
```

### Heading

```html
<h1>{{ 'COMPONENT.TITLE' | hybridTranslate: 'Welcome' }}</h1>
<h2>{{ 'COMPONENT.SUBTITLE' | hybridTranslate: 'Subtitle' }}</h2>
<h3>{{ 'COMPONENT.HEADING3' | hybridTranslate: 'Heading 3' }}</h3>
```

### Alert/Message

```html
<div class="alert">{{ 'COMPONENT.SUCCESS_MESSAGE' | hybridTranslate: 'Operation successful!' }}</div>
<div class="error">{{ 'COMPONENT.ERROR_MESSAGE' | hybridTranslate: 'Something went wrong!' }}</div>
```

---

## ✅ Important Rules

1. ✅ **Component name lowercase**: `'yourcomponent'`
2. ✅ **Keys UPPERCASE**: `'KEY_NAME'`
3. ✅ **Pipe format**: `{{ 'COMPONENT.KEY' | hybridTranslate: 'Default' }}`
4. ✅ **Always provide fallback**: Second parameter required
5. ✅ **Register in constructor**: Best practice

---

## 📌 Remember

- Module में `CommonModules` import करना है
- Pipe automatically available हो जाएगा
- Language dropdown navbar में है
- Hindi select करते हो तो Hindi text दिखेगा
- Testing के लिए home page को देख सकते हो (already implemented)

---

**बस इतना ही! अब you're ready to add translations! 🚀**
