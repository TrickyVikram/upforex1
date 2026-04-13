import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mt5Component } from './mt5/mt5.component';

const routes: Routes = [
  {
    path: 'mt5',
    component: Mt5Component,
    title: 'Meta Trader 5',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
