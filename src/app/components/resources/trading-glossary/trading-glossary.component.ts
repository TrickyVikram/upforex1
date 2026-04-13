import { Component } from '@angular/core';

@Component({
  selector: 'app-trading-glossary',
  templateUrl: './trading-glossary.component.html',
  styleUrls: ['./trading-glossary.component.scss'],
})
export class TradingGlossaryComponent {
  forexTerms = [
    {
      term: 'Ask Price',
      description: 'The price at which a seller is willing to sell an asset.',
    },
    {
      term: 'Bid Price',
      description:
        'The price at which a buyer is willing to purchase an asset.',
    },
    {
      term: 'Bear Market',
      description: 'A market condition characterized by falling prices.',
    },
    {
      term: 'Bull Market',
      description: 'A market condition characterized by rising prices.',
    },
    {
      term: 'Candlestick Chart',
      description:
        'A type of chart used in technical analysis to display price movements.',
    },
    {
      term: 'Leverage',
      description: 'Using borrowed capital to amplify potential returns.',
    },
    {
      term: 'Market Order',
      description: 'An order to buy or sell at the best available price.',
    },
    {
      term: 'Pip',
      description:
        'The smallest price move in Forex trading, typically the fourth decimal.',
    },
    {
      term: 'Spread',
      description: 'The difference between the bid and ask prices.',
    },
    {
      term: 'Stop-Loss Order',
      description:
        'An order to limit losses by selling at a predetermined price.',
    },
    {
      term: 'Volatility',
      description: 'A measure of price fluctuation over time.',
    },
  ];
}
