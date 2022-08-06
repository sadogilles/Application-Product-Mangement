import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "./products";

@Injectable(
)  
export class ProductService{
 
  private productUrl='www.myWebService.com/api/products';

  constructor(private http:HttpClient){

    }
   public getProducts():Observable<IProduct[]>{ // the method does nothing untill we subscribe
      return this.http.get<IProduct[]>(this.productUrl);//get<IProduct[]> types/associates/maps the response to an array of product
   }
}