import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItems, selectCartTotalAmount } from '../cart/cart.selectors';
import { CommonModule } from '@angular/common';
import { addItem, decreaseItem, removeItem } from '../cart/cart.actions';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  constructor(private store: Store){}

  cartTotal$ = this.store.select(selectCartTotalAmount);
  cartItems$ = this.store.select(selectCartItems);

  increment(item: any) {
    this.store.dispatch(addItem({ item }));
  }
  
  decrement(item: any) {
    this.store.dispatch(decreaseItem({ item }));
  }
  
  delete(item: any) {
    this.store.dispatch(removeItem({ item }));
  }
  
}
