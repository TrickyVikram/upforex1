import { Component } from '@angular/core';
import { howItWorks } from './constant';
import { Store } from 'src/app/Store/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-money-managers',
  templateUrl: './money-managers.component.html',
  styleUrls: ['./money-managers.component.scss'],
})
export class MoneyManagersComponent {
  howItWorks = howItWorks;

  constructor(private store: Store, private router: Router) {}

  openForm() {
    this.store.setContactUsData({
      subject: 'Want to Join Money Managers Program',
      message:
        'Hi, I’d like to join the Money Managers Program. Please guide me through the application process.',
    });
    this.router.navigate(['/contact-us'], { fragment: 'contact-us' });
  }
}
