import { Component } from '@angular/core';
import { currencyPairs } from './constant';

@Component({
  selector: 'app-trading-rules',
  templateUrl: './trading-rules.component.html',
  styleUrls: ['./trading-rules.component.scss'],
})
export class TradingRulesComponent {
  currencyPairs = currencyPairs;
}
