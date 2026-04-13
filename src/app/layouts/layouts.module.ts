import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { SocialMenuComponent } from './social-menu/social-menu.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NavbarComponent,
    DisclaimerComponent,
    SocialMenuComponent,
    AdminNavbarComponent,
  ],
  imports: [CommonModule, RouterModule, NgbDropdownModule, NgbCollapseModule, TranslateModule],
  exports: [AdminNavbarComponent, TranslateModule],
})
export class LayoutsModule {}
