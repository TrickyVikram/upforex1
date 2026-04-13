import { Component } from '@angular/core';
import { benefits } from './constant';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent {
  benefits = benefits;
  s3URL!: string;
  constructor(private store: Store) {
    this.s3URL = this.store.s3BaseUrl();
  }
}
