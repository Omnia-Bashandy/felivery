import { Component } from '@angular/core';
import { faCoffee  } from '@fortawesome/free-solid-svg-icons';
import {faFacebook , faInstagram , faTwitterSquare} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faCoffee = faCoffee;
  facebook = faFacebook;
  insta = faInstagram;
  twitter = faTwitterSquare;

}
