import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  
  dtOptions: any = {};
  //Custom Data
  Orders: { name: string; email: string; price: number; }[] = [
    {name: 'Mohamad', email: 'Mohamad@gmail.com', price:111},
    {name: 'Basiony', email: 'BasionyBasiony@gmail.com', price:123},
    {name: 'Hazem', email: 'HazemHazem@gmail.com', price:222},
    {name: 'Ali', email: 'Ali@gmail.com', price:232},
    {name: 'Rabie', email: 'Rabie@gmail.com', price:323},
    {name: 'Aya', email: 'Aya@gmail.com', price:525},
    {name: 'Rawan', email: 'Rawan@gmail.com', price:141},
    {name: 'Omnia', email: 'Omnia@gmail.com', price:241},
    {name: 'Shaza', email: 'Shaza@gmail.com', price:362},
    {name: 'Khaled', email: 'Khaled@gmail.com', price:333},
    {name: 'Ahmed', email: 'Ahmed@gmail.com', price:444},
    {name: 'Ahmad', email: 'Ahmaad@gmail.com', price:456},
    {name: 'Mona', email: 'Monaa@gmail.com', price:666}
  ];
  ngOnInit(){
  //Call Datatable
  this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 20],
      processing: true
    };
  }
}
