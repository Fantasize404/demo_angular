import { Component } from '@angular/core';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-num-pad',
  standalone: true,
  templateUrl: './num-pad.html',
  styleUrl: './num-pad.css',
})
export class NumPadComponent {

  numbers = [1,2,3,4,5,6,7,8,9,0];

  constructor(public service: OrderService) {}

  input(n: number) {
    const current = this.service.selectedQty();
    if (this.service.isNotOne()) {
      this.service.setQty(n);
      this.service.isNotOne.set(false);
    } else {
      this.service.setQty(current * 10 + n);
    }

  }

  clear() {
    this.service.setQty(1);
    this.service.isNotOne.set(true);
  }
}
