import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-social-menu',
  templateUrl: './social-menu.component.html',
  styleUrls: ['./social-menu.component.scss'],
})
export class SocialMenuComponent implements AfterViewInit {
  s3URL!: string;
  constructor(
    private renderer: Renderer2,
    private store: Store,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.s3URL = store.s3BaseUrl();
  }

  ngAfterViewInit(): void {
    this.loadTradingViewScript();
  }

  homeLinks = [
    {
      title: 'About Us',
      link: 'about-us',
    },
    {
      title: 'Accounts',
      link: '/accounts',
    },
    {
      title: 'MetaTrader 5 (MT5)',
      link: '/platforms/mt5',
    },
    {
      title: 'Contact Us',
      link: '/contact-us',
    },
    {
      title: 'Blogs',
      link: '/blogs',
    },
  ];
  usefullLinks = [
    {
      title: 'Risk Disclosure',
      link: 'risk-disclosure',
    },
    {
      title: 'Prevent Money Laundering',
      link: 'anti-monry-laundering',
    },
    {
      title: 'Privacy Policy',
      link: 'privacy-policy',
    },
    {
      // footer link
      title: 'Legal Documents',
      link: 'legal-documents',
    },
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
      const container = document.getElementById('content');
      if (container) {
        this.renderer.appendChild(container, script);
      }
    }
  }
}
