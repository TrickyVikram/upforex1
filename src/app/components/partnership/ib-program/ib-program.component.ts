import { Component } from '@angular/core';
import { data, howItWorks, whyUpForex } from './constant';
import { Store } from 'src/app/Store/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ib-program',
  templateUrl: './ib-program.component.html',
  styleUrls: ['./ib-program.component.scss'],
})
export class IbProgramComponent {
  data = data;
  howItWorks = howItWorks;
  whyUpForex = whyUpForex;
  s3URL!: string;
  constructor(private store: Store, private router: Router) {
    this.s3URL = this.store.s3BaseUrl();
  }

  openForm() {
    this.store.setContactUsData({
      subject: 'Want to Join the IB Program',
      message:
        'Hi, I’m interested in becoming an Introducing Broker. Please share the details and the application process.',
    });
    this.router.navigate(['/contact-us'], { fragment: 'contact-us' });
  }
}
