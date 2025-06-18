import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'products', component:ProductsComponent},
    {path:'shopping', component:ShoppingcartComponent}
];
