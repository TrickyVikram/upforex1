import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpforexAgentComponent } from './upforex-agent/upforex-agent.component';
import { PartnershipProgramsComponent } from './partnership-programs/partnership-programs.component';
import { IbProgramComponent } from './ib-program/ib-program.component';
import { MoneyManagersComponent } from './money-managers/money-managers.component';
import { EducationPartnersComponent } from './education-partners/education-partners.component';
import { FinfluencerComponent } from './finfluencer/finfluencer.component';
import { CountryPartnersComponent } from './country-partners/country-partners.component';
import { SocialTradingComponent } from './social-trading/social-trading.component';
import { InstitutionalServiceComponent } from './institutional-service/institutional-service.component';

const routes: Routes = [
  {
    path: 'partnership-benefits',
    component: UpforexAgentComponent,
    title: 'UPFOREX Partnership Program – Maximize Earnings with Us',
  },
  // {
  //   path: 'partnership-programs',
  //   component: PartnershipProgramsComponent,
  //   title: 'Partnership Programs',
  // },
  {
    path: 'ib-programs',
    component: IbProgramComponent,
    title: 'Join UPFOREX IB Program Earn High Commissions as Broker',
  },
  {
    path: 'money-managers',
    component: MoneyManagersComponent,
    title: 'UPFOREX Money Manager Program – Grow Followers & Earn',
  },
  {
    path: 'education-partners',
    component: EducationPartnersComponent,
    title: 'UPFOREX Education Partners Program – Teach & Earn Globally',
  },
  {
    path: 'finfluencer',
    component: FinfluencerComponent,
    title: 'UPFOREX Finfluencer Program – Influence & Earn Rewards',
  },
  {
    path: 'country-partners',
    component: CountryPartnersComponent,
    title: 'UPFOREX Country Partners Program – Expand Your Reach & Earn',
  },
  {
    path: 'social-trading',
    component: SocialTradingComponent,
    title: 'Join UPFOREX Social Trading Program | Trade & Earn',
  },
  {
    path: 'institutional-services',
    component: InstitutionalServiceComponent,
    title: 'Institutional Services',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnershipRoutingModule {}
