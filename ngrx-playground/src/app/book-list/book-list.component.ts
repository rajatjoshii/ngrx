import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem } from '../cart/cart.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  constructor(private store: Store) {}

  books = [
    { id: '1', title: 'Wonder Book', price: 200 },
    { id: '2', title: 'Angular Mastery', price: 350 },
    { id: '3', title: 'NgRx Deep Dive', price: 500 }
  ];

  addToCart(book: any) {
    this.store.dispatch(addItem({ item: book }));
  }
}
