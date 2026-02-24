import { Injectable, signal, computed } from '@angular/core';

export interface Product {
  name: string;
  category: string;
  price: number;
}

export interface OrderItem extends Product {
  qty: number;
}

@Injectable({ providedIn: 'root' })
export class OrderService {

  categories = ['咖啡', '茶', '果汁'];

  products: Product[] = [
    { name: '拿鐵', category: '咖啡', price: 100 },
    { name: '美式', category: '咖啡', price: 80 },
    { name: '綠茶', category: '茶', price: 50 },
    { name: '紅茶', category: '茶', price: 50 },
    { name: '柳橙汁', category: '果汁', price: 70 }
  ];

  selectedCategory = signal<string>('咖啡');
  selectedQty = signal<number>(1);
  orders = signal<OrderItem[]>([]);

  isNotOne = signal<boolean>(true);

  filteredProducts = computed(() =>
    this.products.filter(
      p => p.category === this.selectedCategory()
    )
  );

  total = computed(() =>
    this.orders().reduce(
      (sum, o) => sum + o.price * o.qty,
      0
    )
  );

  setCategory(cat: string) {
    this.selectedCategory.set(cat);
  }

  setQty(qty: number) {
    this.selectedQty.set(qty);
  }

  addOrder(product: Product) {
    const qty = this.selectedQty();
    const current = [...this.orders()];

    const existing = current.find(o => o.name === product.name);

    if (existing) {
      existing.qty += qty;
    } else {
      current.push({ ...product, qty });
    }

    this.orders.set(current);
    this.selectedQty.set(1);
    this.isNotOne.set(true);
  }

  clearOrders() {
    this.orders.set([]);
    this.selectedQty.set(1);
    this.isNotOne.set(true);
  }
}
