import { Component } from '@angular/core';
import { forexMarketInfo } from './constant';

@Component({
  selector: 'app-intro-to-forex',
  templateUrl: './intro-to-forex.component.html',
  styleUrls: ['./intro-to-forex.component.scss'],
})
export class IntroToForexComponent {
  forexMarketInfo = forexMarketInfo;
}
