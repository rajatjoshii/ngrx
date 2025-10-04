import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { counterReducer } from './counter/counter.reducer';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './cart/cart.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

import { Amplify } from 'aws-amplify';
import { cognitoUserPoolsTokenProvider } from '@aws-amplify/auth/cognito';
import { sessionStorage } from 'aws-amplify/utils';

/**
 * Inside a User Pool, you must create App Clients(userPoolWebClientId) to:
Define how different frontends or platforms (web, mobile, etc.) will access and authenticate users in this pool.
You can have multiple App Clients for different environments:
 */

// ✅ v6 config shape
Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: 'us-east-1_VjAr1mHDi',
        userPoolClientId: '4qbp7ajgd9m3v7qtn2qe5u5onf',
        region: 'us-east-1',
        loginWith: {
          oauth: {
            // ❗ no "https://"
            domain: 'us-east-1vjar1mhdi.auth.us-east-1.amazoncognito.com',
            scopes: ['openid', 'email', 'phone'],
            redirectSignIn: ['http://localhost:4200/'],
            redirectSignOut: ['http://localhost:4200/'],
            responseType: 'code',
          },
        },
      },
    },
  } as any);

  // 2) Tell Amplify Auth to persist *tokens* in sessionStorage (v6 way)
cognitoUserPoolsTokenProvider.setKeyValueStorage(sessionStorage);

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