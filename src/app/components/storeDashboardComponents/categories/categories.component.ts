import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories:any = [];
  id:any;

  constructor(public catService :CategoriesService ,private router: Router,private route : ActivatedRoute) {}
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

  updateItem(id:any){
    // this.router.navigate(['/categories', categoryId]);
  }
  // getCategory() {
  //   const categoryId = 'your-category-id'; // Replace with the desired category id
  //   this.catService.getCategoryById(categoryId)
  //     .subscribe((response: any) => {
  //       this.categoryInfo = response.name; // Assuming the API response has a 'name' property
  //     });
  // }

  // updateCategory() {
  //   const categoryId = 'your-category-id'; // Replace with the desired category id
  //   const updatedInfo = { name: 'Updated Category Name' }; // Replace with the updated information
  //   this.catService.updateCategory(categoryId)
  //     .subscribe((response: any) => {
  //       // Handle the API response after updating the category information
  //       console.log(response);
  //     });
  // }

  // item:any;
  // updateItem(id:any){
  //   this.route.params.subscribe(params=> this.catService.getCategoryById(params['id']))
  //   this.catService.getCategoryById(this.id).subscribe((data)=>this.item = data)

  // }

}
