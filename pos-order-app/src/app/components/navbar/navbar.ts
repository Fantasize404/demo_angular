import { Component } from '@angular/core';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  constructor(public service: OrderService) {}
}
