import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, timeout } from 'rxjs';

export interface Item{
  id:number,
  name:string,
  description:string,
  amount:number,
  urlImage:string
}



@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private http:HttpClient=inject(HttpClient)
  private baseURL:string="/api/item";

  getItems():Observable<Item[]>{
     return this.http.get<Item[]>(this.baseURL)
      .pipe(
        timeout(3000),
        catchError(err=>{
          console.log("error retrieve items ", err);
          throw new Error("error items");
        })
      );
  }

}
