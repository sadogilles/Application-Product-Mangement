import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './products';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  pageTitle:string='Page Detail';
  //strite typing so either we initial products or we type it to undefined to prevent errors
  product : IProduct | undefined;
  //use the activatedroute service to retrieve the parameter
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {             
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.pageTitle+=`${id}`;
      //hard coded product
      this.product={
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      }
      
  }

  onBack():void{
    this.router.navigate(['products']); //no argument passed
  }

}
