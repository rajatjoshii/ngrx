import { createAction, props } from "@ngrx/store";

export const addItem = createAction('[Cart] Add Item', props<{item: {id:string,title: string, price:number}}>());

export const removeItem = createAction('[Cart] Remove Item', props<{item: {id:string}}>());

export const decreaseItem = createAction('[Cart] Decrease Item', props<{item: {id:string}}>());