import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountTypesComponent } from './account-types/account-types.component';
import { AccountRoutingModule } from './account-routing.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModules } from 'src/app/common/common.module';

@NgModule({
  declarations: [AccountsComponent, AccountTypesComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NgbCarouselModule,
    CommonModules,
  ],
})
export class AccountModule {}
