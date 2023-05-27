import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories:any = [];

  constructor(public catService :CategoriesService ,private router: Router) {}
  ngOnInit(): void {
    // console.log(this.menuservice.GetAllmenuserved);
      this.catService.GetAllCategories().subscribe({
       next:(data) =>{
         this.categories = data;     
       },
       error:(err)=>{console.log(err)}
     })

  }
  deleteItem(id: any): void {
    this.catService.getCategoryById(id).subscribe()
    this.catService.deleteCategory(id).subscribe(() => {
      // alert('Item deleted successfully.');
      console.log("Deleteeed");
      
      this.router.navigate(["/store-dashboard/categories"]);
    }, error => {
      console.error('Error deleting item:', error);
    });
  }

  newItem: any = {};

  addItem(): void {
    this.catService.addCategory(this.newItem).subscribe(
      (response) => {
        console.log('Item added successfully.');
        // Reset the form after successful submission
        this.newItem = {};
      },
      (error) => {
        console.error('Error adding item:', error);
      }
    );
  }


}
