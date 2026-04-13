import { Component, OnInit } from '@angular/core';
import { whoCanJoin, whyJoin } from './constant';
import { Store } from 'src/app/Store/store';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-social-trading',
  templateUrl: './social-trading.component.html',
  styleUrls: ['./social-trading.component.scss'],
})
export class SocialTradingComponent implements OnInit {
  whoCanJoin = whoCanJoin;
  whyJoin = whyJoin;

  constructor(
    private store: Store,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Forex social trading platform for Beginners & Experts');

    this.metaService.updateTag({
      name: 'description',
      content: 'Join UpForex’s forex social trading platform. Copy top traders, grow earnings, and partner with a smarter, community-driven trading experience.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'Forex social trading platform'
    });
  }

  openForm() {
    this.store.setContactUsData({
      subject: 'Want to Join the Social Trading Program',
      message:
        'Hi, I’d like to participate in the Social Trading Program. Please let me know how I can get started.',
    });
    this.router.navigate(['/contact-us'], { fragment: 'contact-us' });
  }
}
// ###################
