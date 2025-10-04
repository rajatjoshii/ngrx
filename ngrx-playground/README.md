# NgRx Playground

This project was generated manually to mirror the structure of a standard Angular workspace configured for NgRx experimentation. It ships with the Angular CLI configuration files, Karma unit testing setup, and initial NgRx dependencies so that you can immediately begin authoring actions, reducers, effects, selectors, and feature modules.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Launch the development server:
   ```bash
   npm start
   ```
3. Run unit tests:
   ```bash
   npm test
   ```

You can generate additional Angular or NgRx constructs with the Angular CLI once the dependencies are installed, for example:

```bash
npx ng generate @ngrx/schematics:store State --module app
```

## Project structure

- `src/app/app.component.*`: Root standalone component wired up for routing.
- `src/app/app.routes.ts`: Routing configuration ready for feature routes.
- `src/app/app.config.ts`: Application providers bootstrapped via `bootstrapApplication`.
- `src/main.ts`: Angular bootstrap entry point.
- `src/styles.scss`: Global styles.

NgRx packages (`@ngrx/store`, `@ngrx/effects`, `@ngrx/store-devtools`, `@ngrx/entity`, and `@ngrx/router-store`) are already declared in `package.json`.

## This project has an Add to Cart implementation done via state management ngrx.

A localStorageSyncReducer has also been added to the cart part of the store so that even on page refresh, browser close the value in the cart will
persist. 
This is not exaclty how the cart is managed at amazon they do it on the server side caching or database storage.
A more adequate implementation of localstorage would be to store form information in multi page form.

## AWS Cognito based login logout added - OAuth implemented

OAuth Protocol has a set of rules that defines how login, token management has to be done. 
eg.  oauth: {
            domain: 'us-east-1vjar1mhdi.auth.us-east-1.amazoncognito.com',
            scopes: ['openid', 'email', 'phone'],
            redirectSignIn: ['http://localhost:4200/'],
            redirectSignOut: ['http://localhost:4200/'],
            responseType: 'code',
          },
          it requires any library implementing Oauth to pass these. Here we are using Amplify library to implement OAuth along with Cognito.
