import {
  Component,
  Inject,
  OnDestroy, 
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import {
  mobileAppData,
  smarterTradeData,
  smartTradeFeaturesData,
} from './constant';
import * as AOS from 'aos';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Store } from 'src/app/Store/store';
// import { isPlatformBrowser } from '@angular/common';
import { HybridTranslationService } from 'src/app/core/services/hybrid-translation.service';
import { LanguageService, Language } from 'src/app/core/services/language.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';   // DOCUMENT add

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit ,OnDestroy  {
  smarterTradeCardData = smarterTradeData;
  smartTradeFeaturesData = smartTradeFeaturesData;
  mobileAppData = mobileAppData;
  s3URl!: string;
  currentLanguage!: Language;

  constructor(
    private renderer: Renderer2,
    private store: Store,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,   // <- add
    private hybridTranslation: HybridTranslationService,
    private languageService: LanguageService
  ) {
    // Register manual translations for home component
    this.hybridTranslation.registerComponentTranslations('home', {
      en: {
        'TRY_FREE_DEMO': 'Try Free Demo',
        'OPEN_ACCOUNT': 'Open Account',
        'WELCOME_TITLE': 'Welcome to UPFOREX – Your Premier Forex Trading Partner',
        'TRADE_TAGLINE': 'Trade Smarter. Earn Faster. Grow Globally.',
        'DESCRIPTION': 'At UPFOREX, we provide next-generation forex trading solutions designed for retail traders, professional investors, and Introducing Brokers (IBs). With advanced technology, deep liquidity, and real-time withdrawals, we empower traders to maximize profits while ensuring security, transparency, and lightning-fast execution.',
        'TRADING_CALCULATORS': 'Trading Calculators',
        'MARKET_ANALYSIS': 'Market Analysis',
        'MARKET_REVIEWS': 'Market Reviews',
      },
      hi: {
        'TRY_FREE_DEMO': 'निःशुल्क डेमो आजमाएं',
        'OPEN_ACCOUNT': 'खाता खोलें',
        'WELCOME_TITLE': 'UPFOREX में आपका स्वागत है – आपका प्रमुख फॉरेक्स ट्रेडिंग भागीदार',
        'TRADE_TAGLINE': 'स्मार्ट ट्रेड करें। तेजी से कमाएं। विश्व स्तर पर विकसित हों।',
        'DESCRIPTION': 'UPFOREX में, हम अगली पीढ़ी के फॉरेक्स ट्रेडिंग समाधान प्रदान करते हैं जो खुदरा व्यापारियों, पेशेवर निवेशकों और परिचय दलालों (IBs) के लिए डिज़ाइन किए गए हैं। उन्नत प्रौद्योगिकी, गहरी तरलता और वास्तविक समय की निकासी के साथ, हम व्यापारियों को सुरक्षा, पारदर्शिता और बिजली-तेज निष्पादन सुनिश्चित करते हुए मुनाफा को अधिकतम करने के लिए सशक्त बनाते हैं।',
        'TRADING_CALCULATORS': 'ट्रेडिंग कैलकुलेटर',
        'MARKET_ANALYSIS': 'बाजार विश्लेषण',
        'MARKET_REVIEWS': 'बाजार समीक्षा',
      },
      ar: {
        'TRY_FREE_DEMO': 'جرب العرض التوضيحي المجاني',
        'OPEN_ACCOUNT': 'فتح حساب',
        'WELCOME_TITLE': 'مرحبا بك في UPFOREX - شريكك التجاري الأول في الفوركس',
        'TRADE_TAGLINE': 'تداول بذكاء. اكسب بسرعة. انمو عالميًا.',
        'DESCRIPTION': 'في UPFOREX، نقدم حلول تداول الفوركس من الجيل التالي المصممة للمتداولين بالتجزئة والمستثمرين المحترفين والوسطاء المقدمين (IBs). بفضل التكنولوجيا المتقدمة والسيولة العميقة والانسحابات في الوقت الفعلي، نمكن المتداولين من تعظيم الأرباح مع ضمان الأمان والشفافية والتنفيذ السريع.',
        'TRADING_CALCULATORS': 'حاسبات التداول',
        'MARKET_ANALYSIS': 'تحليل السوق',
        'MARKET_REVIEWS': 'مراجعات السوق',
      },
    });
  }

  ngOnInit(): void {
    this.addHomeSchema();          // <- add
    this.loadTradingViewScript();
    this.s3URl = this.store.s3BaseUrl();

    // Subscribe to language changes for RTL flip
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.languageService.currentLanguage$.subscribe((lang: Language) => {
      this.currentLanguage = lang;
    });
  }

  // ngOnInit(): void {
  //   AOS.init({
  //     once: false,
  //     duration: 1000,
  //   });
  // }

  private readonly schemaId = 'home-schema';

  private addHomeSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'FinancialService',
          '@id': 'https://www.upforex.com/#organization',
          name: 'UPFOREX',
          legalName: 'UP Global Markets Ltd',
          url: 'https://www.upforex.com/',
          logo: {
            '@type': 'ImageObject',
            '@id': 'https://www.upforex.com/#logo',
            url: 'https://www.upforex.com/assets/images/updated-logos/logo-1.webp',
            contentUrl:
              'https://www.upforex.com/assets/images/updated-logos/logo-1.webp',
            caption: 'UPFOREX',
          },
          image:
            'https://upforex-assets.s3.eu-north-1.amazonaws.com/assets/images/JPG/home_banner_temp_1.webp',
          description:
            'UPFOREX is a forex trading platform offering fast execution, low spreads and secure global access for Forex, CFDs and Crypto trading on MetaTrader 5.',
          slogan: 'Trade Smarter. Earn Faster. Grow Globally.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '4th Floor, Docks 4, The Docks, Caudan',
            addressLocality: 'Port Louis',
            addressCountry: 'MU',
          },
          identifier: 'GB25204570',
          knowsAbout: [
            'Forex Trading',
            'CFD Trading',
            'Stock CFDs',
            'Index CFDs',
            'Precious Metals Trading',
            'Energy CFDs',
            'Cryptocurrency CFDs',
            'MetaTrader 5',
          ],
          sameAs: [
            'https://www.facebook.com/UpforexGlobal',
            'https://www.instagram.com/upforexglobal/',
            'https://www.linkedin.com/company/upforex-ltd/',
            'https://www.tiktok.com/@upforex.global',
            'https://www.trustpilot.com/review/upforex.com',
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.upforex.com/#website',
          url: 'https://www.upforex.com/',
          name: 'UPFOREX',
          inLanguage: 'en',
          publisher: { '@id': 'https://www.upforex.com/#organization' },
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.upforex.com/#webpage',
          url: 'https://www.upforex.com/',
          name: 'Globally Trusted & Regulated Forex Trading Platform',
          description:
            'Trade smarter with UPFOREX, the best forex trading platform offering fast execution, low spreads, and secure global access for Forex, CFDs, and Crypto trading.',
          inLanguage: 'en',
          isPartOf: { '@id': 'https://www.upforex.com/#website' },
          about: { '@id': 'https://www.upforex.com/#organization' },
          primaryImageOfPage: { '@id': 'https://www.upforex.com/#logo' },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.upforex.com/#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.upforex.com/',
            },
          ],
        },
      ],
    };

    const existing = this.document.getElementById(this.schemaId);
    if (existing) existing.remove();
    const script = this.document.createElement('script');
    script.id = this.schemaId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  ngOnDestroy(): void {
    // Home se dusre page par jaate hi schema hat jaye (SPA navigation me bhi)
    this.document.getElementById(this.schemaId)?.remove();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  images: string[] = [
    'assets/images/mt5/mt5_1.webp',
    'assets/images/mt5/mt5_2.webp',
    'assets/images/mt5/mt5_3.webp',
    'assets/images/mt5/mt5_4.webp',
    'assets/images/mt5/mt5_5.webp',
    'assets/images/mt5/mt5_6.webp',
    'assets/images/mt5/mt5_7.webp',
  ];

  loadTradingViewScript() {
    const script = this.renderer.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;

    const scriptConfig = {
      symbols: [
        {
          description: 'XAUUSD',
          proName: 'OANDA:XAUUSD',
        },
        {
          description: 'EURUSD',
          proName: 'OANDA:EURUSD',
        },
        {
          description: 'GBPUSD',
          proName: 'OANDA:GBPUSD',
        },
        {
          description: 'USDCAD',
          proName: 'OANDA:USDCAD',
        },
        {
          description: 'NZDUSD',
          proName: 'OANDA:NZDUSD',
        },
        {
          description: 'AUDUSD',
          proName: 'OANDA:AUDUSD',
        },
        {
          description: 'USDJPY',
          proName: 'OANDA:USDJPY',
        },
        {
          description: 'USDCHF',
          proName: 'OANDA:USDCHF',
        },
        {
          description: 'DXY',
          proName: 'TVC:DXY',
        },
        {
          description: 'BTCUSDT',
          proName: 'BINANCE:BTCUSDT',
        },
        {
          description: 'ETHUSDT',
          proName: 'BINANCE:ETHUSDT',
        },
        {
          description: 'E-Mini S&P 500 Fut',
          proName: 'CME_MINI:ES1!',
        },
        {
          description: 'TESLA',
          proName: 'NASDAQ:TSLA',
        },
        {
          description: 'AMAZON',
          proName: 'NASDAQ:AMZN',
        },
        {
          description: 'NVIDIA',
          proName: 'NASDAQ:NVDA',
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: 'dark',
      locale: 'en',
    };

    script.innerHTML = JSON.stringify(scriptConfig);
    if (isPlatformBrowser(this.platformId)) {
      const container = document.getElementById('ticker-tape-container');

      if (container) {
        this.renderer.appendChild(container, script);
      }
    }
  }
}
