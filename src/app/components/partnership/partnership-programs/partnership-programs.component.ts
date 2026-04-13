import { Component } from '@angular/core';
import { partnershipPrograms } from './constant';

@Component({
  selector: 'app-partnership-programs',
  templateUrl: './partnership-programs.component.html',
  styleUrls: ['./partnership-programs.component.scss'],
})
export class PartnershipProgramsComponent {
  partnershipPrograms = partnershipPrograms;
}
