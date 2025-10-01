import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter] Increment'); //([Source] Event) is just a label Convention: [FeatureName] ActionDescription.
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');


//the convention is used in devtools for logging purposes
/**
 * Action: [Counter] Increment
 * Previous state: { count: 2 }
 * Next state: { count: 3 }
*/
