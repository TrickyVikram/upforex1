import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { IntroToForexComponent } from './intro-to-forex/intro-to-forex.component';
import { TradingGlossaryComponent } from './trading-glossary/trading-glossary.component';
import { TradingRulesComponent } from './trading-rules/trading-rules.component';
import { ContactSpecificationsComponent } from './contact-specifications/contact-specifications.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    IntroToForexComponent,
    TradingGlossaryComponent,
    TradingRulesComponent,
    ContactSpecificationsComponent,
    FaqComponent,
  ],
  imports: [CommonModule, ResourcesRoutingModule],
})
export class ResourcesModule {}
