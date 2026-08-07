import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from 'src/app/Store/store';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-johannesburg-forex',
  templateUrl: './johannesburg-forex.component.html',
  styleUrls: ['./johannesburg-forex.component.scss'],
})
export class JohannesburgForexComponent implements OnInit {
  s3URL!: string;

  // quickCards = [
  //   {
  //     title: 'Online access to global financial markets',
  //     icon: 'fa-xl fa-solid fa-globe',
  //   },
  //   {
  //     title: 'MetaTrader 5 desktop, mobile and web',
  //     icon: 'fa-xl fa-solid fa-chart-line',
  //   },
  //   {
  //     title: 'Three published account types',
  //     icon: 'fa-xl fa-solid fa-user-check',
  //   },
  //   {
  //     title: 'Access depends on checks and regional rules',
  //     icon: 'fa-xl fa-solid fa-scale-balanced',
  //   },
  // ];
  quickCards = [
    {
      title: 'Global Markets',
      icon: 'fa-xl fa-solid fa-globe',
    },
    {
      title: 'MT5 Platform',
      icon: 'fa-xl fa-solid fa-chart-line',
    },
    {
      title: 'Account Types',
      icon: 'fa-xl fa-solid fa-user-check',
    },
    {
      title: 'Regulated Access',
      icon: 'fa-xl fa-solid fa-scale-balanced',
    },
  ];

  markets = [
    {
      title: 'Forex Currency Trading',
      description:
        'Trade currency pairs through forex CFDs on MT5. Prices move after rate decisions, job reports and market news. Check spreads, pips, margin, lot size and swap costs.',
      initials: 'FX',
      routerLink: '/products/forex-cfds',
    },
    {
      title: 'Gold and Precious-Metal Trading',
      description:
        "Trade gold and silver CFDs on MT5. Precious metals react to inflation, rates and world events. These contracts don't provide physical metal.",
      initials: 'PM',
      routerLink: '/products/precious-metal',
    },
    {
      title: 'Shares and Equity CFDs',
      description:
        'Follow company price moves with <a href="https://www.upforex.com/products/stock-cfds">share CFDs</a>, without owning the stock. Equity CFDs move with earnings, sector news and wider market trends.',
      initials: 'EQ',
      routerLink: '/products/stock-cfds',
    },
    {
      title: 'Index and Cash CFDs',
      description:
        'Index CFDs track groups of major companies in one market. Cash CFDs follow broad moves. Check trading hours, contract terms and margin before placing a trade.',
      initials: 'IX',
      routerLink: '/products/index-cfds',
    },
    {
      title: 'Oil and Energy CFDs',
      description:
        'Trade WTI and Brent oil CFDs on MT5 where offered. Energy CFDs move with supply, demand, stock levels and global events. Access varies by account and region.',
      initials: 'BO',
      routerLink: '/products/energy-cfds',
    },
  ];

  accounts = [
    {
      name: 'Standard',
      deposit: '$100',
      spread: 'From 0.1 pips',
      commission: '$0',
    },
    {
      name: 'Pro-ECN',
      deposit: '$1,000',
      spread: 'From 0 pips',
      commission: '$7 per round lot on forex and metals',
    },
    {
      name: 'Elite-ECN',
      deposit: '$5,000',
      spread: 'From 0.1 pips',
      commission: '$0',
    },
  ];

  accountFeatureData = [
    {
      bgColor: '#3cff19',
      icon: 'bootstrapBank',
      title: 'Standard Forex Trading Account',
    },
    {
      bgColor: '#3cff19',
      icon: 'matSecurity',
      title: 'Pro-ECN Forex Trading Account',
    },
    {
      bgColor: '#3cff19',
      icon: 'bootstrapSortUp',
      title: 'Elite-ECN Forex Trading Account',
    },
    // {
    //   bgColor: '#3cff19',
    //   icon: 'matSupportAgent',
    //   title: 'Starting spreads are not fixed or guaranteed',
    // },
  ];

  accountDetails = [
    {
      title: 'Standard Forex Trading Account',
      text: 'The Standard account has the lowest published minimum deposit and no separate commission; the main trading cost sits in the spread.',
    },
    {
      title: 'Pro-ECN Forex Trading Account',
      text: 'The Pro-ECN account lists spreads starting at 0 pips. A $7 round-lot commission applies to eligible forex and metal trades; no commission is listed for its other instruments.',
    },
    {
      title: 'Elite-ECN Forex Trading Account',
      text: 'The Elite-ECN account has a published minimum deposit of $5,000, floating spreads from 0.1 pips and no separate commission.',
    },
  ];

  platformTools = [
    {
      boldText: 'MT5 Desktop Trading',
      subText:
        'The desktop terminal suits traders who need several charts, a larger workspace and access to technical or automated trading tools.',
    },
    {
      boldText: 'MT5 Mobile Trading',
      subText:
        'The Android and iOS apps let traders check prices, review open positions and place supported orders from a compatible mobile device.',
    },
    {
      boldText: 'MT5 Web Trading',
      subText:
        'The web terminal works through a supported browser, giving account access without the full desktop application.',
    },
    {
      boldText: 'MT5 Charting and Analysis',
      subText:
        "UPFOREX's MT5 includes more than 80 technical indicators and analytical tools, 21 timeframes, interactive charts, trading signals and an economic calendar. These tools help manage positions; they don't predict market results or remove risk.",
    },
  ];

  trustItems = [
    {
      boldText: 'Client-Fund Disclosure',
      subText:
        'UPFOREX states it uses segregated client accounts. This is a company statement, not an independent audit or state guarantee.',
    },
    {
      boldText: 'Platform and Market Scale',
      subText:
        'UPFOREX lists three account types, demo and live access, MT5 across five systems, and forex, metals, shares, indices, energy, crypto and cash CFDs',
    },
  ];

  areas = [
    'Sandton',
    'Rosebank',
    'Fourways',
    'Randburg',
    'Midrand',
    'Braamfontein',
    'Soweto',
    'Roodepoort',
    'Parktown',
    'Johannesburg CBD',
  ];

  startSteps = [
    {
      title: '1. Understand Forex and CFD Risk',
      description:
        'Learn how leverage, pips, spreads, costs and volatility affect every trade, and set aside only money you can afford to risk.',
      initials: '1',
    },
    {
      title: '2. Compare Forex Trading Accounts',
      description:
        'Compare deposits, spreads, commissions and markets. The best account for you matches your budget, risk level and withdrawal needs.',
      initials: '2',
    },
    {
      title: '3. Complete Account Verification',
      description:
        'Submit your ID, address and financial details for account verification. Further documents may be required under KYC and anti-money-laundering rules.',
      initials: '3',
    },
    {
      title: '4. Choose Demo or Live Trading',
      description:
        'Use a demo account to practise charts, orders and stop-loss tools. Before going live, check rand conversion costs, withdrawals, the legal entity and your loss limit.',
      initials: '4',
    },
  ];

  cities = [
    {
      title: 'Pretoria',
      description:
        'Compare USD accounts, spreads, commissions and MT5 features online before submitting an account application.',
      initials: 'PTA',
    },
    {
      title: 'Cape Town',
      description:
        ' Access supported desktop, mobile and web trading tools, subject to verification and regional terms.',
      initials: 'CPT',
    },
    {
      title: 'Durban',
      description:
        'Review forex markets, account costs and legal documents online; no branch visit required.',
      initials: 'DBN',
    },
    {
      title: 'Gqeberha',
      description: 'Access supported MT5 apps online.',
      initials: 'GQB',
    },
    {
      title: 'Bloemfontein',
      description:
        'Compare available accounts and market products before providing identity or payment details.',
      initials: 'BFN',
    },
    {
      title: 'Polokwane',
      description:
        'Review MT5 features, spreads and broker terms online, subject to approval and product availability.',
      initials: 'PLK',
    },
    {
      title: 'Mbombela',
      description: 'Access supported online tools.',
      initials: 'MBM',
    },
  ];

  faqs = [
    // {
    //   question: 'Is forex trading legal in South Africa?',
    //   answer:
    //     'Forex and CFD services are subject to financial rules. Traders should confirm that the provider holds suitable authorisation for the financial products and services it offers.',
    // },
    {
      question: 'Can I open a forex trading account from Johannesburg?',
      answer:
        "South Africa is not named on UPFOREX's published restricted-regions list. Access remains subject to local law and company checks.",
    },
    {
      question: 'How do I start forex trading in South Africa?',
      answer:
        "Learn the risks, check the provider's regulatory status and compare trading costs. A demo account lets you practise on MT5 before considering a live account.",
    },
    {
      question: 'What is the UPFOREX minimum deposit?',
      answer:
        'The published minimum is $100 for Standard, $1,000 for Pro-ECN and $5,000 for Elite-ECN. Accounts are listed in USD, so ZAR conversion charges can apply.',
    },
    {
      question: 'Can I deposit by EFT or use a ZAR account?',
      answer:
        "The public account table doesn't list a ZAR-denominated account or confirm South African EFT funding directly. Check with support for payment methods, exchange rates, deposit fees and withdrawal terms.",
    },
  ];

  images: string[] = [
    'assets/images/mt5/mt5_1.webp',
    'assets/images/mt5/mt5_2.webp',
    'assets/images/mt5/mt5_3.webp',
    'assets/images/mt5/mt5_4.webp',
    'assets/images/mt5/mt5_5.webp',
    'assets/images/mt5/mt5_6.webp',
    'assets/images/mt5/mt5_7.webp',
  ];

  constructor(
    private store: Store,
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.s3URL = this.store.s3BaseUrl();
  }

  ngOnInit(): void {
    this.titleService.setTitle(
      'Forex Trading in Johannesburg, South Africa | UPFOREX MT5 Access',
    );

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
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
          image: { '@id': 'https://www.upforex.com/#logo' },
          description:
            'UPFOREX is an online forex and CFD trading platform providing access to forex, metals, shares,        indices, energy and cryptocurrency CFDs through MetaTrader 5.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '4th Floor, Docks 4, The Docks, Caudan',
            addressLocality: 'Port Louis',
            addressCountry: 'MU',
          },
          email: 'support@upforex.com',
          telephone: '+230 55004578',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+230 55004578',
            email: 'support@upforex.com',
            contactType: 'customer support',
            availableLanguage: [
              'English',
              'Hindi',
              'Arabic',
              'French',
              'Spanish',
              'German',
              'Chinese',
              'Japanese',
              'Portuguese',
              'Russian',
            ],
          },
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'license',
            name: 'Investment Dealer (Full Service Dealer, Excluding Underwriting) License No. GB25204570',
            recognizedBy: {
              '@type': 'GovernmentOrganization',
              name: 'Financial Services Commission (FSC) Mauritius',
            },
          },
          subOrganization: {
            '@type': 'Organization',
            name: 'UPFOREX Financial Consultation LLC',
            description:
              'UAE affiliated partner licensed and regulated by the UAE Securities and Commodities          Authority (SCA) under Category 5 - Arrangement & Advice.',
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'license',
              name: 'SCA Category 5 - Arrangement & Advice License No. 20200000350',
              recognizedBy: {
                '@type': 'GovernmentOrganization',
                name: 'Securities and Commodities Authority (SCA), United Arab Emirates',
              },
            },
          },
          sameAs: [
            'https://www.facebook.com/upforexltd',
            'https://www.instagram.com/upforexltd',
            'https://www.linkedin.com/company/upforex-ltd',
            'https://x.com/upforexltd',
            'https://www.trustpilot.com/review/upforex.com',
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            bestRating: '5',
            reviewCount: '427',
          },
          review: [
            {
              '@type': 'Review',
              name: 'Absolutely speechless',
              reviewBody:
                'Service of this company was just marvelous! I will definitely use their products again.',
              author: { '@type': 'Person', name: 'David Narrator' },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
            },
            {
              '@type': 'Review',
              name: 'Highly Recommended',
              reviewBody:
                'I can recommend this company without any doubt. Good job, guys!',
              author: { '@type': 'Person', name: 'John Doe' },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
            },
            {
              '@type': 'Review',
              name: 'As good as expected',
              reviewBody:
                'I tried a lot of other services, but this one was the best and completely fulfilled my            expectations.',
              author: { '@type': 'Person', name: 'John Doe' },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.upforex.com/#website',
          url: 'https://www.upforex.com/',
          name: 'UPFOREX',
          publisher: { '@id': 'https://www.upforex.com/#organization' },
          inLanguage: 'en',
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.upforex.com/forex-trading-johannesburg#webpage',
          url: 'https://www.upforex.com/forex-trading-johannesburg',
          name: 'Forex Trading in Johannesburg, South Africa | UPFOREX MT5 Access',
          description:
            'Access forex, metals, shares and available CFDs in Johannesburg through UPFOREX MetaTrader 5.        Compare account types, platform access, regulation notes and trading risks.',
          isPartOf: { '@id': 'https://www.upforex.com/#website' },
          about: {
            '@id': 'https://www.upforex.com/forex-trading-johannesburg#service',
          },
          breadcrumb: {
            '@id':
              'https://www.upforex.com/forex-trading-johannesburg#breadcrumb',
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/assets/images/JPG/home_banner_temp_1.webp',
          },
          inLanguage: 'en',
        },
        {
          '@type': 'BreadcrumbList',
          '@id':
            'https://www.upforex.com/forex-trading-johannesburg#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.upforex.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Forex Trading in South Africa',
              item: 'https://www.upforex.com/forex-trading-south-africa',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Forex Trading in Johannesburg',
            },
          ],
        },
        {
          '@type': 'Service',
          '@id': 'https://www.upforex.com/forex-trading-johannesburg#service',
          name: 'Forex Trading in Johannesburg, South Africa',
          serviceType: 'Forex and CFD Trading',
          description:
            'Access forex, metals, shares and available CFDs in Johannesburg through UPFOREX MetaTrader 5.        Compare account types, platform access, regulation notes and trading risks.',
          provider: { '@id': 'https://www.upforex.com/#organization' },
          url: 'https://www.upforex.com/forex-trading-johannesburg',
          areaServed: [
            {
              '@type': 'City',
              name: 'Johannesburg',
              containedInPlace: { '@type': 'Country', name: 'South Africa' },
            },
            'Sandton',
            'Rosebank',
            'Fourways',
            'Randburg',
            'Midrand',
            'Braamfontein',
            'Soweto',
            'Roodepoort',
            'Parktown',
            'Johannesburg CBD',
          ],
          availableChannel: {
            '@type': 'ServiceChannel',
            name: 'UPFOREX Online Client Portal (MetaTrader 5)',
            serviceUrl: 'https://client.upforex.live/?tab=register',
          },
          brand: { '@type': 'Brand', name: 'UPFOREX' },
          category: 'Financial Trading Services',
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.upforex.com/forex-trading-johannesburg#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Can I open a forex trading account from Johannesburg?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "South Africa is not named on UPFOREX's published restricted-regions list. Access remains              subject to local law and company checks.",
              },
            },
            {
              '@type': 'Question',
              name: 'How do I start forex trading in South Africa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Learn the risks, check the provider's regulatory status and compare trading costs. A demo              account lets you practise on MT5 before considering a live account.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the UPFOREX minimum deposit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The published minimum is $100 for Standard, $1,000 for Pro-ECN and $5,000 for Elite-ECN.              Accounts are listed in USD, so ZAR conversion charges can apply.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I deposit by EFT or use a ZAR account?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "The public account table doesn't list a ZAR-denominated account or confirm South African EFT              funding directly. Check with support for payment methods, exchange rates, deposit fees and withdrawal              terms.",
              },
            },
          ],
        },
      ],
    };

    this.metaService.updateTag({
      name: 'description',
      content:
        'Access forex, metals, shares and available CFDs in Johannesburg through UPFOREX MetaTrader 5. Compare account types, platform access, regulation notes and trading risks.',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'forex trading Johannesburg, forex trading South Africa, MetaTrader 5 Johannesburg, UPFOREX South Africa, online forex broker Johannesburg',
    });

    const existing = this.document.getElementById('johannesburg-schema');
    if (existing) existing.remove();
    const script = this.document.createElement('script');
    script.id = 'johannesburg-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
