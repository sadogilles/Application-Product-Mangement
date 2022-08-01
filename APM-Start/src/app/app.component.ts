import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <h1>{{title}}</h1>
  <pm-products></pm-products>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';

  
}
