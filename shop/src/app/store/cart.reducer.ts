import { createReducer, on } from '@ngrx/store';
import { initialCartState } from './cart.state';
import * as CartActions from './cart.actions';

/*
Se implementan las acciones definidas en actions
*/

export const cartFeatureKey='cart';

export const cartReducer = createReducer(
    initialCartState,

    on(CartActions.addToCart, (state, {item})=>{
      const search = state.items.find(t=>t.item.id === item.id);

      if(search){
        return {
            ...state,
            items: state.items.map(
                t=>t.item.id === item.id ? {...t, quantity: t.quantity+1}:t
            )
        };

      }

      return {
        ...state,
        items: [...state.items, {item, quantity:1}]
      }
    }),

    on(CartActions.removeFromCart, (state, {idItem})=>{
        return {
            ...state,
            items: state.items.filter(t=>t.item.id !== idItem)
        }
    }),

    on(CartActions.clearCart, (state)=>{
        return {
            ...state,
            items:[]
        }
    })

);

