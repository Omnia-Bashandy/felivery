import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { SharedService } from 'src/app/Services/shared.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 categories: any = [];
  id: any = this.shared.getId();
  showSection: boolean = false;
  categoryName: string = '';
  updatedCategoryName: string = ''; // Add this line

  constructor(
    public catService: CategoriesService,
    private servicestore: StoreService,
    private shared: SharedService,
    private router: Router
  ) {}

  toggleSection() {
    this.showSection = !this.showSection;
    if (this.showSection) {
      this.categoryName = ''; // Reset the category name when the section is toggled
    }
  }

  cancel() {
    this.categoryName = ''; // Reset the category name
    this.showSection = false;
  }
  showupdate: boolean[] = [];
  
  toggSection(index: number): void {
    this.showupdate[index] = true;
  }
  
  cancelUpdate(index: number): void {
    this.showupdate[index] = false;
  }
  
  

  refresh(): void {
    window.location.reload();
  }

  addItem(categoryname: any) {
    let newItem = {
      name: categoryname,
      restaurantID: this.id
    };
    this.categoryName = '';
    this.showSection = false;
    this.catService.addCategory(newItem).subscribe(
      (data: any) => {
        console.log(data);
        alert(`${categoryname} added successfully`);
        setInterval(this.refresh, 50);
      },
      (err: any) => {
        console.log('Error', err);
      }
    );
  }

  ngOnInit(): void {
    this.catService.getCategoryRestid(this.id).subscribe(
      (data: any) => {
        console.log(data); //all items
        this.categories = data;
      },
      (error: any) => {
        console.log('There is an error ', error);
      }
    );
  }

  deleteItem(id: any): void {
    if (confirm('Are you sure you want to delete this category?')) {
      console.log('You pressed OK!');
      this.catService.deleteCategory(id).subscribe(
        () => {
          setInterval(this.refresh, 50);
          console.log('Deleted');
        },
        (error) => {
          console.error('Error deleting item:', error);
        }
      );
    } else {
      console.log('You pressed Cancel!');
    }
  }
  updateCategory(catId:any , updatedCategoryName:any , restId : any){
    console.log(catId +" : "+ updatedCategoryName);
    console.log(restId);
    let cat = {
      id: catId,
      name: updatedCategoryName,
      restaurantID: restId
    }
    console.log(cat);
    
    this.catService.updateCategory(cat).subscribe(
      (data) => {
        console.log(data);
        alert(`${updatedCategoryName} updated successfully`);
        setInterval(this.refresh, 50);
      },
      (err: any) => {
        console.log('Error', err);
      }
    );
  }
  
  
}

