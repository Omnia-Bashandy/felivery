import { Component } from '@angular/core';
import { faCheckCircle, faUtensils, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
// import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent {
  icon1 = faCheckCircle;
  icon2 = faUtensils;
  icon3 = faMotorcycle;

  constructor(private library: FaIconLibrary) {
    // Add the motorcycle icon to the library
    library.addIcons(faMotorcycle);
  }
}
