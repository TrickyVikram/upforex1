import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroToForexComponent } from './intro-to-forex/intro-to-forex.component';
import { TradingGlossaryComponent } from './trading-glossary/trading-glossary.component';
import { TradingRulesComponent } from './trading-rules/trading-rules.component';
import { ContactSpecificationsComponent } from './contact-specifications/contact-specifications.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path: 'introduction-to-forex',
    component: IntroToForexComponent,
    title: "What Is Forex? Beginner's Guide to Trading | UPFOREX",
    data: {
      title: "What Is Forex? Beginner's Guide to Trading | UPFOREX",
      description:
        'New to forex? Learn how currency pairs, bid and ask prices, spreads and leverage work, and understand the risks involved.',
    },
  },
  {
    path: 'trading-glossary',
    component: TradingGlossaryComponent,
    title: 'UPFOREX Glossary | Learn Forex & CFD Trading Terms',
    data: {
      title: 'UPFOREX Glossary | Learn Forex & CFD Trading Terms',
      description:
        'Find clear definitions of forex, CFD and trading terms in the UPFOREX glossary to help you understand the markets before you trade.',
    },
  },
  {
    path: 'trading-rules',
    component: TradingRulesComponent,
    title: 'Trading Rules | Understanding Regulations & Best Practices',
    data: {
      title: 'Trading Rules | Understanding Regulations & Best Practices',
      description:
        'Review forex trading basics, including major currency pairs, base and quote currencies, margin, leverage and profit and loss examples.',
    },
  },
  {
    path: 'faq',
    component: FaqComponent,
    title: 'Forex & CFD Trading FAQs | Help Centre | UPFOREX',
    data: {
      title: 'Forex & CFD Trading FAQs | Help Centre | UPFOREX',
      description:
        'Find answers to frequently asked questions about forex and CFD trading, accounts and platforms with UPFOREX. Get help in seconds.',
    },
  },
  // Uncomment this if needed
  // {
  //   path: 'contract-specifications',
  //   component: ContactSpecificationsComponent,
  //   title: 'Contract Specifications | Instrument Details & Trading Conditions'
  // },
  {
    path: 'tools',
    loadChildren: () =>
      import('./tools/tools.module').then((m) => m.ToolsModule),
    title: 'UPFOREX Trading Tools | Calculators & Converters',
    data: {
      title: 'UPFOREX Trading Tools | Calculators & Converters',
      description:
        'Use UPFOREX trading tools, including calculators, converters and market analysis, to plan your trades with more confidence.',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
