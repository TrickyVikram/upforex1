import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  matComputer,
  matSupportAgent,
  matPerson,
  matVerified,
  matLightbulb,
  matSecurity,
  matLocationOn,
  matMail,
  matPhone,
  matEdit,
  matOpenInNew,
  matDateRange,
} from '@ng-icons/material-icons/baseline';
import {
  bootstrapBank,
  bootstrapGlobe,
  bootstrapSortUp,
} from '@ng-icons/bootstrap-icons';
import { RiskDisclosureComponent } from './risk-disclosure/risk-disclosure.component';
import { AntiMoneyLaunderingComponent } from './anti-money-laundering/anti-money-laundering.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductsModule } from './products/products.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModules } from '../common/common.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ListBlogsComponent } from './list.blogs/list.blogs.component';
import { BlogsComponent } from './blogs/blogs.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    RiskDisclosureComponent,
    AntiMoneyLaunderingComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    ListBlogsComponent,
    BlogsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ProductsModule,
    NgIconsModule.withIcons({
      matComputer,
      matSupportAgent,
      matPerson,
      matVerified,
      matLightbulb,
      bootstrapGlobe,
      matSecurity,
      bootstrapBank,
      bootstrapSortUp,
      matLocationOn,
      matMail,
      matPhone,
      matEdit,
      matOpenInNew,
      matDateRange,
    }),
    ReactiveFormsModule,
    CommonModules,
    NgbCarouselModule,
  ],
})
export class ComponentsModule {}
