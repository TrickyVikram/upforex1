import { Component } from '@angular/core';
import { includes, upforexAgent } from './constant';
import { Store } from 'src/app/Store/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upforex-agent',
  templateUrl: './upforex-agent.component.html',
  styleUrls: ['./upforex-agent.component.scss'],
})
export class UpforexAgentComponent {
  upforexagent = upforexAgent;
  includes = includes;
  s3URL!: string;
  constructor(private store: Store, private router: Router) {
    this.s3URL = this.store.s3BaseUrl();
  }

  openForm() {
    this.store.setContactUsData({
      subject: 'Want to Join the UPFOREX Partnership Program',
      message:
        'Hi, I’m interested in joining the UPFOREX Partnership Program and exploring the opportunities it offers. Please provide me with more details and the application process. Looking forward to your response!',
    });
    this.router.navigate(['/contact-us'], { fragment: 'contact-us' });
  }
}
