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
    this.titleService.setTitle('Crypto CFD Trading | Bitcoin CFDs on MT5 | UPFOREX');
    this.metaService.updateTag({
      name: 'description',
      content:
        'Trade Bitcoin and other cryptocurrency CFDs with UPFOREX. Access advanced tools and secure trading platforms with fast execution.'
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Cryptocurrency CFD trading'
    });
  }
}
