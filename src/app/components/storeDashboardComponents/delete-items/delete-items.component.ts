import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { MenuitemsService } from 'src/app/Services/menuitems.service';

@Component({
  selector: 'app-delete-items',
  templateUrl: './delete-items.component.html',
  styleUrls: ['./delete-items.component.css']
})
export class DeleteItemsComponent implements OnInit{

  // Item:any|undefined;
  constructor(public route: ActivatedRoute,private router:Router,private menuService: MenuitemsService) {  
    }
    items:any = [];
    id:any;
    status:any;
    ngOnInit() {
      
      this.route.params.subscribe(params => {

        this.items.id = params['id']})
      
       
          this.menuService.getMenuitemById(this.items.id)  
              .subscribe({
                  next: data => {
                      console.log("secces");
                      
                      
                  },
                  error: error => {
                  
                      console.error('There was an error!', error);
                  }
              }); 
          
    }
    refresh(): void {
      window.location.reload();
    }
    deleteItem(id: any): void {
      this.menuService.deleteMenuitem(id).subscribe(() => {
        alert('Item deleted successfully.');
        this.router.navigate(['/store-dashboard/menuitems']);
        setInterval(this.refresh,50)
      }, error => {
        console.error('Error deleting item:', error);
      });
    
       
      
      console.log(this.id)
    }
}
