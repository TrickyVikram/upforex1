import { Component } from '@angular/core';
import { trustedChoiceCardData } from './constant';
import * as AOS from 'aos';
import { Store } from 'src/app/Store/store';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  trustedChoiceCardData = trustedChoiceCardData;
  s3URL!: string;
  constructor(private store: Store) {
    this.s3URL = this.store.s3BaseUrl();
  }
  // ngOnInit(): void {
  //   AOS.init({
  //     once: false,
  //     duration: 1000,
  //   });
  // }
}
