import { Component } from '@angular/core';
import { whoCanJoin, whyJoin } from './constant';
import { Store } from 'src/app/Store/store';
import { Router } from '@angular/router';
@Component({
  selector: 'app-institutional-service',
  templateUrl: './institutional-service.component.html',
  styleUrls: ['./institutional-service.component.scss'],
})
export class InstitutionalServiceComponent {
  whoCanJoin = whoCanJoin;
  whyJoin = whyJoin;
  constructor(private store: Store, private router: Router) {}

  openForm() {
    this.store.setContactUsData({
      subject: 'Interested in Institutional Services',
      message:
        'Hi, I’d like to explore your Institutional Services. Please share the details and how I can apply.',
    });
    this.router.navigate(['/contact-us'], { fragment: 'contact-us' });
  }
}
