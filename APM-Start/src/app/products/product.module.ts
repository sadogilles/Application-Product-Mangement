import { NgModule } from '@angular/core';
//import the component,service,directives and pipes related to product component
import { convertToSpacePipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product.list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ //declare component,directives and pipes used by the product module
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [ //import module needed
    RouterModule.forChild([ // passed in  the route related to product module in forChild
      {path:'products',component:ProductListComponent},
      // id is map to the url parameter from array
      {path:'products/:id',
      canActivate:[ProductDetailGuard] //try url such as http://localhost:4200/products/hello http://localhost:4200/products/0
      ,component:ProductDetailComponent},
    ]),
    //shared module added
    SharedModule, 
  ]
})
export class ProductModule { }
