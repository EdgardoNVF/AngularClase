import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectCartItems, selectCartTotal } from '../../store/cart.selector';
import { CartItem } from '../../store/cart.state';
import { clearCart, removeFromCart } from '../../store/cart.actions';

@Component({
  selector: 'app-shoppingcart',
  imports: [],
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css'
})
export class ShoppingcartComponent {
  private store = inject(Store);
  items = toSignal(
    this.store.select(selectCartItems),
    {initialValue: [] as CartItem[]}
    )
  total = toSignal(
    this.store.select(selectCartTotal),
    {initialValue: 0}
  )

  deleteItem(id:number){
    this.store.dispatch(removeFromCart({idItem:id}))
  }

  clearCart(){
    this.store.dispatch(clearCart())
  }

}
