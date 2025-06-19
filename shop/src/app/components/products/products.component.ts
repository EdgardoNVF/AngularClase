import { Component, inject } from '@angular/core';
import { Item, ItemService } from '../../services/item.service';
import { Store } from '@ngrx/store'
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { selectTotalItems } from '../../store/cart.selector';
import { addToCart } from '../../store/cart.actions';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  private service=inject(ItemService);
  private store=inject(Store);

  items=toSignal(this.service
    .getItems()
    .pipe(catchError(err=> {
      console.log(err);
      return of([])
    })),
    {initialValue: [] as Item[]});


  countItems=toSignal(this.store
    .select(selectTotalItems),
   {initialValue:0});

   addToCartItem(item:Item){
      this.store.dispatch(addToCart({item}));
   }

}
