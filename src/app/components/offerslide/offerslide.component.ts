import { Component , ElementRef} from '@angular/core';

@Component({
  selector: 'app-offerslide',
  templateUrl: './offerslide.component.html',
  styleUrls: ['./offerslide.component.css']
})
export class OfferslideComponent {
  constructor(private elementRef: ElementRef){}
    scrolltooffer() {
        const element = this.elementRef.nativeElement.querySelector('#scrolloffer');
        if (element) { 
          element.scrollIntoView({ behavior: 'smooth' }); 
        } 
      }
}
