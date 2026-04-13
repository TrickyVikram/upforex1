import { Component } from '@angular/core';
import { benefits, trade } from './constant';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-precious-metal',
  templateUrl: './precious-metal.component.html',
  styleUrls: ['./precious-metal.component.scss'],
})
export class PreciousMetalComponent {
  benefits = benefits;
  trade = trade;
  s3URL!: string;
  constructor(private store: Store) {
    this.s3URL = this.store.s3BaseUrl();
  }
}
