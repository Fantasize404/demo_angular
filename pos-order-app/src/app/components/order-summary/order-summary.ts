import { Component } from '@angular/core';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummaryComponent {
  constructor(public service: OrderService) {}
}
