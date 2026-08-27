import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from 'src/app/Store/store';

import { NgIconComponent } from '@ng-icons/core';


@Component({
  selector: 'app-manila-forex',
  templateUrl: './manila-forex.component.html',
  styleUrls: ['./manila-forex.component.scss'],
})
export class ManilaForexComponent implements OnInit {
  s3URL!: string;

  platformTools = [
    {
      boldText: 'Trading from MT5 Desktop',
      subText:
        'The desktop platform provides a larger workspace for market analysis. Traders can open several charts, compare instruments, and use technical tools from one screen. Automated trading features are also supported on the desktop version.',
    },
    {
      boldText: 'Monitoring Markets on MT5 Mobile',
      subText:
        'MT5 mobile works on Android and iOS devices. Traders can check market prices, review account activity, and manage open positions from a phone. Price alerts can also help users follow selected market movements while away from a computer.',
    },
    {
      boldText: 'Using the MT5 Web Terminal',
      subText:
        'The web terminal runs through a supported browser without requiring the complete desktop application. It provides convenient account access when moving between computers or working from different locations.',
    },
    {
      boldText: 'Reading MT5 Charts and Market Data',
      subText:
        'MT5 includes more than 80 indicators and analytical tools, 21 timeframes, interactive charts, trading signals, and an economic calendar. These tools support market analysis but cannot predict future price direction.',
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
      title: 'Standard Account Details',
    },
    {
      bgColor: '#3cff19',
      icon: 'matSecurity',
      title: 'Pro-ECN Account Details',
    },
    {
      bgColor: '#3cff19',
      icon: 'bootstrapSortUp',
      title: 'Elite-ECN Account Details',
    },
  ];

  accountDetails = [
    {
      title: 'Standard Account Details',
      text: 'The Standard account has the lowest published minimum deposit at $100. It lists floating spreads from 0.1 pips and no separate commission. The applicable spread remains part of the trading cost.',
    },
    {
      title: 'Pro-ECN Account Details',
      text: 'The Pro-ECN account has a published minimum deposit of $1,000. It lists floating spreads starting at 0 pips and a $7 round-lot commission on qualifying forex and metal trades.',
    },
    {
      title: 'Elite-ECN Account Details',
      text: 'The Elite-ECN account has a published minimum deposit of $5,000. It lists floating spreads from 0.1 pips and no separate commission.',
    },
  ];

  startSteps = [
    {
      title: '1. Understand Margin and Leverage',
      description:
        'Learn how leverage, margin, pips, spreads, and market volatility affect a position. Choose trade sizes carefully and use only funds that are separate from essential household expenses and financial commitments.',
      initials: '1',
    },
    {
      title: '2. Review the Complete Trading Cost',
      description:
        'Compare the minimum deposit, spread, commission, overnight financing, and possible PHP-to-USD conversion cost. The lowest deposit does not automatically make an account the best match for every trader.',
      initials: '2',
    },
    {
      title: '3. Complete Account Verification',
      description:
        'Online account opening may require identity, address, and financial information. The client agreement refers to Know Your Customer (KYC) and anti-money laundering checks. Prepare clear and current documents before beginning the application.',
      initials: '3',
    },
    {
      title: '4. Practise with a Demo Account',
      description:
        'A demo account allows beginners to practise reading charts, selecting order types, and managing positions without using real funds. Demo results can differ from live execution, so review the complete account terms before making a live deposit.',
      initials: '4',
    },
  ];

  taxItems = [
    {
      boldText: 'Bureau of Internal Revenue (BIR)',
      subText:
        "The Bureau of Internal Revenue (BIR) administers income tax in the Philippines. The treatment of trading gains and losses can depend on the trader's individual circumstances, income sources, and the nature of the activity.",
    },
    {
      boldText: 'Keep Records',
      subText:
        'Keep records of deposits, withdrawals, realised results, account statements, commissions, overnight charges, and currency conversions. Because UPFOREX accounts are published in USD, retaining the PHP exchange rate used for each relevant transaction can make record preparation easier.',
    },
    {
      boldText: 'Seek Professional Advice',
      subText:
        "The BIR provides current income tax information and filing resources. This page does not provide tax advice. A qualified Philippine tax professional can review the trader's circumstances and explain the appropriate reporting requirements.",
    },
  ];

  faqs = [
    {
      question: 'What is the published minimum deposit?',
      answer:
        'UPFOREX publishes a $100 minimum deposit for the Standard account, $1,000 for Pro-ECN, and $5,000 for Elite-ECN. All three account types are denominated in USD.',
    },
    {
      question: 'How can Manila traders manage PHP conversion?',
      answer:
        'Review the PHP-to-USD exchange rate, payment provider charges, and withdrawal conversion before funding an account. Keep a record of the rate and fees applied to each completed transaction.',
    },
    {
      question: 'Which MetaTrader 5 versions are available?',
      answer:
        'UPFOREX provides MT5 for Windows, Mac, Android, iOS, and supported web browsers. Account activity can be accessed across these platform versions using the relevant login details.',
    },
    {
      question: 'What tax records should a forex trader keep?',
      answer:
        'Keep account statements, deposits, withdrawals, realised gains and losses, commissions, financing charges, and PHP-to-USD conversion records. A Philippine tax professional can advise how these records apply to an individual return.',
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
    this.titleService.setTitle('Forex Trading in Manila | UPFOREX MT5');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Review online forex and CFD trading in Manila through MT5. Compare UPFOREX accounts, markets, deposits, spreads, commissions, and platform tools.',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'forex trading Manila, forex trading Philippines, MetaTrader 5 Manila, UPFOREX Philippines, forex account types Philippines',
    });
  }
}