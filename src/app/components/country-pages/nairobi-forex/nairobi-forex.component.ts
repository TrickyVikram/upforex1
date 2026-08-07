import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from 'src/app/Store/store';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-nairobi-forex',
  templateUrl: './nairobi-forex.component.html',
  styleUrls: ['./nairobi-forex.component.scss'],
})
export class NairobiForexComponent implements OnInit {
  s3URL!: string;

  // quickCards = [
  //   {
  //     title: 'Quick answer',
  //     icon: 'fa-xl fa-solid fa-circle-question',
  //   },
  //   {
  //     title: 'Three USD account types',
  //     icon: 'fa-xl fa-solid fa-user-check',
  //   },
  //   {
  //     title: 'Availability subject to checks',
  //     icon: 'fa-xl fa-solid fa-scale-balanced',
  //   },
  //   {
  //     title: 'Check CMA status',
  //     icon: 'fa-xl fa-solid fa-magnifying-glass-chart',
  //   },
  // ];
  quickCards = [
    {
      title: 'Quick Answer',
      icon: 'fa-xl fa-solid fa-circle-question',
    },
    {
      title: 'USD Accounts',
      icon: 'fa-xl fa-solid fa-user-check',
    },
    {
      title: 'Regulated Access',
      icon: 'fa-xl fa-solid fa-scale-balanced',
    },
    {
      title: 'CMA Status',
      icon: 'fa-xl fa-solid fa-magnifying-glass-chart',
    },
  ];

  markets = [
    {
      title: 'Forex Currency Trading',
      description:
        'Trade currency pairs through forex CFDs on MT5. Prices move after rate decisions, jobs data and market news. Check spreads, pips, margin, lot size and swap costs.',
      initials: 'FX',
      routerLink: '/products/forex-cfds',
    },
    {
      title: 'Gold and Precious-Metal Trading',
      description:
        "Trade gold and silver CFDs on MT5. Precious metals react to inflation, rates and global events. These contracts don't give you physical metal.",
      initials: 'PM',
      routerLink: '/products/precious-metal',
    },
    {
      title: 'Shares and Equity CFDs',
      description:
        'Follow company price moves with share CFDs, without owning the stock. Equity CFDs move with earnings, sector news and wider market trends.',
      initials: 'EQ',
      routerLink: '/products/stock-cfds',
    },
    {
      title: 'Index and Cash CFDs',
      description:
        '<a href="https://www.upforex.com/products/index-cfds">Index CFDs</a> track groups of companies in one market. Cash CFDs follow broad price moves. Check trading hours, contract terms and margin before placing a trade.',
      initials: 'IX',
      routerLink: '/products/index-cfds',
    },
    {
      title: 'Oil and Energy CFDs',
      description:
        'Trade WTI and Brent oil CFDs on MT5, where available. Energy CFDs move with supply, demand, stock levels and world events. Access varies by account and region.',
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
      text: 'The Pro-ECN account lists spreads starting at 0 pips. A $7 round-lot commission applies to eligible forex and metal trades; other listed instruments carry no published commission.',
    },
    {
      title: 'Elite-ECN Forex Trading Account',
      text: 'The Elite-ECN account has a published minimum deposit of $5,000, floating spreads from 0.1 pips and no separate trading commission.',
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
        'The Android and iOS apps let you check prices, review open positions and place orders from a compatible mobile device.',
    },
    {
      boldText: 'MT5 Web Trading',
      subText:
        'The web terminal works through a supported browser, giving account access with no desktop installation required.',
    },
    {
      boldText: 'MT5 Charting and Analysis',
      subText:
        "UPFOREX's MT5 includes more than 80 indicators and analytical tools, 21 timeframes, interactive charts, trading signals and an economic calendar. The platform supports pending orders, stop-loss and take-profit instructions.",
    },
    // {
    //   boldText: 'Pending orders, stop-loss and take-profit instructions',
    //   subText:
    //     'The platform also supports pending orders, stop-loss and take-profit instructions. These tools can help manage a strategy, but they cannot forecast results or remove trading risk.',
    // },
    // {
    //   boldText: 'MetaTrader 5 availability',
    //   subText:
    //     'UPFOREX currently promotes MetaTrader 5. Its account page does not list MT4 as an available trading platform.',
    // },
  ];

  trustItems = [
    // {
    //   boldText: 'Kenya CMA Licence Status',
    //   subText:
    //     'UPFOREX and UP Global Markets Ltd are not listed as online forex brokers on the CMA Kenya register. A foreign licence does not give local CMA approval in Kenya.',
    // },
    // {
    //   boldText: 'Mauritius Trading Entity',
    //   subText:
    //     'UP Global Markets Ltd states that it has Mauritius FSC licence GB25204570. Traders should confirm the legal entity, contract, address, and all fund terms first.',
    // },
    // {
    //   boldText: 'Published Operating History',
    //   subText:
    //     'Public records do not show one verified start date for both entities. Operating history should only be stated when registry or incorporation proof is available.',
    // },
    {
      boldText: 'Client-Fund Disclosure',
      subText:
        'UPFOREX states it uses segregated client accounts. This is a company statement, not an independent audit or state guarantee.',
    },
    {
      boldText: 'Platform and Market Scale',
      subText:
        'UPFOREX lists three account types, MT5 access, demo and live accounts, and forex, metals, shares, indices, energy, crypto and cash CFDs for local users.',
    },
  ];

  areas = [
    'Westlands',
    'Upper Hill',
    'Kilimani',
    'Parklands',
    'Karen',
    'Lavington',
    'Gigiri',
    'Eastleigh',
    'Industrial Area',
    'Nairobi Central Business District',
    'Embakasi',
  ];

  startSteps = [
    {
      title: '1. Understand Forex and CFD Risk',
      description:
        ' Learn how leverage, spreads, pips, costs and market swings affect each trade, and set aside only money you can afford to risk.',
      initials: '1',
    },
    {
      title: '2. Compare Trading Accounts',
      description:
        "Compare minimum deposits, spreads, commissions and account rules. A low starting deposit isn't automatically the most suitable fit.",
      initials: '2',
    },
    {
      title: '3. Complete Account Verification',
      description:
        'Submit your ID, address and financial details for account checks. Further documents may be required under KYC and anti-money-laundering rules.',
      initials: '3',
    },
    {
      title: '4. Choose Demo or Live Trading',
      description:
        'Use a <a href="https://www.upforex.com/demo">demo account</a> to learn charts, orders and stop-loss tools. Before going live, check the legal entity, deposit currency, withdrawals and loss limit.',
      initials: '4',
    },
    // {
    //   title: '5. Choose Demo or Live Trading',
    //   description:
    //     'Use a demo account to learn charts, orders, and stop-loss tools. Before going live, check the legal entity, deposit currency, withdrawals, and loss limit first.',
    //   initials: '5',
    // },
  ];

  cities = [
    {
      title: 'Mombasa',
      description:
        'Access MT5 online and review forex accounts, spreads, fees and broker terms before applying.',
      initials: 'MBA',
    },
    {
      title: 'Kisumu',
      description:
        'Compare forex accounts and use MT5 on desktop, mobile or web; no branch visit required.',
      initials: 'KSM',
    },
    {
      title: 'Nakuru',
      description:
        'Review USD account terms, forex markets, spreads and costs online before applying. KES conversion costs can apply to local deposits.',
      initials: 'NKR',
    },
    {
      title: 'Eldoret',
      description: 'Access MT5 charts and account tools online.',
      initials: 'EDL',
    },
    {
      title: 'Thika',
      description:
        "Use MT5 mobile apps online; this doesn't mean UPFOREX has a local office.",
      initials: 'THK',
    },
    {
      title: 'Machakos',
      description:
        ' Check MT5 features and legal documents online before sharing identity or payment details.',
      initials: 'MCK',
    },
    {
      title: 'Kiambu',
      description: 'Access forex tools remotely.',
      initials: 'KBU',
    },
  ];

  faqs = [
    // {
    //   question: 'Is forex trading legal in Kenya?',
    //   answer:
    //     "Online forex trading is regulated by Kenya's Capital Markets Authority. Traders should check the CMA register and confirm that the company offering the account holds the correct licence.",
    // },
    // {
    //   question: 'Is UPFOREX licensed by the CMA in Kenya?',
    //   answer:
    //     'A Kenya CMA licence for UPFOREX has not been confirmed. Neither UPFOREX nor UP Global Markets Ltd appeared in the reviewed CMA lists for licensed online forex brokers.',
    // },
    {
      question: 'Can I open a forex trading account from Nairobi?',
      answer:
        ' Eligible Nairobi residents can apply online. Account approval depends on identity checks, regional rules and the legal entity providing the trading service.',
    },
    {
      question: 'How do I start forex trading in Kenya?',
      answer:
        "Learn the risks, check the broker's licence and compare account fees. A demo account lets you practise on MT5 before using real funds.",
    },
    {
      question: 'What is the UPFOREX minimum deposit?',
      answer:
        'The published minimum is $100 for Standard, $1,000 for Pro-ECN and $5,000 for Elite-ECN. Accounts are listed in USD, so KES conversion costs can apply.',
    },
    {
      question: 'Can I deposit through M-Pesa or use a KES account?',
      answer:
        "Published accounts are listed and priced in USD. UPFOREX's public account page doesn't confirm M-Pesa deposits or a dedicated KES account option. Contact support directly for payment methods, fees, exchange rates and withdrawal terms.",
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
      'Forex Trading in Nairobi, Kenya | UPFOREX MT5 Access',
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
          '@id': 'https://www.upforex.com/forex-trading-nairobi#webpage',
          url: 'https://www.upforex.com/forex-trading-nairobi',
          name: 'Forex Trading in Nairobi, Kenya | UPFOREX MT5 Access',
          description:
            'Access forex, metals, shares and available CFDs in Nairobi through UPFOREX MetaTrader 5.        Compare account types, platform access, regulation notes and trading risks.',
          isPartOf: { '@id': 'https://www.upforex.com/#website' },
          about: {
            '@id': 'https://www.upforex.com/forex-trading-nairobi#service',
          },
          breadcrumb: {
            '@id': 'https://www.upforex.com/forex-trading-nairobi#breadcrumb',
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: 'https://upforex-assets.s3.eu-north-1.amazonaws.com/assets/images/JPG/home_banner_temp_1.webp',
          },
          inLanguage: 'en',
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://www.upforex.com/forex-trading-nairobi#breadcrumb',
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
              name: 'Forex Trading in Nairobi, Kenya',
            },
          ],
        },
        {
          '@type': 'Service',
          '@id': 'https://www.upforex.com/forex-trading-nairobi#service',
          name: 'Forex Trading in Nairobi, Kenya',
          serviceType: 'Forex and CFD Trading',
          description:
            'Access forex, metals, shares and available CFDs in Nairobi through UPFOREX MetaTrader 5.        Compare account types, platform access, regulation notes and trading risks.',
          provider: { '@id': 'https://www.upforex.com/#organization' },
          url: 'https://www.upforex.com/forex-trading-nairobi',
          areaServed: [
            {
              '@type': 'City',
              name: 'Nairobi',
              containedInPlace: { '@type': 'Country', name: 'Kenya' },
            },
            'Westlands',
            'Upper Hill',
            'Kilimani',
            'Parklands',
            'Karen',
            'Lavington',
            'Gigiri',
            'Eastleigh',
            'Industrial Area',
            'Nairobi Central Business District',
            'Embakasi',
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
          '@id': 'https://www.upforex.com/forex-trading-nairobi#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Can I open a forex trading account from Nairobi?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Eligible Nairobi residents can apply online. Account approval depends on identity checks,              regional rules and the legal entity providing the trading service.',
              },
            },
            {
              '@type': 'Question',
              name: 'How do I start forex trading in Kenya?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Learn the risks, check the broker's licence and compare account fees. A demo account lets you              practise on MT5 before using real funds.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the UPFOREX minimum deposit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The published minimum is $100 for Standard, $1,000 for Pro-ECN and $5,000 for Elite-ECN.              Accounts are listed in USD, so KES conversion costs can apply.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I deposit through M-Pesa or use a KES account?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Published accounts are listed and priced in USD. UPFOREX's public account page doesn't confirm              M-Pesa deposits or a dedicated KES account option. Contact support directly for payment methods, fees,              exchange rates and withdrawal terms.",
              },
            },
          ],
        },
      ],
    };

    this.metaService.updateTag({
      name: 'description',
      content:
        'Access forex, metals, shares and available CFDs in Nairobi through UPFOREX MetaTrader 5. Compare account types, platform access, regulation notes and trading risks.',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'forex trading Nairobi, forex trading Kenya, MetaTrader 5 Nairobi, UPFOREX Kenya, online forex broker Kenya',
    });

    const existing = this.document.getElementById('nairobi-schema');
    if (existing) existing.remove();
    const script = this.document.createElement('script');
    script.id = 'nairobi-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
