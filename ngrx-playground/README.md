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
