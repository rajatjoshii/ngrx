import { createReducer, on } from "@ngrx/store";
import * as CounterActions from "./counter.actions"

export interface CounterState {
    count: number;
}

export const initialState: CounterState = {
    count: 0
}

/**
 * NgRx calls your reducer with state = undefined the very first time.
 * when createReducer sees state === undefined, it falls back to your initialState.
 * After that, every time an action runs, the reducer gets the current state, and your handlers return a new state built on top.
 */

export const counterReducer = createReducer(
    initialState, 
    on(CounterActions.increment, state =>({
        ...state,
        count: state.count + 1
    })),
    on(CounterActions.decrement, state=>({
        ...state,
        count: state.count-1
    })),
    on(CounterActions.reset, state=>({
        ...state,
        count:0
    }))
)

