import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from 'src/app/Store/store';
import { LanguageService, Language } from 'src/app/core/services/language.service';
import { HybridTranslationService } from 'src/app/core/services/hybrid-translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  s3URL!: string;
  languages: Language[] = [];
  currentLanguage!: Language;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
  private store: Store,
  public languageService: LanguageService,
  private hybridTranslation: HybridTranslationService
  ) {
    this.s3URL = this.store.s3BaseUrl();
    this.languages = this.languageService.languages;
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }
  ngOnInit() {
    this.menuName = this.route.url.split('/')[1];
    this.subMenuName = this.route.url.split('/')[2];
    this.subMenuName?.includes('-')
      ? (this.subMenuName = this.subMenuName.split('-').join(''))
      : null;

    if (this.menuName === 'accounts') {
      this.selectedIndex = 0;
    } else if (this.menuName === 'platforms') {
      this.selectedIndex = 1;
    }

    // Watch for language changes from any source (including geo-detect)
    this.languageService.currentLanguage$.subscribe((lang: Language) => {
      this.currentLanguage = lang;
    });

    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menuName = this.route.url.split('/')[1];
        this.subMenuName = this.route.url.split('/')[2];
        this.subMenuName?.includes('-')
          ? (this.subMenuName = this.subMenuName.split('-').join(''))
          : null;
      }
    });
  }
  menuName = '';
  subMenuName = '';
  isMenuCollapsed = true;
  selectedIndex!: number;
  productsDropdown = [
    {
      name: 'Forex CFDs',
      routerLink: 'products/forex-cfds',
    },
    {
      name: 'Stock CFDs',
      routerLink: 'products/stock-cfds',
    },
    {
      name: 'Precious Metal',
      routerLink: 'products/precious-metal',
    },
    {
      name: 'Index CFDs',
      routerLink: 'products/index-cfds',
    },
    {
      name: 'Energy CFDs',
      routerLink: 'products/energy-cfds',
    },
    {
      name: 'Cryptocurrencies CFD',
      routerLink: 'products/cryptocurrencies-cfd',
    },
  ];

  accountsDropdown = [
    {
      name: 'Accounts',
      routerLink: 'accounts',
    },
    {
      name: 'MetaTrader 5 (MT5) platform',
      routerLink: 'platforms/mt5',
    },
    // {
    //   name: 'Accounts Types',
    //   // routerLink: 'accounts/account-types',
    //   routerLink: '',
    // },
  ];

  platformDropdown = [
    // {
    //   name: 'MetaTrader 5 (MT5) platform',
    //   routerLink: 'platforms/mt5',
    // },
  ];

  partnershipDropdown = [
    {
      name: 'Partnership Benefits',
      routerLink: 'partnerships/partnership-benefits',
    },
    // {
    //   name: 'Partnership Programs',
    //   routerLink: 'partnerships/partnership-programs',
    // },
    {
      routerLink: 'partnerships/ib-programs',
      name: 'IB Programs',
    },
    {
      routerLink: 'partnerships/money-managers',
      name: 'Money Managers',
    },
    {
      routerLink: 'partnerships/education-partners',
      name: 'Education Partners',
    },
    {
      routerLink: 'partnerships/finfluencer',
      name: 'Finfluencer',
    },
    {
      routerLink: 'partnerships/country-partners',
      name: 'Country Partners',
    },
    {
      routerLink: 'partnerships/social-trading',
      name: 'Social Trading',
    },
    {
      routerLink: 'partnerships/institutional-services',
      name: 'Institutional Services',
    },
  ];

  resourceDropdown = [
    {
      name: 'Introduction To Forex',
      routerLink: 'resources/introduction-to-forex',
    },
 {
    name: 'Legal Documents',
    routerLink: 'legal-documents',

  },
    {
      name: 'Trading Glossary',
      routerLink: 'resources/trading-glossary',
    },
    {
      name: 'Tools',
      routerLink: 'resources/tools',
    },
    {
      name: 'Faq',
      routerLink: 'resources/faq',
    },
    // {
    //   name: 'Contract Specification',
    //   routerLink: 'resources/contract-specifications',
    // },
  ];
  dropDownBtnClicked(subMenu: string, menu: string, index?: number) {
    this.menuName = menu;
    this.subMenuName = subMenu;
    this.isMenuCollapsed = true;
    this.selectedIndex = index!;
  }

  changeLanguage(langCode: string) {
  this.languageService.setLanguage(langCode, true); // true = manual selection
  // Notify hybrid translation service so manual overrides are used immediately
  this.hybridTranslation.setLanguage(langCode);
  this.currentLanguage = this.languageService.getCurrentLanguage();
  this.isMenuCollapsed = true;

  // Also mirror selection to the global Google Translate helper used in index.html
  try {
    // mark as manual selection so auto-detect doesn't override
    localStorage.setItem('uf_lang_manual', 'true');
    localStorage.setItem('uf_lang', langCode);

    // Clear old googtrans cookies first
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + location.hostname + ';';
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + location.hostname + ';';

    if (langCode === 'en') {
      // Reset to English: reload without new cookie
      location.reload();
      return;
    }

    var cv = '/en/' + langCode;
    document.cookie = 'googtrans=' + cv + '; path=/;';
    document.cookie = 'googtrans=' + cv + '; path=/; domain=' + location.hostname + ';';
    document.cookie = 'googtrans=' + cv + '; path=/; domain=.' + location.hostname + ';';

    // Hide page briefly to prevent content flash while GT runs, then reload
    document.documentElement.style.visibility = 'hidden';
    location.reload();
  } catch (e) {
    // If any error (SSR or strict CSP), just ignore and proceed with Angular-only change
    console.warn('Language change: unable to sync with Google Translate widget', e);
  }
  }
}
