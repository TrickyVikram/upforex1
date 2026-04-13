import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsComponent } from './tools/tools.component';
import { EconomicCalendarComponent } from './economic-calendar/economic-calendar.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { PipCalculatorComponent } from './pip-calculator/pip-calculator.component';
import { FibonacciCalculatorComponent } from './fibonacci-calculator/fibonacci-calculator.component';
import { CurrencyCorrelationComponent } from './currency-correlation/currency-correlation.component';
import { PivotPointCalculatorComponent } from './pivot-point-calculator/pivot-point-calculator.component';
import { MarginCalculatorComponent } from './margin-calculator/margin-calculator.component';
import { ProfitCalculatorComponent } from './profit-calculator/profit-calculator.component';
import { CurrencyVolatilityComponent } from './currency-volatility/currency-volatility.component';
import { CurrencyHeatMapComponent } from './currency-heat-map/currency-heat-map.component';
import { matArrowBack } from '@ng-icons/material-icons/baseline';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [
    ToolsComponent,
    EconomicCalendarComponent,
    CurrencyConverterComponent,
    PipCalculatorComponent,
    FibonacciCalculatorComponent,
    CurrencyCorrelationComponent,
    PivotPointCalculatorComponent,
    MarginCalculatorComponent,
    ProfitCalculatorComponent,
    CurrencyVolatilityComponent,
    CurrencyHeatMapComponent,
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    NgIconsModule.withIcons({ matArrowBack }),
  ],
})
export class ToolsModule {}
