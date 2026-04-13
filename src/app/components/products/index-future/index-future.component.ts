import { Component } from '@angular/core';
import { advantages, benefits } from './constant';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-index-future',
  templateUrl: './index-future.component.html',
  styleUrls: ['./index-future.component.scss'],
})
export class IndexFutureComponent {
  benefits = benefits;
  advantages = advantages;
  s3URL!: string;
  constructor(private store: Store) {
    this.s3URL = this.store.s3BaseUrl();
  }
}
