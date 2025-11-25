import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-price',
  standalone: true,
  templateUrl: './price.html',
})
export class Price {
  price = signal(100);
  quantity = signal(2);

  total = computed(() => this.price() * this.quantity());

  increaseQty() {
    this.quantity.update(q => q + 1);
  }

  decreaseQty() {
    this.quantity.update(q => q - 1);
  }
}
