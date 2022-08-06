import { Component, OnInit } from "@angular/core";
import { IProduct } from "./products";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    
    pageTitle="Product List";
    imageWidth=50;
    imageMargin=2;
    showImage = true;

    toggleImage(){
        this.showImage =!this.showImage;
    }
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

    
    ngOnInit(): void {
      //listFilter refers to the property getter? or setter? look like the getter
      this.listFilter='cart';
  }
    products:IProduct[] = [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2021",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2021",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        }
      ]
      

}


