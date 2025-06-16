import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, timeout, map, catchError, throwError } from 'rxjs';


export interface Dog{
  id:number,
  breed:string,
  description:string,
  urlImage:string
}


@Injectable({
  providedIn: 'root'
})
export class DogService {
  private http:HttpClient=inject(HttpClient);
  private baseUri:string="http://localhost:8082/dog";

  /*get dogs from api */
  getDogs():Observable<Dog[]>{
     return this.http.get<any[]>(this.baseUri)
     .pipe(
        timeout(3000), 
        map(anyDataList => anyDataList.map(any => any as Dog) ),
        catchError(err=>{
          console.log("error al obtener api data ", err);
          return throwError(()=>new Error("error get api data"));
        }) 
     );
  }
  

  /*insert dog into api*/
  insertDog(dog:Dog):Observable<void>{
     return this.http.post<void>(this.baseUri, dog)
            .pipe(
              timeout(3000),
              catchError(err=>{
                console.log(" error insert ", err);
                return throwError(()=> new Error(" error al insertar "))
              })
            );
  }


  /*delete dog from api */
  deleteDog(id:number):Observable<void>{
     return this.http.delete<void>(`${this.baseUri}/${id}`)
     .pipe(
      timeout(3000),
      catchError(err=>{
        console.log(" error delete ", err);
        return throwError(()=> new Error(" error al eliminar "))
      })
     );
  }




  
}
