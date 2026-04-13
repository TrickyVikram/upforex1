import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    {
      question: 'Q1: How does online trading work in the UAE?',
      answer: 'Online trading in the UAE allows investors to buy and sell financial instruments such as forex, stocks, commodities, and cryptocurrencies using regulated platforms. Traders simply need to open an online account, deposit funds, and start executing trades through advanced platforms like MetaTrader 5.'
    },
    {
      question: 'Q2: What are online trading brokers, and why are they important?',
      answer: 'Online trading brokers act as intermediaries, giving traders access to forex and global markets through digital platforms. A trusted and regulated broker ensures fair pricing, fast execution, and secure fund management.'
    },
    {
      question: 'Q3: What is advanced forex trading?',
      answer: 'Advanced forex trading involves using professional strategies, high leverage, and analytical tools to maximize profits. Traders often rely on features like automated trading, expert advisors, and market analysis tools offered by platforms like MT5.'
    },
    {
      question: 'Q4: What is the benefit of opening an online trading account?',
      answer: 'Opening an online trading account gives you access to multiple markets such as forex, commodities, indices, and crypto CFDs. It allows real-time order execution, instant deposits/withdrawals, and the flexibility to trade anytime from anywhere.'
    },
    {
      question: 'Q5: Why should I choose a regulated forex broker?',
      answer: 'A regulated forex broker is licensed by financial authorities, ensuring secure transactions, transparency, and protection of client funds. Trading with a regulated broker like Upforex minimizes risk and builds trader confidence.'
    },
    {
      question: 'Q6: How can I trade gold in the UAE?',
      answer: 'To trade gold in the UAE, open an account with a regulated broker like Upforex, deposit funds, and access platforms such as MT5. You can trade gold CFDs with leverage and real-time price updates, making it easier to capitalize on market movements.'
    },
    {
      question: 'Q7: What is Forex CFD trading for precious metals?',
      answer: 'Forex CFD trading for precious metals allows traders to speculate on the price movements of assets like gold, silver, and platinum without owning them physically. CFDs (Contracts for Difference) give you the flexibility to trade rising or falling markets.'
    },
    {
      question: 'Q8: What are the advantages of online gold and silver trading?',
      answer: 'Online gold and silver trading provides flexibility, liquidity, and portfolio diversification. Unlike physical gold, CFD trading allows you to profit from both rising and falling prices with lower capital requirements.'
    },
    {
      question: 'Q9: What is CFD Bitcoin trading?',
      answer: 'CFD Bitcoin trading allows you to speculate on the price movement of Bitcoin without owning the cryptocurrency itself. With Upforex, you can go long or short on Bitcoin CFDs and trade with leverage to maximize potential profits.'
    },
    {
      question: 'Q10: How does live Bitcoin trading work?',
      answer: 'Live Bitcoin trading means executing real-time buy and sell orders on Bitcoin prices through a trading platform like MetaTrader 5. Traders benefit from instant execution, price transparency, and real-time market charts.'
    },
    {
      question: 'Q11: What is CFD crypto trading, and why choose it?',
      answer: 'CFD crypto trading lets you trade cryptocurrencies like Bitcoin, Ethereum, and others without owning them. It allows traders to benefit from both rising and falling prices, use leverage, and diversify their portfolios alongside other assets.'
    },
    {
      question: 'Q12: What features does the MT5 platform offer?',
      answer: 'MT5 includes advanced charting tools, multiple timeframes, built-in indicators, market depth, automated trading, and is available on desktop, mobile, and web.'
    },
    {
      question: 'Q13: What makes MT5 a multi-asset trading platform?',
      answer: 'It supports trading across Forex, indices, stocks, commodities, and cryptocurrencies—allowing traders to diversify portfolios seamlessly.'
    },
    {
      question: 'Q14: Can I trade oil online through UpForex?',
      answer: 'Yes, you can trade oil with real-time pricing, deep liquidity, and fast execution on the UpForex platform.'
    },
    {
      question: 'Q15: Can I trade gas and power CFDs on UpForex?',
      answer: 'Yes, natural gas CFDs are available along with oil-based instruments.'
    },
    {
      question: 'Q16: Why trade index CFDs instead of physical indices?',
      answer: 'Index CFDs provide leverage, the ability to go long or short, and lower capital requirements compared to trading physical indices.'
    },
    {
      question: 'Q17: Which stocks can I trade as CFDs?',
      answer: 'You can trade popular stocks like Apple, Tesla, Amazon, Microsoft, and Google.'
    },
    {
      question: 'Q18: Are there commission charges for stock CFD trading?',
      answer: 'UpForex offers transparent pricing with zero commissions on selected stock CFDs.'
    },
    {
      question: 'Q19: How fast is stock CFD execution at UpForex?',
      answer: 'UpForex provides real-time execution with deep liquidity to minimize slippage.'
    }
  ];
}