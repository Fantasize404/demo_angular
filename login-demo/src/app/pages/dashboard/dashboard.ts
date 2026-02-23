import { Component } from '@angular/core';
import { AuthService } from '../../auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
