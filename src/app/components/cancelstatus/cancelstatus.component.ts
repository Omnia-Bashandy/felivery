import { Component } from '@angular/core';

@Component({
  selector: 'app-cancelstatus',
  templateUrl: './cancelstatus.component.html',
  styleUrls: ['./cancelstatus.component.css']
})
export class CancelstatusComponent {
  isHidden: boolean = true;
  toggleVisibility() {
    this.isHidden = !this.isHidden;
  }
    
  addFeedback(usrname:any ,feedback:any)
  {    
    
    let newFeedback ={
      name:usrname,
      feedback:feedback,
      }

      localStorage.setItem('feedback',JSON.stringify(newFeedback));
      alert("Your feedback sent Succufully!");
  }
  
}
