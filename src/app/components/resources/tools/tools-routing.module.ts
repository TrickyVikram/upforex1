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
  {
    path: '',
    component: ToolsComponent,
    title: 'UPFOREX Trading Tools | Calculators & Converters',
    data: {
      title: 'UPFOREX Trading Tools | Calculators & Converters',
      description:
        'Use UPFOREX trading tools, including calculators, converters and market analysis, to plan your trades with more confidence.',
    },
  },
  {
    path: 'economic-calendar',
    component: EconomicCalendarComponent,
    title: 'Economic Calendar',
    data: {
      title: 'Economic Calendar',
      description:
        'Follow scheduled economic events and financial releases with the UPFOREX economic calendar to understand what may affect currency markets.',
    },
  },
  {
    path: 'currency-converter',
    component: CurrencyConverterComponent,
    title: 'Currency Converter',
    data: {
      title: 'Currency Converter',
      description:
        'Convert between currencies with the UPFOREX currency converter and check exchange-rate values to support your forex calculations.',
    },
  },
  {
    path: 'pip-calculator',
    component: PipCalculatorComponent,
    title: 'Pip Calculator',
    data: {
      title: 'Pip Calculator',
      description:
        'Estimate pip value for a forex trade with the UPFOREX pip calculator and use the result to plan trade size and risk.',
    },
  },
  {
    path: 'fibonacci-calculator',
    component: FibonacciCalculatorComponent,
    title: 'Fibonacci Calculator',
    data: {
      title: 'Fibonacci Calculator',
      description:
        'Calculate Fibonacci retracement and extension levels to help identify potential support and resistance areas in price movements.',
    },
  },
  {
    path: 'currency-correlation',
    component: CurrencyCorrelationComponent,
    title: 'Currency Correlation',
    data: {
      title: 'Currency Correlation',
      description:
        'Compare how forex currency pairs move in relation to one another with the UPFOREX currency correlation tool.',
    },
  },
  {
    path: 'pivot-point-calculator',
    component: PivotPointCalculatorComponent,
    title: 'Pivot Point Calculator',
    data: {
      title: 'Pivot Point Calculator',
      description:
        'Calculate pivot points and potential support and resistance levels from market prices to support your technical analysis.',
    },
  },
  {
    path: 'margin-calculator',
    component: MarginCalculatorComponent,
    title: 'Margin Calculator',
    data: {
      title: 'Margin Calculator',
      description:
        'Estimate the margin required for a trading position with the UPFOREX margin calculator and review capital requirements before trading.',
    },
  },
  {
    path: 'profit-calculator',
    component: ProfitCalculatorComponent,
    title: 'Profit Calculator',
    data: {
      title: 'Profit Calculator',
      description:
        'Estimate potential profit or loss for a trade with the UPFOREX profit calculator and compare scenarios during trade planning.',
    },
  },
  {
    path: 'currency-volatility',
    component: CurrencyVolatilityComponent,
    title: 'Currency Volatility',
    data: {
      title: 'Currency Volatility',
      description:
        'Review currency-pair price fluctuations with the UPFOREX volatility tool to assess market movement and potential trading risk.',
    },
  },
  {
    path: 'currency-heat-map',
    component: CurrencyHeatMapComponent,
    title: 'Currency Heat Map',
    data: {
      title: 'Currency Heat Map',
      description:
        'View relative currency strength in a heat map to compare currencies and spot market movements at a glance.',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsRoutingModule {}
