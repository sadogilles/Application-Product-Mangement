import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { convertToSpacePipe } from './convert-to-spaces.pipe';
@NgModule({
  declarations: [// what do we want to share ?
  StarComponent,
  convertToSpacePipe
  ],
  imports: [
    CommonModule // imports the common module because the star component need it
  ],
  exports : [ // we can export module without importing them e.g formsmodule
    StarComponent, 
    convertToSpacePipe,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
