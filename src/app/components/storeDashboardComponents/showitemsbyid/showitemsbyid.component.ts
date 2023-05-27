import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { CategoriesService } from 'src/app/Services/categories.service';
import { MenuitemsService } from 'src/app/Services/menuitems.service';

@Component({
  selector: 'app-showitemsbyid',
  templateUrl: './showitemsbyid.component.html',
  styleUrls: ['./showitemsbyid.component.css']
})
export class ShowitemsbyidComponent {
  items:any|undefined;
  // category:any;
  id:any;
  constructor(public route: ActivatedRoute,private Service:CategoriesService, private menu:MenuitemsService) { 
    }
    ngOnInit() {
      // console.log(this.route.params.subscribe(params=> this.getelmentbyid(params['id'])));
      
      // this.route.params.subscribe(params=> this.getelmentbyid(params['id']));
      this.menu.GetAllmenuserved().subscribe((data)=>this.items = data)
      this.route.params.subscribe(()=> this.Service.getCategoryById(this.id));
    }
    // getelmentbyid(id:any){
    //   this.menu.GetAllmenuserved().subscribe((data)=>this.item = data)
    // }
}
