import { Component } from '@angular/core';
import { whoCanJoin, whyJoin } from './constant';
import { Store } from 'src/app/Store/store';
import { Router } from '@angular/router';
@Component({
  selector: 'app-country-partners',
  templateUrl: './country-partners.component.html',
  styleUrls: ['./country-partners.component.scss'],
})
export class CountryPartnersComponent {
  whoCanJoin = whoCanJoin;
  whyJoin = whyJoin;
  constructor(private store: Store, private router: Router) {}

  openForm() {
    this.store.setContactUsData({
      subject: 'Want to Join the Country Partner Program',
      message:
        'Hi, I’m interested in becoming a Country Partner Program . Please send me the steps to apply.',
    });
    this.router.navigate(['/contact-us'], { fragment: 'contact-us' });
  }
}
