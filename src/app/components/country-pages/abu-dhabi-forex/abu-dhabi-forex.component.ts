import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-abu-dhabi-forex',
  templateUrl: './abu-dhabi-forex.component.html',
  styleUrls: ['./abu-dhabi-forex.component.scss'],
})
export class AbuDhabiForexComponent implements OnInit {
  s3URL!: string;

  // quickCards = [
  //   {
  //     title: 'Quick answer',
  //     icon: 'fa-xl fa-solid fa-circle-question',
  //   },
  //   {
  //     title: 'Subject to verification',
  //     icon: 'fa-xl fa-solid fa-user-check',
  //   },
  //   {
  //     title: 'Jurisdiction and account terms',
  //     icon: 'fa-xl fa-solid fa-scale-balanced',
  //   },
  //   {
  //     title: 'Windows, Mac, Android, iOS or web',
  //     icon: 'fa-xl fa-solid fa-magnifying-glass-chart',
  //   },
  // ];
  quickCards = [
    {
      title: 'Quick Answer',
      icon: 'fa-xl fa-solid fa-circle-question',
    },
    {
      title: 'Verified Access',
      icon: 'fa-xl fa-solid fa-user-check',
    },
    {
      title: 'Jurisdiction Terms',
      icon: 'fa-xl fa-solid fa-scale-balanced',
    },
    {
      title: 'Multi-Platform Access',
      icon: 'fa-xl fa-solid fa-magnifying-glass-chart',
    },
  ];

  platformTools = [
    {
      boldText: 'MT5 Desktop Trading',
      subText:
        'The desktop terminal suits traders who want multiple charts, a larger workspace and detailed analytical or automated-trading tools.',
    },
    {
      boldText: 'MT5 Mobile Trading',
      subText:
        'The Android and iOS apps let you monitor prices, review positions and place orders from a compatible mobile device.',
    },
    {
      boldText: 'MT5 Web Trading',
      subText:
        'The web terminal gives browser-based access with no desktop installation required.',
    },
    {
      boldText: 'MT5 Charting and Analysis',
      subText:
        "UPFOREX's MT5 platform includes more than 80 built-in indicators and analytical tools, 21 timeframes, charting functions, trading signals and an economic calendar.",
    },
  ];

  markets = [
    {
      title: 'Forex Currency Trading',
      description:
        'Trade currency pairs through Forex CFDs on MT5. Prices move on rates, jobs data and market news. Check spreads, margin, contract size and swap costs.',
      initials: 'FX',
      routerLink: '/products/forex-cfds',
    },
    {
      title: 'Gold and Precious-Metal Trading',
      description:
        "Trade gold and silver CFDs on MT5. Precious metals react to inflation, rates and world events. These trades don't give you physical metal.",
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
        'Index CFDs track groups of major companies in one market. Cash CFDs follow broad moves. Check trading hours, contract terms and margin before a live trade.',
      initials: 'IX',
      routerLink: '/products/index-cfds',
    },
    {
      title: 'Oil and Energy CFDs',
      description:
        'Trade WTI and Brent oil CFDs on MT5, where offered. Energy CFDs move with supply, demand, stock levels and global events. Access varies by account region.',
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

  accountDetails = [
    {
      title: 'Standard Forex Trading Account',
      text: 'The Standard account has the lowest published minimum deposit. It runs a commission-free structure, with trading costs reflected in the spread.',
    },
    {
      title: 'Pro-ECN Forex Trading Account',
      text: 'The Pro-ECN account publishes spreads starting from zero pips. A $7 round-lot commission applies to eligible forex and metal trades; other instruments carry no such commission.',
    },
    {
      title: 'Elite-ECN Forex Trading Account',
      text: 'The Elite-ECN account has a published minimum deposit of $5,000, floating spreads from 0.1 pips and no separate commission.',
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
    //   title: 'Published starting spreads are not guaranteed fixed prices',
    // },
  ];

  trustItems = [
    // {
    //   boldText: 'UAE Category 5 Affiliate',
    //   subText:
    //     'UPFOREX Financial Consultation LLC holds UAE Category 5 licence 20200000350 for advice, promotion, and introductions. It does not execute forex or CFD trades.',
    // },
    // {
    //   boldText: 'Mauritius Trading Entity',
    //   subText:
    //     'UP Global Markets Ltd holds Mauritius FSC licence GB25204570. It is named as the execution entity for forex and CFD services under an Investment Dealer licence.',
    // },
    {
      boldText: 'Client-Fund Disclosure',
      subText:
        ' UPFOREX states it uses segregated client accounts. This is a company statement, not an independent audit.',
    },
    {
      boldText: 'Platform and Market Scale',
      subText:
        'UPFOREX lists three account types and MT5 on five platforms, giving demo and live access to forex, metals, shares, indices, energy, crypto and cash CFDs in the UAE',
    },
    // {
    //   boldText: 'Published Platform and Market Scale',
    //   subText:
    //     'UPFOREX lists three account types and MT5 on 5 platforms. It gives demo and live access to forex, metals, shares, indices, energy, crypto, and cash CFDs in the UAE.',
    // },
  ];

  startSteps = [
    {
      title: '1. Understand Forex and CFD Risk',
      description:
        'Learn how leverage, margin, spreads, commissions and market volatility affect a position, and decide how much capital you can afford to risk before choosing a live account.',
      initials: '1',
    },
    {
      title: '2. Compare Trading Accounts',
      description:
      " Review the minimum deposit and pricing model for Standard, Pro-ECN and Elite-ECN. The lowest deposit isn't automatically the most suitable option.",
      initials: '2',
    },
    {
      title: '3. Complete Account Verification',
      description:
        'Submit the identity, address and other information requested during onboarding. Additional documentation may be required under KYC and AML procedures.',
      initials: '3',
    },
    {
      title: '4. Choose Demo or Live Trading',
      description:
        "A demo account helps you learn the software and practise order placement without real capital. Simulated performance doesn't guarantee similar execution or results live. Before depositing, review conversion costs, withdrawal terms, the serving entity and your maximum acceptable loss.",
      initials: '4',
    },
    {
      title: '5. Plan and Place a Trade',
      description:
        'Select an instrument, review its spread and margin requirement, and set your entry, position size, stop-loss and maximum acceptable loss.',
      initials: '5',
    },
  ];

  areas = [
    'Al Maryah Island',
    'Al Reem Island',
    'Al Khalidiyah',
    'The Corniche',
    'Saadiyat Island',
    'Yas Island',
    'Al Raha',
    'Khalifa City',
    'Masdar City',
    'Mohammed Bin Zayed City',
    'Mussafah',
  ];

  cities = [
    {
      title: 'Dubai',
      description:
        'Access MT5 online and compare forex trading platforms, account types, spreads, fees and broker terms from anywhere in the city.',
      initials: 'DXB',
    },
    {
      title: 'Sharjah',
      description:
        'Use MT5 on desktop, mobile or web, and review forex accounts and broker terms online; no branch visit required.',
      initials: 'SHJ',
    },
    {
      title: 'Al Ain',
      description:
        'Compare MT5 accounts, spreads and markets online, subject to identity checks, product rules and account approval.',
      initials: 'AA',
    },
    {
      title: 'Ajman',
      description:
        ' Review forex account types and use supported MT5 mobile apps online. Check fees, legal terms and product access before applying.',
      initials: 'AJ',
    },
    {
      title: 'Ras Al Khaimah',
      description:
        'Access MT5 online and compare forex broker terms.',
      initials: 'RAK',
    },
    {
      title: 'Fujairah',
      description:
        'Access forex and CFD markets online with MT5, subject to account checks, local rules and the serving legal entity.',
      initials: 'FUJ',
    },
  ];

  faqs = [
    // {
    //   question: 'Is forex trading legal in the UAE?',
    //   answer:
    //     'Forex and CFD activities are subject to regulatory and jurisdictional requirements. Verify the entity providing the account and confirm that its licence covers the relevant activity; a Category 5 advice or introducing licence is not a forex-execution licence.',
    // },
    {
      question: 'Can I open a forex trading account from Abu Dhabi?',
      answer:
        "Eligible residents can apply online, subject to identity verification, jurisdiction checks and the applicable entity's onboarding rules.",
    },
    {
      question: 'What is the UPFOREX minimum deposit?',
      answer:
        ' Published minimums are $100 for Standard, $1,000 for Pro-ECN and $5,000 for Elite-ECN. Check the account page before registering, as terms can change.',
    },
    {
      question: 'Does UPFOREX offer MT4 or MT5?',
      answer:
        "UPFOREX publishes MetaTrader 5 for Windows, Mac, Android, iOS and web-terminal access. MT4 isn't listed as an available platform.",
    },
    {
      question: 'Is a demo forex account available?',
      answer:
        ' Yes. UPFOREX offers demo and live registration. A demo account helps you learn platform functions, though simulated execution and results can differ from live-market conditions.',
    },
    {
      question: 'Does UPFOREX offer Islamic or swap-free trading?',
      answer:
        "The published account table doesn't break out Islamic or swap-free terms, eligibility, charges or Shariah oversight separately.",
    },
    {
      question: 'What fees can apply to forex trading?',
      answer:
        'Potential costs include spreads, commissions, overnight financing, currency conversion and payment-related charges. Pro-ECN publishes a $7 round-lot commission for forex and metals; Standard and Elite-ECN publish zero separate commission.',
    },
    // {
    //   question: 'How do I contact UPFOREX?',
    //   answer:
    //     'The website provides a contact form, email address and public-enquiry telephone number. Its contact page currently publishes Monday-to-Friday enquiry hours from 9 a.m. to 5 p.m.',
    // },
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
    private metaService: Meta
  ) {
    this.s3URL = this.store.s3BaseUrl();
  }

  ngOnInit(): void {
    this.titleService.setTitle('Forex Trading in Abu Dhabi, UAE | UPFOREX MT5 Access');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Access forex, metals, shares and available CFDs in Abu Dhabi through UPFOREX MetaTrader 5. Compare account types, platforms, regulation details and trading risk.',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'forex trading Abu Dhabi, forex trading UAE, MetaTrader 5 Abu Dhabi, UPFOREX UAE, forex account types UAE',
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
