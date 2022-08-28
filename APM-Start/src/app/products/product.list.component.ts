import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductService } from "./product.service";
import { IProduct } from "./products";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css'],
    providers:[ProductService]
})
export class ProductListComponent implements OnInit,OnDestroy{
    
    pageTitle="Product List";
    imageWidth=50;
    imageMargin=2;
    showImage = true;
    products:IProduct[] = [];
    errorMessage='';
    sub!:Subscription;

    constructor(private productService:ProductService){}
  

    ngOnInit(): void {
      this.sub=this.productService.getProducts().subscribe({
        next: products=> {this.products=products;this.filteredProducts = this.products; },
        error:err=>this.errorMessage=err
      });
     // 1 - if this.filteredProducts = this.products; //product is empty as the subscription isnot finished
      // we move the line into next function
    
    }
    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }

    toggleImage(){this.showImage =!this.showImage;}

    //private variable
    private _listFilter:string='';

    //getter
    get listFilter():string{
      return this._listFilter;
    }
    filteredProducts:IProduct[]=[];
    //setter
    set listFilter(filter:string){
      this._listFilter=filter;
      console.log('in setter :', filter);
      this.filteredProducts= this.performFilter(filter);
    }

     performFilter(filterValue: string): IProduct[] {
      filterValue=filterValue.toLocaleLowerCase()
      // returns a new array with the element matching the condition
      return this.products.filter((p)=>{
        return p.productName.toLocaleLowerCase().includes(filterValue);
      })
    }

    
    
  
}


