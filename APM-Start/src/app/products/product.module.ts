import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import the component,service,directives and pipes related to product component
import { convertToSpacePipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product.list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [ //declare component,directives and pipes used by the product module
    ProductListComponent,
    convertToSpacePipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [ //import module needed 
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([ // passed in  the route related to product module in forChild
      {path:'products',component:ProductListComponent},
      // id is map to the url parameter from array
      {path:'products/:id',
      canActivate:[ProductDetailGuard] //try url such as http://localhost:4200/products/hello http://localhost:4200/products/0
      ,component:ProductDetailComponent},
    ])
  ]
})
export class ProductModule { }
