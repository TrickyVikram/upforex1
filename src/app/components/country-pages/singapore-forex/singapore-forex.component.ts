import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from 'src/app/Store/store';

import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-singapore-forex',
  templateUrl: './singapore-forex.component.html',
  styleUrls: ['./singapore-forex.component.scss'],
})
export class SingaporeForexComponent implements OnInit {
  s3URL!: string;

  platformTools = [
    {
      boldText: 'Desktop Charting Workspace',
      subText:
        'MT5 desktop provides a larger workspace for detailed market analysis. Traders can open multiple charts, compare different instruments, and apply technical indicators from one screen. Automated trading features are also supported on the desktop platform.',
    },
    {
      boldText: 'Mobile Market Access',
      subText:
        'The MT5 mobile application works on Android and iOS devices. Traders can follow live prices, review their account, and manage positions from a phone. Mobile access is useful when a market needs to be checked away from a desktop computer.',
    },
    {
      boldText: 'Browser-Based Trading',
      subText:
        'The MT5 web terminal works through a supported browser without requiring the complete desktop application. It gives traders convenient access when using another computer or switching between devices.',
    },
    {
      boldText: 'Charts, Indicators and Market Information',
      subText:
        'MT5 includes more than 80 indicators and analytical tools, 21 timeframes, interactive charts, trading signals, and an economic calendar. These features support technical and market analysis but do not predict future results.',
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
  ];

  accountDetails = [
    {
      title: 'Standard Trading Account',
      text: 'The Standard account has a published minimum deposit of $100. It lists floating spreads from 0.1 pips and no separate commission. The spread applied to a trade remains part of its total cost.',
    },
    {
      title: 'Pro-ECN Trading Account',
      text: 'The Pro-ECN account has a published minimum deposit of $1,000. It lists floating spreads starting at 0 pips and a $7 round-lot commission on qualifying forex and metal trades.',
    },
    {
      title: 'Elite-ECN Trading Account',
      text: 'The Elite-ECN account has a published minimum deposit of $5,000. It lists floating spreads from 0.1 pips and no separate commission.',
    },
  ];

  startSteps = [
    {
      title: '1. Learn How Leverage Changes Risk',
      description:
        'Understand how leverage, margin, pips, and price volatility affect a position. Use a position size that matches the amount of risk you are prepared to manage and keep essential living funds separate from trading capital.',
      initials: '1',
    },
    {
      title: '2. Calculate the Complete Account Cost',
      description:
        'Compare minimum deposits, floating spreads, commissions, overnight financing and possible SGD-to-USD conversion costs. A lower entry deposit does not automatically make one account more suitable than another.',
      initials: '2',
    },
    {
      title: '3. Prepare Verification Documents',
      description:
        'Online onboarding may require identity, address, and financial information. The client agreement refers to Know Your Customer (KYC) and anti-money laundering checks. Preparing clear and current documents can make the application process easier.',
      initials: '3',
    },
    {
      title: '4. Practise Through a Demo Account',
      description:
        'Demo trading allows beginners to practise reading charts, selecting orders, and managing positions without using real funds. Demo performance may differ from live execution, so review the current account conditions before making a live deposit.',
      initials: '4',
    },
  ];

  taxItems = [
    {
      boldText: 'IRAS Guidance',
      subText:
        "The Inland Revenue Authority of Singapore (IRAS) explains that profits and losses from buying and selling shares or other financial instruments are generally viewed as personal investments. The treatment of a particular trading activity can still depend on the trader's circumstances and the way the activity is conducted.",
    },
    {
      boldText: 'Keep Records',
      subText:
        'Keep records of deposits, withdrawals, realised gains and losses, account statements, commissions, overnight charges and SGD-to-USD conversions. These records help show how each result and related cost were calculated.',
    },
    {
      boldText: 'Not Tax Advice',
      subText:
        "Traders can review the current IRAS guidance on shares and financial instruments. This page is not tax advice. A qualified Singapore tax professional can apply the guidance to the trader's individual circumstances.",
    },
  ];

  faqs = [
    {
      question: 'What is the lowest published account deposit?',
      answer:
        'The Standard account has a published minimum deposit of $100. UPFOREX publishes a $1,000 minimum for Pro-ECN and a $5,000 minimum for Elite-ECN. All three accounts are denominated in USD.',
    },
    {
      question: 'How should SGD funding be reviewed for a USD account?',
      answer:
        'Check the SGD-to-USD exchange rate, currency-conversion charge, payment-provider fee, and withdrawal conversion before completing a transaction. Keep a record of the exchange rate and charges applied.',
    },
    {
      question: 'Which MT5 platforms does UPFOREX provide?',
      answer:
        'UPFOREX provides MetaTrader 5 for Windows, Mac, Android, iOS, and supported web browsers. Traders can use the appropriate platform version to monitor markets and manage their accounts online.',
    },
    {
      question: 'What trading records should Singapore traders keep?',
      answer:
        "Keep account statements, deposits, withdrawals, realised results, commissions, overnight financing, and SGD-to-USD conversion records. A Singapore tax professional can explain how these records apply to an individual's reporting position.",
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
    this.titleService.setTitle('Forex Trading in Singapore | UPFOREX MT5');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Explore online forex and CFD trading in Singapore through MT5. Compare UPFOREX deposits, spreads, commissions, markets, and platform features.',
    });
  }
}