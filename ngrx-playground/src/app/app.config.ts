import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { counterReducer } from './counter/counter.reducer';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './cart/cart.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';


const localStorageSyncReducer = localStorageSync({
  keys: ['cart'],  // <-- only persist the cart slice
  rehydrate: true
});

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideStore(
      {
        counter: counterReducer, 
        cart: cartReducer,
      },
      { metaReducers: [localStorageSyncReducer] }
    )
  ],
};
