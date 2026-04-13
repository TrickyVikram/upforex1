import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { CryptoCfdComponent } from './crypto-cfd/crypto-cfd.component';
import { EnergyFutureComponent } from './energy-future/energy-future.component';
import { ForexComponent } from './forex/forex.component';
import { IndexFutureComponent } from './index-future/index-future.component';
import { PreciousMetalComponent } from './precious-metal/precious-metal.component';
import { UsStocksComponent } from './us-stocks/us-stocks.component';

@NgModule({
  declarations: [
    CryptoCfdComponent,
    EnergyFutureComponent,
    ForexComponent,
    IndexFutureComponent,
    PreciousMetalComponent,
    UsStocksComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
