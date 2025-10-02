import { Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [
    { path: 'books', component: BookListComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: '', redirectTo: 'books', pathMatch: 'full' }
];
