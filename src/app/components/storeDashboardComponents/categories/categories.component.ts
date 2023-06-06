import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { SharedService } from 'src/app/Services/shared.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories:any = [];
  id:any = this.shared.getId();
  showSection: boolean = false;
  categoryName: string = '';

  toggleSection() {
    this.showSection = !this.showSection;
  }

  addCategory() {
    // Perform the logic to add the category using the categoryName value
    // Reset the input field and hide the section after adding
    this.categoryName = '';
    this.showSection = false;
  }

  cancel() {
    // Reset the input field and hide the section without adding
    this.categoryName = '';
    this.showSection = false;
  }
  constructor(public catService :CategoriesService,
    private servicestore: StoreService,
    private shared:SharedService,private router: Router) {}

  ngOnInit(): void {
    this.catService.getCategoryRestid(this.id).subscribe(
      (data:any)=>{
            console.log(data);//all items
            this.categories=data;
          },
          (error:any)=>{
            console.log("There is an error ",error); 
          }
    );
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
