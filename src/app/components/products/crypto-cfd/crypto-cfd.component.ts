import { Component, OnInit } from '@angular/core';
import { advantages, whyArray } from './constant';
import { Store } from 'src/app/Store/store';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-crypto-cfd',
  templateUrl: './crypto-cfd.component.html',
  styleUrls: ['./crypto-cfd.component.scss'],
})
export class CryptoCfdComponent implements OnInit {
  advantages = advantages;
  whyArray = whyArray;
  s3URL!: string;

  constructor(
    private store: Store,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.s3URL = this.store.s3BaseUrl();
  }

  ngOnInit(): void {
    this.titleService.setTitle('Start Cryptocurrency CFD Trading | Crypto Trading - UpForex');
    this.metaService.updateTag({
      name: 'description',
      content: 'Start Cryptocurrency CFD trading with UpForex. Enjoy fast execution, tight spreads, and 24/7 access to Bitcoin, Ethereum & more. Trade smart with a trusted platform.'
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Cryptocurrency CFD trading'
    });
  }
}
