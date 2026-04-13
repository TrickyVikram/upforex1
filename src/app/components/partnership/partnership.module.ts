import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpforexAgentComponent } from './upforex-agent/upforex-agent.component';
import { PartnershipProgramsComponent } from './partnership-programs/partnership-programs.component';
import { PartnershipRoutingModule } from './partnership-routing.module';
import { IbProgramComponent } from './ib-program/ib-program.component';
import { MoneyManagersComponent } from './money-managers/money-managers.component';
import { EducationPartnersComponent } from './education-partners/education-partners.component';
import { FinfluencerComponent } from './finfluencer/finfluencer.component';
import { CountryPartnersComponent } from './country-partners/country-partners.component';
import { SocialTradingComponent } from './social-trading/social-trading.component';
import { InstitutionalServiceComponent } from './institutional-service/institutional-service.component';

@NgModule({
  declarations: [
    UpforexAgentComponent,
    PartnershipProgramsComponent,
    IbProgramComponent,
    MoneyManagersComponent,
    EducationPartnersComponent,
    FinfluencerComponent,
    CountryPartnersComponent,
    SocialTradingComponent,
    InstitutionalServiceComponent,
  ],
  imports: [CommonModule, PartnershipRoutingModule],
})
export class PartnershipModule {}
