import { Component } from '@angular/core';
import { privacyPolicyData } from './constant';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent {
  privacyPolicyData = privacyPolicyData;
}
