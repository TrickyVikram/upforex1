import { Component } from '@angular/core';

@Component({
  selector: 'app-risk-disclosure',
  templateUrl: './risk-disclosure.component.html',
  styleUrls: ['./risk-disclosure.component.scss'],
})
export class RiskDisclosureComponent {
  riskArray = [
    {
      risk_type: 'Market Risk',
      description:
        'The value of financial instruments can fluctuate significantly due to market conditions, economic events, and geopolitical developments. Price movements can result in substantial losses or gains.',
    },
    {
      risk_type: 'Leverage Risk',
      description:
        'Trading on margin amplifies both potential profits and losses. While leverage offers opportunities for higher returns, it also increases the risk of losing more than your initial investment.',
    },
    {
      risk_type: 'Volatility Risk',
      description:
        'Markets can be highly volatile, especially in instruments such as Forex and cryptocurrencies. Sudden and unpredictable price movements can lead to rapid losses.',
    },
    {
      risk_type: 'Liquidity Risk',
      description:
        'Under certain market conditions, it may be difficult or impossible to execute trades at your desired price due to low market liquidity.',
    },
    {
      risk_type: 'Counterparty Risk',
      description:
        'Transactions executed through UpForex involve counterparty risk, including the potential inability of UpForex or its liquidity providers to fulfill contractual obligations.',
    },
    {
      risk_type: 'Technology Risk',
      description:
        'Online trading platforms are subject to risks such as system failures, connectivity issues, and cyber threats, which may result in delays or inability to execute trades.',
    },
    {
      risk_type: 'Regulatory Risk',
      description:
        'Changes in regulations or restrictions imposed by governments or regulatory authorities may impact your trading activities.',
    },
  ];
}
