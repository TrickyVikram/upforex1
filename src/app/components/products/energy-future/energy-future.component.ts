import { Component } from '@angular/core';
import { benefits } from './constant';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-energy-future',
  templateUrl: './energy-future.component.html',
  styleUrls: ['./energy-future.component.scss'],
})
export class EnergyFutureComponent {
  benefits = benefits;
  s3URL!: string;
  constructor(private store: Store) {
    this.s3URL = this.store.s3BaseUrl();
  }
}
