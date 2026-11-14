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
    title: 'UPFOREX Partnership Program | Benefits & Earnings',
    data: {
      title: 'UPFOREX Partnership Program | Benefits & Earnings',
      description:
        'Explore the UPFOREX Partnership Program for IBs, money managers, educators and influencers. See the benefits and ways to earn.',
    },
  },
  // {
  //   path: 'partnership-programs',
  //   component: PartnershipProgramsComponent,
  //   title: 'Partnership Programs',
  // },
  {
    path: 'ib-programs',
    component: IbProgramComponent,
    title: 'UPFOREX IB Program | Earn Commissions as a Broker',
    data: {
      title: 'UPFOREX IB Program | Earn Commissions as a Broker',
      description:
        "Become a UPFOREX Introducing Broker and earn commissions on your clients' trading activity. Join our IB program and grow with us.",
    },
  },
  {
    path: 'money-managers',
    component: MoneyManagersComponent,
    title: 'UPFOREX Money Manager Program | Grow Followers & Earn',
    data: {
      title: 'UPFOREX Money Manager Program | Grow Followers & Earn',
      description:
        'Join the UPFOREX Money Manager Program to grow your follower base and earn rewards while managing client trading with our platform.',
    },
  },
  {
    path: 'education-partners',
    component: EducationPartnersComponent,
    title: 'UPFOREX Education Partners Program | Teach & Earn',
    data: {
      title: 'UPFOREX Education Partners Program | Teach & Earn',
      description:
        'Join the UPFOREX Education Partners Program to teach traders, share your knowledge and earn globally in forex education.',
    },
  },
  {
    path: 'finfluencer',
    component: FinfluencerComponent,
    title: 'UPFOREX Finfluencer Program | Influence & Earn Rewards',
    data: {
      title: 'UPFOREX Finfluencer Program | Influence & Earn Rewards',
      description:
        'Join the UPFOREX Finfluencer Program to share trading content with your audience and earn rewards as a partner. Learn how to apply.',
    },
  },
  {
    path: 'country-partners',
    component: CountryPartnersComponent,
    title: 'UPFOREX Country Partners Program | Expand & Earn',
    data: {
      title: 'UPFOREX Country Partners Program | Expand & Earn',
      description:
        'Become a UPFOREX Country Partner to grow the brand in your region and earn as a partner. Learn how the program works and apply.',
    },
  },
  {
    path: 'social-trading',
    component: SocialTradingComponent,
    title: 'Join UPFOREX Social Trading Program | Trade & Earn',
    data: {
      title: 'Join UPFOREX Social Trading Program | Trade & Earn',
      description:
        'Join the UPFOREX Social Trading Program to follow expert traders, copy winning strategies, and earn commissions while improving your trading skills.',
    },
  },
  {
    path: 'institutional-services',
    component: InstitutionalServiceComponent,
    title: 'UPFOREX Institutional Services | Forex & CFD Trading',
    data: {
      title: 'UPFOREX Institutional Services | Forex & CFD Trading',
      description:
        'UPFOREX institutional services give professional clients access to advanced technology and deep liquidity for forex and CFD trading.',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnershipRoutingModule {}
