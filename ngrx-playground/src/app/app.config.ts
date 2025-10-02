import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { counterReducer } from './counter/counter.reducer';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({counter: counterReducer, cart: cartReducer})],
};
