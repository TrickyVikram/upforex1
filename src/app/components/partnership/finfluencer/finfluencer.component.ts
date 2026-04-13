import { Component } from '@angular/core';
import { whyJoin, whyPartnerWithUs } from './constant';
import { Store } from 'src/app/Store/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finfluencer',
  templateUrl: './finfluencer.component.html',
  styleUrls: ['./finfluencer.component.scss'],
})
export class FinfluencerComponent {
  whyPartnerWithUs = whyPartnerWithUs;
  whyJoin = whyJoin;
  constructor(private store: Store, private router: Router) {}

  openForm() {
    this.store.setContactUsData({
      subject: 'Want to Join the Finfluencer Program',
      message:
        'Hi, I’d love to join the Finfluencer Program and monetize my influence. Please send me the steps to apply.',
    });
    this.router.navigate(['/contact-us'], { fragment: 'contact-us' });
  }
}
