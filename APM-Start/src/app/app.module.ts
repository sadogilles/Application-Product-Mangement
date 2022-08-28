import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './products/product.list.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { convertToSpacePipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    convertToSpacePipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //order masters -always the most specific at the top and least at the button
    //wildcard should always be at the bottom at it matches route not specified in the array
    //note that the path doesnot start with a /
    RouterModule.forRoot([
      {path:'products',component:ProductListComponent},
      {path:'products:id',component:ProductDetailComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
