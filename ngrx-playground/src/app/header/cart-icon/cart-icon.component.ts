import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCartTotalQuantity } from 'src/app/cart/cart.selectors';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.css'
})
export class CartIconComponent {
  constructor(private store: Store){}

  cartCount$ = this.store.select(selectCartTotalQuantity);
}
