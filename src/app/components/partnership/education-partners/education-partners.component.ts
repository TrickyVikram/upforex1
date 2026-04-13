import { Component } from '@angular/core';
import { whoCanPartnerWithUs, whyJoin } from './constant';
import { Store } from 'src/app/Store/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-partners',
  templateUrl: './education-partners.component.html',
  styleUrls: ['./education-partners.component.scss'],
})
export class EducationPartnersComponent {
  whyJoin = whyJoin;
  whoCanPartnerWithUs = whoCanPartnerWithUs;
  constructor(private store: Store, private router: Router) {}

  openForm() {
    this.store.setContactUsData({
      subject: 'I’d Like to Become an Education Partner',
      message:
        'Hi, I’m interested in collaborating as an Education Partner. Kindly provide the details and the application process.',
    });
    this.router.navigate(['/contact-us'], { fragment: 'contact-us' });
  }
}
