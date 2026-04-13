import { Component } from '@angular/core';
import {
  commodities,
  crypto,
  forex,
  indices,
  metals,
  stocks,
  forexTimings,
  indexTimings,
  commoditiesTimings,
  metalsTimings,
  cryptoTimings,
  stocksTimings,
} from './constant';

@Component({
  selector: 'app-contact-specifications',
  templateUrl: './contact-specifications.component.html',
  styleUrls: ['./contact-specifications.component.scss'],
})
export class ContactSpecificationsComponent {
  tableContent = forex;
  dayContent = forexTimings;
  isSpecifications = true;
  changeSelect(event: any) {
    switch (event.target.value) {
      case '1':
        this.tableContent = forex;
        this.isSpecifications = true;
        break;
      case '2':
        this.tableContent = indices;
        this.isSpecifications = true;
        break;
      case '3':
        this.tableContent = commodities;
        this.isSpecifications = true;
        break;
      case '4':
        this.tableContent = metals;
        this.isSpecifications = true;
        break;
      case '5':
        this.tableContent = crypto;
        this.isSpecifications = true;
        break;
      case '6':
        this.tableContent = stocks;
        this.isSpecifications = true;
        break;
      case '7':
        this.dayContent = forexTimings;
        this.isSpecifications = false;
        break;
      case '8':
        this.dayContent = indexTimings;
        this.isSpecifications = false;
        break;
      case '9':
        this.dayContent = commoditiesTimings;
        this.isSpecifications = false;
        break;
      case '10':
        this.dayContent = metalsTimings;
        this.isSpecifications = false;
        break;
      case '11':
        this.dayContent = cryptoTimings;
        this.isSpecifications = false;
        break;
      case '12':
        this.dayContent = stocksTimings;
        this.isSpecifications = false;
        break;
      default:
        this.tableContent = forex;
        this.isSpecifications = true;
        break;
    }
  }
}
