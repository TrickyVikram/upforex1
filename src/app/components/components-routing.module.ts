import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RiskDisclosureComponent } from './risk-disclosure/risk-disclosure.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AntiMoneyLaunderingComponent } from './anti-money-laundering/anti-money-laundering.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ListBlogsComponent } from './list.blogs/list.blogs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LegelDocumentPgeComponent } from '../legel-document-pge/legel-document-pge.component';
import { AbuDhabiForexComponent } from './country-pages/abu-dhabi-forex/abu-dhabi-forex.component';
import { CapeTownForexComponent } from './country-pages/cape-town-forex/cape-town-forex.component';
import { JohannesburgForexComponent } from './country-pages/johannesburg-forex/johannesburg-forex.component';
import { NairobiForexComponent } from './country-pages/nairobi-forex/nairobi-forex.component';
import { SouthAfricaForexReview2Component } from './country-pages/south-africa-forex-review/south-africa-forex-review.component';

import { KualaLumpurForexComponent } from './country-pages/kuala-lumpur-forex/kuala-lumpur-forex.component';
import { ManilaForexComponent } from './country-pages/manila-forex/manila-forex.component';
import { SingaporeForexComponent } from './country-pages/singapore-forex/singapore-forex.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'UPFOREX | Forex, CFD & Crypto Trading Platform on MT5',
      description:
        'Trade forex, CFDs and crypto on MetaTrader 5 with UPFOREX. Enjoy fast execution, competitive spreads and secure global account access.',
    },
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: {
      title: ' About Us: Your Trusted Trading Partner | UpForex',
      description: 'We are a regulated broker for secure online trading. Our values, mission, and commitment to providing a secure and advanced forex trading experience.',
      keywords: 'About UpForex, Forex Broker, Trusted Forex Platform, Forex Company, Our Team'
    }
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: {
      title: 'Contact UPFOREX | Support for Forex & CFD Traders',
      description:
        'Questions about your account or trading? Contact the UPFOREX support team by phone, email or live chat and get the help you need.',
      keywords: 'contact UpForex, forex support 24/7, live forex help, trading assistance, forex customer service'
    }
  },

  {
    path: 'risk-disclosure',
    component: RiskDisclosureComponent,
    data: {
      title: 'Understand Trading Risks | Official Disclosure | UPFOREX',
      description: 'Official UPFOREX risk disclosure: Understand key risks of leveraged trading in Forex, CFDs. Essential reading for all traders to comprehend potential losses.',
      keywords: 'Understand Trading Risks | Official Disclosure | UPFOREX'
    }
  },
  {
    path: 'anti-monry-laundering',
    component: AntiMoneyLaunderingComponent,
    data: {
      title: 'Anti-Money Laundering Policy | UpForex',
      description: 'UpForex adheres to strict anti-money laundering regulations to ensure safe trading.',
      keywords: 'AML policy, forex compliance, money laundering prevention'
    }
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    data: {
      title: 'Privacy Policy | UpForex',
      description: 'See how UpForex protects your personal data and ensures secure trading practices.',
      keywords: 'forex privacy, user data policy, upforex data security'
    }
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'resources',
    loadChildren: () => import('./resources/resources.module').then((m) => m.ResourcesModule),
  },
  {
    path: 'platforms',
    loadChildren: () => import('./platforms/platforms.module').then((m) => m.PlatformsModule),
  },

  {
    path: 'platforms/mt5',
    data: {
      title: 'Trade on MT5 Platform | Top Multi Asset Trading Platform',
      description: 'Trade on MT5 Platform with UPFOREX, the trusted Multi Asset Trading Platform offering powerful tools, secure trading, and affordable costs. Trade Smarter!',
      keywords: 'mt5 platform, multi asset trading platform​'
    },
    loadChildren: () => import('./platforms/platforms.module').then((m) => m.PlatformsModule),
  },
  {
    path: 'partnerships',
    loadChildren: () => import('./partnership/partnership.module').then((m) => m.PartnershipModule),
  },
  {
    path: 'partnerships/social-trading',
    data: {
      title: 'Join UPFOREX Social Trading Program | Trade & Earn',
      description: 'Join the UPFOREX Social Trading Program to follow expert traders, copy winning strategies, and earn commissions while improving your trading skills.',
      keywords: 'Forex social trading platform, social trading, Forex social trading'
    },
    loadChildren: () => import('./partnership/partnership.module').then((m) => m.PartnershipModule),
  },
  {
    path: 'partnerships/education-partners',
    data: {
      title: 'UPFOREX Education Partners Program | Teach & Earn',
      description:
        'Join the UPFOREX Education Partners Program to teach traders, share your knowledge and earn globally in forex education.',
      keywords: 'Forex trading education platform, Forex trading, Forex trading for beginners, Forex trading education'
    },
    loadChildren: () => import('./partnership/partnership.module').then((m) => m.PartnershipModule),
  },
  {
    path: 'products/cryptocurrencies-cfd',
    data: {
      title: 'Crypto CFD Trading | Bitcoin CFDs on MT5 | UPFOREX',
      description:
        'Trade Bitcoin and other cryptocurrency CFDs with UPFOREX. Access advanced tools and secure trading platforms with fast execution.',
      keywords: 'CFD Bitcoin, Live Bitcoin Trading'
    },
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'products/precious-metal',
    data: {
      title: 'Precious Metals CFD Trading Platform on MT5 | UPFOREX',
      description:
        'Trade precious metals CFDs with UPFOREX on MetaTrader 5. Use advanced tools, fast execution and low-cost trading conditions.',
      keywords: 'Trusted Precious Metals Trading Platform​ | Forex Cfd Trading'
    },
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'products/stock-cfds',
    data: {
      title: 'Stock CFD Trading on 200+ Global Shares | UPFOREX',
      description:
        'Trade CFDs on 200+ company shares, including US stocks such as Apple and Tesla, with leverage and fast execution on MetaTrader 5.',
      keywords: 'CFD Stock Trading | 200+ Top Company Shares | UPFOREX'
    },
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'products/index-cfds',
    data: {
      title: 'Index CFD Trading | Fast Execution on MT5 | UPFOREX',
      description:
        'Trade OTC index CFDs with UPFOREX. Enjoy direct market access, fast execution on any device and tools for portfolio hedging.',
      keywords: 'Index CFD Trading Platform | Fast Execution | UPFOREX, cfd index, cfd index trading, Otc trading'
    },
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'products/energy-cfds',
    data: {
      title: 'Oil & Energy CFD Trading Platform on MT5 | UPFOREX',
      description:
        'Trade oil and energy CFDs with UPFOREX. Enjoy competitive spreads, flexible leverage and transparent pricing on global energy markets.',
      keywords: 'Index CFD Trading Platform | Fast Execution | UPFOREX'
    },
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'products/forex-cfds',
    data: {
      title: 'Forex CFD Trading in UAE | MT5 Platform | UPFOREX',
      description:
        'Trade forex CFDs with UPFOREX on MetaTrader 5. Access advanced trading tools, fast execution and competitive trading costs in the UAE.',
      keywords: 'Real-time forex trading platform, Real-time forex trading, Real time forex trading, Best Real-time forex trading platform'
    },
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },

  {
    path: 'accounts',
    data: {
      title: 'Upforex Account Types – Choose the Forex Trading Account',
      description: 'Explore Upforex account types – Standard, Pro-ECN, and Elite-ECN. Trade seamlessly on MT5 with low spreads, fast execution, and secure trading conditions.',
      keywords: 'UpForex accounts, Standard account, Pro-ECN MT5, Elite-ECN MT5, Forex trading accounts, oil trading, indices trading, metals trading'
    },
    loadChildren: () => import('./account/account.module').then((m) => m.AccountModule),
  },

  //////////////////addddd
  {
    path: 'legal-documents',
    component: LegelDocumentPgeComponent,
    data: {
      title: 'UPFOREX Legal Documents – Agreements, Terms & Policies',
      description: 'View or download official UPFOREX legal documents. Review client agreements, trading policies, confidentiality measures, and partnership terms. Read now!',
      keywords: 'Legal documents, forex agreements, forex terms and conditions'
    }
  },
  //////////////////addddd


  {
    path: 'blogs',
    component: ListBlogsComponent,
    data: {
      title: 'Forex & Trading Blog | Strategies & Analysis | UPFOREX',
      description: 'Level up your trading with the UPFOREX blog. Get expert market analysis, forex strategies, MT5 guides, and insights on indices, commodities, and crypto.',
      keywords: 'forex blog, trading tips, market analysis'
    }
  },
  {
    path: 'blogs/:id',
    component: BlogsComponent,
    data: {
      title: 'Forex Blog Detail | UpForex',
      description: 'Deep dive into specific forex topics, market moves, and expert advice.',
      keywords: 'forex blog post, trading news, market details'
    }
  },
  { path: 'forex-trading-abu-dhabi', component: AbuDhabiForexComponent },
  { path: 'forex-trading-cape-town', component: CapeTownForexComponent },
  { path: 'forex-trading-johannesburg', component: JohannesburgForexComponent },
  { path: 'forex-trading-nairobi', component: NairobiForexComponent },
  { path: 'forex-trading-south-africa', component: SouthAfricaForexReview2Component },

  {
    path: 'forex-trading-kuala-lumpur',
    component: KualaLumpurForexComponent,
    title: 'Forex Trading in Kuala Lumpur | UPFOREX MT5',
  },
  {
    path: 'forex-trading-manila',
    component: ManilaForexComponent,
    title: 'Forex Trading in Manila, Philippines | UPFOREX MT5',
  },
  {
    path: 'forex-trading-singapore',
    component: SingaporeForexComponent,
    title: 'Forex Trading in Singapore | UPFOREX MT5',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule { }
