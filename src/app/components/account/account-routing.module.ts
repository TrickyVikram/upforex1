import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountTypesComponent } from './account-types/account-types.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    title: 'UpForex Account Types - Standard, Pro-ECN & Elite-ECN MT5',
  },
  {
    path: 'account-types',
    component: AccountTypesComponent,
    title: 'Account Types',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
