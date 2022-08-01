import { AfterContentChecked, Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    
    
     @Input() rating !: number ;
     cropWidth: number = 75;

    ngOnChanges(): void {
         this.cropWidth= this.rating*75/5;
        console.log(`aftercontentcheck ${this.rating}`);
    }
    

}