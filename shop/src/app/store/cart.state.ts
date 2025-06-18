import { Item } from "../services/item.service";
/*En este archivo se definen los objetos
que serán usandos para manejar el estado */


export interface CartItem{
    item:Item;
    quantity: number;
}

export interface CartState{
    items:CartItem[];
}

export const initialCartState: CartState={items:[]};