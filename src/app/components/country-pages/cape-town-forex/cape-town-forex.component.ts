import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-cape-town-forex',
  templateUrl: './cape-town-forex.component.html',
  styleUrls: ['./cape-town-forex.component.scss'],
})
export class CapeTownForexComponent implements OnInit {
  s3URL!: string;

  // quickCards = [
  //   {
  //     title: 'Online platform for retail and experienced traders',
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
      title: 'Online Trading',
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
        'Trade currency pairs through forex CFDs on MT5. Prices move after rate decisions, jobs data and market news. Check spreads, pips, margin, lot size and swap costs.',
      initials: 'FX',
      routerLink: '/products/forex-cfds',
    },
    {
      title: 'Gold and Precious-Metal Trading',
      description:
        "Trade gold and silver CFDs through UPFOREX on MT5. Precious metals react to inflation, interest rates, currency moves and world events. These contracts don't provide physical metal.",
      initials: 'PM',
      routerLink: '/products/precious-metal',
    },
    {
      title: 'Shares and Equity CFDs',
      description:
        'Follow company price changes with share CFDs, without owning the underlying stock. Equity CFDs move with earnings, sector news and broader market trends.',
      initials: 'EQ',
      routerLink: '/products/stock-cfds',
    },
    {
      title: 'Index and Cash CFDs',
      description:
        'Index CFDs track groups of companies within a market. Cash CFDs follow broader price moves. Check trading hours, contract terms and margin before placing a trade.',
      initials: 'IX',
      routerLink: '/products/index-cfds',
    },
    {
      title: 'Oil and Energy CFDs',
      description:
        'Trade <a href="https://www.upforex.com/products/energy-cfds">WTI and Brent oil CFDs</a> on MT5 where offered. Energy CFDs move with supply, demand, stock levels and global events. Access varies by account and region.',
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
        'The Android and iOS apps let users check prices, review open positions and place supported orders from a compatible mobile device.',
    },
    {
      boldText: 'MT5 Web Trading',
      subText:
        'The web terminal works through a supported browser, giving account access without the full desktop application.',
    },
    {
      boldText: 'MT5 Charting and Analysis',
      subText:
        "UPFOREX's MT5 includes more than 80 technical indicators and analytical tools, 21 timeframes, interactive charts, trading signals and an economic calendar.",
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
        'UPFOREX lists three account types, demo and live access, MT5 across five systems, and forex, metals, shares, indices, energy, crypto and cash CFDs.',
    },
  ];

  areas = [
    'Cape Town CBD',
    'Woodstock',
    'Claremont',
    'Bellville',
    'Durbanville',
    'Century City',
    'Observatory',
    'Rondebosch',
    'Sea Point',
    'Green Point',
    'Southern Suburbs',
  ];

  startSteps = [
    {
      title: '1. Understand Forex and CFD Risk',
      description:
        'Learn how leverage, pips, spreads, costs and volatility affect each trade, and set aside only money you can afford to risk.',
      initials: '1',
    },
    {
      title: '2. Compare Forex Trading Accounts',
      description:
        'Compare deposits, spreads, commissions and available markets. The best option for you matches your budget, risk level and withdrawal needs.',
      initials: '2',
    },
    {
      title: '3. Complete Account Verification',
      description:
        'Submit your ID, address and financial details for account verification. The broker may request further information under KYC and anti-money-laundering procedures.',
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
      title: 'Stellenbosch',
      description:
        'Compare USD accounts, spreads and MT5 tools online before submitting an application from the Western Cape.',
      initials: 'STB',
    },
    {
      title: 'Paarl',
      description:
        'Review forex markets, account fees and legal terms remotely.',
      initials: 'PRL',
    },
    {
      title: 'George',
      description:
        'Access supported desktop, mobile and web tools, subject to verification and regional requirements.',
      initials: 'GRG',
    },
    {
      title: 'Johannesburg',
      description:
        ' Compare accounts and MT5 features through the dedicated <a href="https://www.upforex.com/forex-trading-johannesburg">Johannesburg location page</a>.',
      initials: 'JHB',
    },
    {
      title: 'Pretoria',
      description:
        ' Examine spreads, commissions and available markets before sharing identity or payment information',
      initials: 'PTA',
    },
    {
      title: 'Durban',
      description: ' Review account costs and platform tools online.',
      initials: 'DBN',
    },
    {
      title: 'Gqeberha',
      description:
        "Access supported MT5 applications where available, subject to approval and the serving company's terms.",
      initials: 'GQB',
    },
  ];

  faqs = [
    // {
    //   question: 'Is forex trading legal in South Africa?',
    //   answer:
    //     'Forex and CFD services are subject to South African financial laws. Traders should confirm that the company offering the account holds suitable authorisation for its services and financial products.',
    // },
    {
      question: 'Can I open a forex trading account from Cape Town?',
      answer:
        "South Africa isn't named in UPFOREX's published restricted-region list. Access depends on identity checks, local law and the serving entity.",
    },
    {
      question: 'How do beginners start forex trading in South Africa?',
      answer:
        "Learn how leverage and margin work, check the broker's status and compare total account costs. A demo account lets you practise using MT5 before considering a live account.",
    },
    {
      question: 'What is the UPFOREX minimum deposit?',
      answer:
        'The published minimum is $100 for Standard, $1,000 for Pro-ECN and $5,000 for Elite-ECN. All three accounts are listed in USD, so ZAR conversion costs can apply.',
    },
    {
      question: 'Can I deposit by EFT or use a ZAR account?',
      answer:
        "UPFOREX's public account table doesn't directly confirm a ZAR-denominated account or a South African EFT funding option. Check with support about payment methods, exchange rates, deposit fees and withdrawal rules before sending funds.",
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
    private metaService: Meta
  ) {
    this.s3URL = this.store.s3BaseUrl();
  }

  ngOnInit(): void {
    this.titleService.setTitle(
      'Forex Trading in Cape Town, South Africa | UPFOREX MT5 Access'
    );

    this.metaService.updateTag({
      name: 'description',
      content:
        'Access forex, metals, shares and available CFDs in Cape Town through UPFOREX MetaTrader 5. Compare account types, platform access, regulation notes and trading risks.',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'forex trading Cape Town, forex trading South Africa, MetaTrader 5 Cape Town, UPFOREX South Africa, online forex broker Cape Town',
    });
  }
}
