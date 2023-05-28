import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  private Base_URL = "https://localhost:44309/api/Category";
  
  constructor(private client:HttpClient) { }
  
 GetAllCategories(){
  return this.client.get(this.Base_URL);
 }
 getCategoryById(id:any) {
  const url = `${this.Base_URL}/${id}`;
  return this.client.get(url);
}
addCategory(menuitem:any) {
  return this.client.post(this.Base_URL, menuitem);
}
updateCategory(menuitem: any ) {
  return this.client.put(`${this.Base_URL}/${menuitem.id}`, menuitem);
}
deleteCategory(id: any) {
  return this.client.delete(`${this.Base_URL}/${id}`);
}

}
