import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { ProductListComponent } from '../../components/product-list/product-list';
import { NumPadComponent } from '../../components/num-pad/num-pad';
import { OrderSummaryComponent } from '../../components/order-summary/order-summary';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [
    NavbarComponent,
    ProductListComponent,
    NumPadComponent,
    OrderSummaryComponent
  ],
  templateUrl: './pos.html',
  styleUrls: ['./pos.css']
})
export class PosComponent {}
