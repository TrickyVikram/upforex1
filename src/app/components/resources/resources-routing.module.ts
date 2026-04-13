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
    title: 'What is Forex? – Beginner’s Guide to Forex Trading'
  },
  {
    path: 'trading-glossary',
    component: TradingGlossaryComponent,
    title: 'UPFOREX Glossary – Learn Forex, CFD & Trading Terminology'
  },
  {
    path: 'trading-rules',
    component: TradingRulesComponent,
    title: 'Trading Rules | Understanding Regulations & Best Practices'
  },
  {
    path: 'faq',
    component: FaqComponent,
    title: 'FAQs | Frequently Asked Questions about Forex & CFD Trading'
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
    title: 'UPFOREX Trading Tools – Calculators, Converters & Analysis'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
