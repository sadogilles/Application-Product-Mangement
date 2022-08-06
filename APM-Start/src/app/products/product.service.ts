import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable,tap, throwError } from "rxjs";
import { IProduct } from "./products";

@Injectable(
)  
export class ProductService{
  //whoever we need to define the location of the file so that angular knows when it startup the application 
  private productUrl='api/products/products.json';
  constructor(private http:HttpClient){}    
   public getProducts():Observable<IProduct[]>{ // the method does nothing untill we subscribe
      return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log('all:',JSON.stringify(data))),
        catchError(this.handleError)
      );
   }
   private handleError(err:HttpErrorResponse){
      
    let errorMessage='';
    if(err.error instanceof ErrorEvent){
    errorMessage=`An error occured: ${err.error.message}`
    }else{
      errorMessage= `Server returned code: ${err.status}, error message is ${err.message}`
    }

    // return throwError(()=>new Error('something bad happen in the backend'));  
      return throwError(()=>errorMessage);
   }
   
}