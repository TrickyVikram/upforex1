interface SmarterTrade {
  title: string;
  description: string;
  initials: string;
  routerLink: string;
}

export const smarterTradeData: SmarterTrade[] = [
  {
    title: 'Forex',
    description:
      "Unlock the potential of the world’s largest financial market with Forex Trading at UPFOREX. Whether you're a beginner or an experienced trader, our low-spread forex trading platform offers fast execution, deep liquidity, and real-time payouts to enhance your trading experience",
    initials: 'FX',
    routerLink: 'products/forex-cfds',
  },
  {
    title: 'CFD Stock Trading | 200+ Top Company Shares | UPFOREX',
    description:
      'Invest in 200+ top US stocks like Apple & Tesla with CFDs. Benefit from leverage, fractional shares, fast execution & tight spreads. No hidden fees.',
    initials: 'EQ',
    routerLink: 'products/stock-cfds',
  },
  {
    title: 'Trusted Precious Metals Trading Platform​ | Forex CFD Trading',
    description:
      'UPFOREX is your trusted Precious Metals Trading Platform, offering secure Forex CFD Trading with advanced tools, built for secure, fast, and low-cost trading.',
    initials: 'PM',
    routerLink: 'products/precious-metal',
  },
  {
    title: 'Index CFD Trading Platform | Fast Execution | UPFOREX',
    description:
      'Trade OTC Index CFDs on UPFOREX. Enjoy direct market access, ultra-fast execution on any device, and powerful tools for portfolio hedging. Start now.',
    initials: 'BO',
    routerLink: 'products/index-cfds',
  },
  {
    title: 'Online Oil Trading Platform | Energy CFDs | UPFOREX',
    description:
      'Start online oil trading with the UPFOREX platform. Enjoy competitive spreads, flexible leverage, and transparent pricing on global energy markets.',
    initials: 'BO',
    routerLink: 'products/energy-cfds',
  },
  {
    title: 'Leading CFD Bitcoin Broker Platform | Live Bitcoin Trading',
    description:
      'UPFOREX is a trusted CFD Bitcoin Broker Platform, offering secure live bitcoin trading with advanced tools, secure platforms and expert features, Join Now!',
    initials: 'CFD',
    routerLink: 'products/cryptocurrencies-cfd',
  },
];
export const smartTradeFeaturesData = [
  {
    bgColor: '#3cff19',
    icon: 'bootstrapBank',
    title: 'Built for Modern Traders',
  },
  {
    bgColor: '#3cff19',
    icon: 'matSecurity',
    title: 'Committed to Transparency and Security',
  },
  {
    bgColor: '#3cff19',
    icon: 'bootstrapSortUp',
    title: 'Next-Gen Trading Infrastructure',
  },
  {
    bgColor: '#3cff19',
    icon: 'matSupportAgent',
    title: 'Always Here When You Need Us',
  },
];
export const mobileAppData = [
  {
    boldText: 'Advanced Charting Tools',
    subText:
      'Access real-time charts with multiple timeframes and built-in technical indicators.',
  },
  {
    boldText: 'Multi-Asset Trading',
    subText:
      'Trade Forex, stocks, indices, commodities, and cryptocurrencies from a single platform.',
  },
  {
    boldText: 'Full Account Control',
    subText:
      'Manage your trades, place orders, and monitor your portfolio effortlessly.',
  },
  {
    boldText: 'Real-Time Market Data',
    subText:
      'Stay updated with live prices and news for informed decision-making.',
  },
  {
    boldText: 'Secure & User-Friendly',
    subText:
      ' Enjoy a safe and responsive trading environment, optimized for mobile.',
  },
];
