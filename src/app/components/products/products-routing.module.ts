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
    title: 'Forex CFD Trading in UAE | MT5 Platform | UPFOREX',
    data: {
      title: 'Forex CFD Trading in UAE | MT5 Platform | UPFOREX',
      description:
        'Trade forex CFDs with UPFOREX on MetaTrader 5. Access advanced trading tools, fast execution and competitive trading costs in the UAE.',
    },
  },
  {
    path: 'stock-cfds',
    component: UsStocksComponent,
    title: 'Stock CFD Trading on 200+ Global Shares | UPFOREX',
    data: {
      title: 'Stock CFD Trading on 200+ Global Shares | UPFOREX',
      description:
        'Trade CFDs on 200+ company shares, including US stocks such as Apple and Tesla, with leverage and fast execution on MetaTrader 5.',
    },
  },
  {
    path: 'precious-metal',
    component: PreciousMetalComponent,
    title: 'Precious Metals CFD Trading Platform on MT5 | UPFOREX',
    data: {
      title: 'Precious Metals CFD Trading Platform on MT5 | UPFOREX',
      description:
        'Trade precious metals CFDs with UPFOREX on MetaTrader 5. Use advanced tools, fast execution and low-cost trading conditions.',
    },
  },
  {
    path: 'index-cfds',
    component: IndexFutureComponent,
    title: 'Index CFD Trading | Fast Execution on MT5 | UPFOREX',
    data: {
      title: 'Index CFD Trading | Fast Execution on MT5 | UPFOREX',
      description:
        'Trade OTC index CFDs with UPFOREX. Enjoy direct market access, fast execution on any device and tools for portfolio hedging.',
    },
  },
  {
    path: 'energy-cfds',
    component: EnergyFutureComponent,
    title: 'Oil & Energy CFD Trading Platform on MT5 | UPFOREX',
    data: {
      title: 'Oil & Energy CFD Trading Platform on MT5 | UPFOREX',
      description:
        'Trade oil and energy CFDs with UPFOREX. Enjoy competitive spreads, flexible leverage and transparent pricing on global energy markets.',
    },
  },
  {
    path: 'cryptocurrencies-cfd',
    component: CryptoCfdComponent,
    title: 'Crypto CFD Trading | Bitcoin CFDs on MT5 | UPFOREX',
    data: {
      title: 'Crypto CFD Trading | Bitcoin CFDs on MT5 | UPFOREX',
      description:
        'Trade Bitcoin and other cryptocurrency CFDs with UPFOREX. Access advanced tools and secure trading platforms with fast execution.',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
