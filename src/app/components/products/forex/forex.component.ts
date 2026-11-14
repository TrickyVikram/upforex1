import { Component, OnInit } from '@angular/core';
import { advantages, benefits } from './constant';
import { Store } from 'src/app/Store/store';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.scss'],
})
export class ForexComponent implements OnInit {
  benefits = benefits;
  advantages = advantages;
  s3URL!: string;

  constructor(
    private store: Store,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.s3URL = this.store.s3BaseUrl();
  }

  ngOnInit(): void {
    this.titleService.setTitle('Forex CFD Trading in UAE | MT5 Platform | UPFOREX');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Trade forex CFDs with UPFOREX on MetaTrader 5. Access advanced trading tools, fast execution and competitive trading costs in the UAE.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'Real-time forex trading platform'
    });
  }
}
