import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-kuala-lumpur-forex',
  templateUrl: './kuala-lumpur-forex.component.html',
  styleUrls: ['./kuala-lumpur-forex.component.scss'],
})
export class KualaLumpurForexComponent implements OnInit {
  s3URL!: string;

  platformTools = [
    {
      boldText: 'MT5 Desktop Workspace',
      subText:
        'The desktop terminal provides more screen space to view several charts at once. Traders can compare instruments and use detailed technical tools. Automated trading features are also supported on the desktop platform.',
    },
    {
      boldText: 'MT5 Mobile Access',
      subText:
        'The mobile application works on compatible Android and iOS devices. Traders can check prices, review account information, and monitor open positions. Supported orders can also be placed from a phone.',
    },
    {
      boldText: 'MT5 Web Terminal',
      subText:
        'The web terminal runs through a supported browser. Traders can access charting, order, and position-management features through an internet connection. This option supports access across compatible computers.',
    },
    {
      boldText: 'MT5 Charts and Market Analysis',
      subText:
        'MT5 provides more than 80 technical indicators and analytical tools, together with 21 chart timeframes. Trading signals and an economic calendar are also included. These tools help traders organise market information and study price movements.',
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
      title: 'Standard Account Costs',
    },
    {
      bgColor: '#3cff19',
      icon: 'matSecurity',
      title: 'Pro-ECN Account Costs',
    },
    {
      bgColor: '#3cff19',
      icon: 'bootstrapSortUp',
      title: 'Elite-ECN Account Costs',
    },
  ];

  accountDetails = [
    {
      title: 'Standard Account Costs',
      text: 'The Standard account has the lowest published deposit. Its commission is listed at $0, while the floating spread forms part of the trading cost.',
    },
    {
      title: 'Pro-ECN Account Costs',
      text: 'The Pro-ECN account publishes spreads starting from 0 pips. A $7 round-lot commission applies to eligible forex and metal trades. Floating spreads can change as market conditions develop.',
    },
    {
      title: 'Elite-ECN Account Costs',
      text: 'The Elite-ECN account has a published minimum deposit of $5,000. It lists floating spreads from 0.1 pips and a published commission of $0.',
    },
  ];

  startSteps = [
    {
      title: '1. Learn How Leverage Works',
      description:
        'Understand how leverage, margin, pips, spreads, position size, and volatility affect a trade. Decide how much capital to allocate and how much risk to accept before opening a live position.',
      initials: '1',
    },
    {
      title: '2. Compare Account Costs',
      description:
        'Review the deposit, spread, commission, overnight financing, and available markets for each account. Include MYR-to-USD conversion and payment-provider costs in the comparison.',
      initials: '2',
    },
    {
      title: '3. Complete Account Verification',
      description:
        'Account registration can require identity, address, and financial information. These checks form part of the Know Your Customer and anti-money-laundering process described in the account documents.',
      initials: '3',
    },
    {
      title: '4. Practise Through Demo Trading',
      description:
        'A demo account can help beginners practise charts, orders, margin monitoring, and stop-loss controls. Demo access also provides time to understand MT5 before considering live trading.',
      initials: '4',
    },
  ];

  taxItems = [
    {
      boldText: "Malaysia's Inland Revenue Board (HASiL)",
      subText:
        "Malaysia's Inland Revenue Board, commonly known as HASiL, considers tax according to each taxpayer's facts and circumstances. The treatment of forex and CFD trading results can depend on the nature, source, frequency, and purpose of the activity.",
    },
    {
      boldText: 'Keep Records',
      subText:
        'Keep records of deposits, withdrawals, realised gains and losses, spreads, commissions, overnight financing, statements, and MYR currency conversions. Clear records can help a Malaysian tax agent understand the trading activity and identify the appropriate reporting treatment.',
    },
    {
      boldText: 'Seek Professional Advice',
      subText:
        'Traders can review current HASiL income-declaration guidance. A licensed Malaysian tax agent can provide advice based on individual circumstances.',
    },
  ];

  faqs = [
    {
      question: 'What is the published minimum deposit?',
      answer:
        'The published minimum is $100 for Standard, $1,000 for Pro-ECN, and $5,000 for Elite-ECN. All three accounts are denominated in USD.',
    },
    {
      question: 'How can traders plan MYR funding for a USD account?',
      answer:
        'Review the current MYR-to-USD exchange rate, payment method, conversion cost, processing charge, and withdrawal option through the UPFOREX cashier or support team.',
    },
    {
      question: 'Which MetaTrader 5 versions are available?',
      answer:
        'UPFOREX provides MT5 for Windows, Mac, Android, iOS, and web browsers. Traders can choose the version that matches their device and preferred way of monitoring the markets.',
    },
    {
      question: 'How should forex traders prepare Malaysian tax records?',
      answer:
        'Maintain account statements and records of deposits, withdrawals, realised results, trading costs, and MYR conversions. A Malaysian tax agent can review the activity and explain the appropriate reporting treatment.',
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
    this.titleService.setTitle('Forex Trading in Kuala Lumpur | UPFOREX MT5');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Review online forex and CFD trading in Kuala Lumpur through MT5. Compare UPFOREX accounts, markets, deposits, spreads, commissions, and platform tools.',
    });

    this.metaService.updateTag({
      name: 'keywords',
      content:
        'forex trading Kuala Lumpur, forex trading Malaysia, MetaTrader 5 Kuala Lumpur, UPFOREX Malaysia, forex account types Malaysia',
    });
  }
}