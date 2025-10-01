import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.reducer";

export const selectCounterState = createFeatureSelector<CounterState>('counter'); //Here 'counter' must match the key you’ll use when registering this reducer in app.config.ts.

export const selectCount = createSelector(
    selectCounterState,  //input selector 
    (state: CounterState) => state.count //projector -> after taking the value of the input selector we can return anything in this projector function
);

/**
 * Why Selectors Are Smart
 1. Memoized: If the state didn’t actually change, the selector doesn’t recalculate. That saves performance.
 2. Composable: You can build bigger selectors out of smaller ones, like LEGO bricks.
Example: selectDoubleCount = createSelector(selectCount, count => count * 2).
 3. Encapsulation: Components never need to know where in the store count lives. If later you refactor state structure, you just update selectors, not all components
 */
