import { Component } from '@angular/core';
import { Store } from 'src/app/Store/store';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss'],
})
export class AdminNavbarComponent {
  isMenuCollapsed: boolean = true;
  constructor(public store: Store) {}

  logout() {
    this.store.logout();
  }
}
