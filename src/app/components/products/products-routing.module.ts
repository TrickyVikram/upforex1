import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForexComponent } from './forex/forex.component';
import { UsStocksComponent } from './us-stocks/us-stocks.component';
import { PreciousMetalComponent } from './precious-metal/precious-metal.component';
import { IndexFutureComponent } from './index-future/index-future.component';
import { EnergyFutureComponent } from './energy-future/energy-future.component';
import { CryptoCfdComponent } from './crypto-cfd/crypto-cfd.component';

const routes: Routes = [
  {
    path: 'forex-cfds',
    component: ForexComponent,
    title: 'Forex-CFDs',
  },
  {
    path: 'stock-cfds',
    component: UsStocksComponent,
    title: 'CFD Stock Trading | 200+ Top Company Shares | UPFOREX',
  },
  {
    path: 'precious-metal',
    component: PreciousMetalComponent,
    title: 'Trusted Precious Metals Trading Platform​ | Forex Cfd Trading',
  },
  {
    path: 'index-cfds',
    component: IndexFutureComponent,
    title: 'Index CFD Trading Platform | Fast Execution | UPFOREX',
  },
  {
    path: 'energy-cfds',
    component: EnergyFutureComponent,
    title: 'Online Oil Trading Platform | Energy CFDs | UPFOREX',
  },
  {
    path: 'cryptocurrencies-cfd',
    component: CryptoCfdComponent,
    title: 'Leading CFD Bitcoin Broker Platform | Live Bitcoin Trading',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
