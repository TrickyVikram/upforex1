import { Component } from '@angular/core';
import { benefits, trade } from './constant';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-us-stocks',
  templateUrl: './us-stocks.component.html',
  styleUrls: ['./us-stocks.component.scss'],
})
export class UsStocksComponent {
  benefits = benefits;
  trade = trade;
  s3URL!: string;
  constructor(private store: Store) {
    this.s3URL = this.store.s3BaseUrl();
  }
}
