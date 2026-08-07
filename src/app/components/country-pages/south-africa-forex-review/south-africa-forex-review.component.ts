import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from 'src/app/Store/store';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-south-africa-forex-review',
  templateUrl: './south-africa-forex-review.component.html',
  styleUrls: ['./south-africa-forex-review.component.scss'],
})
export class SouthAfricaForexReview2Component implements OnInit {
  s3URL!: string;

  platformTools = [
    {
      boldText: 'MT5 Desktop Trading',
      subText:
        'Desktop access gives traders a bigger charting workspace. Multiple charts can run side by side for easy comparison. This setup suits traders who use detailed technical tools. Automated trading features are also supported here.',
    },
    {
      boldText: 'MT5 Mobile Trading',
      subText:
        'The mobile app works on both Android and iOS devices. Traders can check prices and review open positions anytime. Orders can be placed straight from a phone. This suits traders who need access on the move.',
    },
    {
      boldText: 'MT5 Web Trading',
      subText:
        'The web terminal runs through any supported browser. No extra software needs to be installed on the device. This gives quick access from any computer. It works well for traders switching between devices often.',
    },
    {
      boldText: 'MT5 Charts and Analysis',
      subText:
        "MT5 offers more than 80 indicators and 21 timeframes for chart analysis. These tools help traders read market moves clearly. An economic calendar and trading signals are included too. Charts can't predict future prices.",
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
      title: 'Standard Account',
    },
    {
      bgColor: '#3cff19',
      icon: 'matSecurity',
      title: 'Pro-ECN Account',
    },
    {
      bgColor: '#3cff19',
      icon: 'bootstrapSortUp',
      title: 'Elite-ECN Account',
    },
    // {
    //   bgColor: '#3cff19',
    //   icon: 'matSupportAgent',
    //   title: 'Starting spreads are not fixed',
    // },
  ];

  accountDetails = [
    {
      title: 'Standard Account',
      text: 'The Standard account has the lowest published deposit. It lists no separate commission, but the applicable spread remains a trading cost.',
    },
    {
      title: 'Pro-ECN Account',
      text: 'The Pro-ECN account lists spreads starting at 0 pips. A $7 round-lot commission applies to eligible forex and metal trades.',
    },
    {
      title: 'Elite-ECN Account',
      text: 'The Elite-ECN account has a $5,000 published deposit, spreads from 0.1 pips and no separate commission. Starting spreads are not fixed. UPFOREX also publishes a 50% margin-call level and a 30% stop-out level.',
    },
  ];

  startSteps = [
    {
      title: '1. Understand the Risk',
      description:
        'Learn how leverage, margin, pips, spreads and volatility affect a position. Avoid trading with rent, school fees, loans or money needed for daily costs.',
      initials: '1',
    },
    {
      title: '2. Compare Accounts',
      description:
        "Compare deposits, total costs, leverage, markets and withdrawal rules. A low entry amount doesn't necessarily make an account the most suitable fit.",
      initials: '2',
    },
    {
      title: '3. Complete Identity Checks',
      description:
        'Onboarding may require identity, address and financial information. The client agreement refers to Know Your Customer (KYC) and anti-money-laundering checks.',
      initials: '3',
    },
    {
      title: '4. Test Demo Access',
      description:
        "A demo account can help beginners practise charts and orders without real funds. Demo results may differ from live execution. Before depositing, review conversion costs, withdrawal terms, the serving entity and the maximum loss you're comfortable with.",
      initials: '4',
    },
  ];

  taxItems = [
    {
      boldText: 'The South African Revenue Service (SARS)',
      subText:
        'The South African Revenue Service (SARS) applies tax rules according to each case. Trading gains may receive income or capital treatment depending on the activity, intention and instrument. SARS treats capital gains as part of the income-tax system, applicable to individuals, trusts and companies.',
    },
    {
      boldText: 'Keep records',
      subText:
        'Keep records of deposits, withdrawals, realised gains and losses, fees, statements and currency conversions. SARS publishes exchange-rate information for translating foreign-currency amounts into rand.',
    },
    {
      boldText: 'This page is not tax advice',
      subText:
        "This page is not tax advice. A registered tax practitioner should review the trader's circumstances and filing duties.",
    },
  ];

  faqs = [
    {
      question: 'What is the minimum deposit?',
      answer:
        'The published minimum is $100 for Standard, $1,000 for Pro-ECN and $5,000 for Elite-ECN. The accounts are denominated in USD.',
    },
    {
      question: 'Can I fund an account with ZAR or EFT?',
      answer:
        'The public account table does not confirm a ZAR account or domestic EFT option. Ask support about payment methods, conversion rates, fees and withdrawals.',
    },
    {
      question: 'Does UPFOREX provide MT4 or MT5?',
      answer:
        'UPFOREX publishes MT5 for Windows, Mac, Android, iOS and web terminals. Its account page does not list MT4.',
    },
    {
      question: 'Do forex traders pay tax?',
      answer:
        "Tax treatment depends on each person's activity and circumstances. Keep complete records and seek advice from a registered tax practitioner.",
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
      'Forex Trading in South Africa | UPFOREX MT5 Review',
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
          '@id': 'https://www.upforex.com/forex-trading-south-africa#webpage',
          url: 'https://www.upforex.com/forex-trading-south-africa',
          name: 'Forex Trading in South Africa | UPFOREX MT5 Review',
          description:
            'Review forex, metals, shares and available CFDs in South Africa through UPFOREX MT5. Compare        account types, platform tools, regulation notes and risk warnings.',
          isPartOf: { '@id': 'https://www.upforex.com/#website' },
          about: {
            '@id': 'https://www.upforex.com/forex-trading-south-africa#service',
          },
          breadcrumb: {
            '@id':
              'https://www.upforex.com/forex-trading-south-africa#breadcrumb',
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
            'https://www.upforex.com/forex-trading-south-africa#breadcrumb',
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
            },
          ],
        },
        {
          '@type': 'Service',
          '@id': 'https://www.upforex.com/forex-trading-south-africa#service',
          name: 'Forex Trading in South Africa',
          serviceType: 'Forex and CFD Trading',
          description:
            'Review forex, metals, shares and available CFDs in South Africa through UPFOREX MT5. Compare        account types, platform tools, regulation notes and risk warnings.',
          provider: { '@id': 'https://www.upforex.com/#organization' },
          url: 'https://www.upforex.com/forex-trading-south-africa',
          areaServed: { '@type': 'Country', name: 'South Africa' },
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
          '@id': 'https://www.upforex.com/forex-trading-south-africa#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is the minimum deposit?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The published minimum is $100 for Standard, $1,000 for Pro-ECN and $5,000 for Elite-ECN. The              accounts are denominated in USD.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I fund an account with ZAR or EFT?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The public account table does not confirm a ZAR account or domestic EFT option. Ask support              about payment methods, conversion rates, fees and withdrawals.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does UPFOREX provide MT4 or MT5?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'UPFOREX publishes MT5 for Windows, Mac, Android, iOS and web terminals. Its account page does              not list MT4.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do forex traders pay tax?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Tax treatment depends on each person's activity and circumstances. Keep complete records and              seek advice from a registered tax practitioner.",
              },
            },
          ],
        },
      ],
    };

    this.metaService.updateTag({
      name: 'description',
      content:
        'Review forex, metals, shares and available CFDs in South Africa through UPFOREX MT5. Compare account types, platform tools, regulation notes and risk warnings.',
    });

    const existing = this.document.getElementById('south-africa-schema');
    if (existing) existing.remove();
    const script = this.document.createElement('script');
    script.id = 'south-africa-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}
