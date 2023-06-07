import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent {
category:any;
id:any;
categoryname :any;
constructor(public route: ActivatedRoute,private catService: CategoriesService) {}
// validations

editcat = new FormGroup(
  {categoryname: new FormControl("",[Validators.min(5),Validators.max(50),Validators.required]), }
)

// to fetch category by id
  ngOnInit() {
   this.id= this.route.params.subscribe(params => {
      const categoryId = params['id'];
      this.getCategory(categoryId);
    });
  }
  getCategory(categoryId: any) {
    this.catService.getCategoryById(categoryId)
      .subscribe((response: any) => {
        this.category = response;
        console.log(response);
        
      });
      console.log(this.category);
    
  }

  updateCategory(categoryname: string) {
    let Updatedcategory = {
      id: +this.category.id,
      name: categoryname
    };
    console.log(Updatedcategory);
    
  
    this.catService.updateCategory(Updatedcategory).subscribe(
      () => {
        this.category.name = categoryname;
        alert(`${categoryname} updated successfully`);
      },
      (err: any) => {
        console.log('Error', err);
      }
    );
  }

}