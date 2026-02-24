import { Component } from '@angular/core';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  constructor(public service: OrderService) {}
}
