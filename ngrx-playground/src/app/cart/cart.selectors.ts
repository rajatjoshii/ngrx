import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.reducer";

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
    selectCartState,
    (state: CartState) => state.items 
);

export const selectCartTotalQuantity = createSelector(
    selectCartItems,
    (items)=> {
        return items.reduce((total, item)=>total + item.quantity,0)
    }
);

export const selectCartDistinctCount = createSelector(
    selectCartItems,
    (items)=> items.length
)

export const selectCartTotalAmount = createSelector(
    selectCartItems,
    (items)=>{
        return items.reduce((sum, item)=>sum + item.price * item.quantity,0)
    }
)
