# ngrx workspace

This repository now contains an Angular workspace (`ngrx-playground`) that is preconfigured with NgRx dependencies so you can immediately begin practicing with actions, reducers, effects, and selectors.

Navigate into the project and install dependencies to get started:

```bash
cd ngrx-playground
npm install
npm start
```

## This project has a Add to Cart implementation done via state management ngrx.

A localStorageSyncReducer has also been added to the cart part of the store so that even on page refresh, browser close the value in the cart will
persist. 
This is not exaclty how the cart is managed at amazon they do it on the server side caching or database storage.
A more adequate implementation of localstorage would be to store form information in multi page form.