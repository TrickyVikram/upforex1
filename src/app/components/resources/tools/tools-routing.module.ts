import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools/tools.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { EconomicCalendarComponent } from './economic-calendar/economic-calendar.component';
import { PipCalculatorComponent } from './pip-calculator/pip-calculator.component';
import { FibonacciCalculatorComponent } from './fibonacci-calculator/fibonacci-calculator.component';
import { CurrencyCorrelationComponent } from './currency-correlation/currency-correlation.component';
import { PivotPointCalculatorComponent } from './pivot-point-calculator/pivot-point-calculator.component';
import { MarginCalculatorComponent } from './margin-calculator/margin-calculator.component';
import { ProfitCalculatorComponent } from './profit-calculator/profit-calculator.component';
import { CurrencyVolatilityComponent } from './currency-volatility/currency-volatility.component';
import { CurrencyHeatMapComponent } from './currency-heat-map/currency-heat-map.component';

const routes: Routes = [
  { path: '', component: ToolsComponent },
  {
    path: 'economic-calendar',
    component: EconomicCalendarComponent,
    title: 'Economic Calendar',
  },
  {
    path: 'currency-converter',
    component: CurrencyConverterComponent,
    title: 'Currency Convertor',
  },
  {
    path: 'pip-calculator',
    component: PipCalculatorComponent,
    title: 'Pip Calculator',
  },
  {
    path: 'fibonacci-calculator',
    component: FibonacciCalculatorComponent,
    title: 'Fibonacci Calculator',
  },
  {
    path: 'currency-correlation',
    component: CurrencyCorrelationComponent,
    title: 'Currency Correlation',
  },
  {
    path: 'pivot-point-calculator',
    component: PivotPointCalculatorComponent,
    title: 'Pivot Point Calculator',
  },
  {
    path: 'margin-calculator',
    component: MarginCalculatorComponent,
    title: 'Margin Calculator',
  },
  {
    path: 'profit-calculator',
    component: ProfitCalculatorComponent,
    title: 'Profit Calculator',
  },
  {
    path: 'currency-volatility',
    component: CurrencyVolatilityComponent,
    title: 'Currency Volatility',
  },
  {
    path: 'currency-heat-map',
    component: CurrencyHeatMapComponent,
    title: 'Currency Heat Map',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsRoutingModule {}
