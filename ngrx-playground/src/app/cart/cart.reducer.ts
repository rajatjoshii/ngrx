import { createReducer, on } from "@ngrx/store";
import * as CartActions from "./cart.actions"

export interface CartItem {
    id: string,
    title: string,
    quantity: number,
    price: number
}

export interface CartState {
    items: CartItem[]
}

export const initialState: CartState =  {
    items: []
}

/** { item } = destructuring the action object to directly pull out its item property from 
 * {
  type: '[Cart] Add Item',
  item: { id: '1', title: 'Wonder Book' }
}
 */
export const cartReducer = createReducer(
    initialState,
    on(CartActions.addItem, (state, {item})=>{
        const exists = state.items.find(i=> i.id === item.id);
        if(exists){
            const updated = state.items.map((i)=> i.id === item.id ? {...i, quantity: i.quantity + 1} : i)
            return ({
                ...state,
                items: updated
            })    
        } else{
            const added = [...state.items, {...item, quantity: 1}]
            return ({
                ...state,
                items: added
            })
        }
    }),

    on(CartActions.removeItem, (state, {item})=>{
        const exists = state.items.find((i)=>i.id === item.id);
        if(!exists){
           return state;
        } 
        const deleted = state.items.filter((i)=>i.id!==item.id);
        return ({
            ...state,
            items: deleted
        })
    }),

    on(CartActions.decreaseItem, (state,{item})=>{
        const exists = state.items.find((i)=>i.id === item.id);
        if(!exists){
            return state
        }
        const quantity = exists.quantity;
        if(quantity>1){
            const decrease = state.items.map((i)=>i.id===item.id ? {...i, quantity: i.quantity-1}: i);
            return ({
                ...state,
                items: decrease
            })
        } else{
            const deleted = state.items.filter((i)=>i.id!==item.id);
            return ({
                ...state,
                items: deleted
            })
        }
    })
)
