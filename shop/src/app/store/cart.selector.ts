import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CartState } from './cart.state'
import { cartFeatureKey } from './cart.reducer';

/*Cómo y partes de información obtenemos del estado
del carrito de compras */

export const selectCartState = createFeatureSelector<CartState>(cartFeatureKey);

/*obtener todos los productos*/
export const selectCartItems = createSelector(
    selectCartState,
    state => state.items
);

/*total de compra*/
export const selectCartTotal = createSelector(
    selectCartItems,
    items => items.reduce(
        (total, cartItem)=> total + cartItem.item.amount * cartItem.quantity,0)
);


/*cantidad de productos*/
export const selectTotalItems =  createSelector(
    selectCartItems,
    items => items.reduce((conteo, cartItem)=> conteo + cartItem.quantity,0)
);