import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { IProduct } from "./products";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css'],
    providers:[ProductService]
})
export class ProductListComponent implements OnInit{
    
    pageTitle="Product List";
    imageWidth=50;
    imageMargin=2;
    showImage = true;
    products:IProduct[] = [];

    constructor(private productService:ProductService){}

    ngOnInit(): void {
      this.products = this.productService.getProducts();
      this.filteredProducts=this.productService.getProducts();
      this.listFilter='cart';
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


