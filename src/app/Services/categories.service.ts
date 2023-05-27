import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  private Base_URL = "https://localhost:44309/api/Category";
  private Uurl = "https://localhost:44309/api/Category";
  private addURL = "https://localhost:44309/api/Category";
  private putURL = "https://localhost:44309/api/Category";
  private delurl = "https://localhost:44309/api/Category";
  
  constructor(private client:HttpClient) { }
  
 GetAllCategories(){
  return this.client.get(this.Base_URL);
 }
 getCategoryById(id:any) {
  const url = `${this.Uurl}/${id}`;
  return this.client.get(url);
}
addCategory(menuitem:any) {
  return this.client.post(this.addURL, menuitem);
}
updateCategory(menuitem: any ) {
  return this.client.put(`${this.putURL}/${menuitem.id}`, menuitem);
}
deleteCategory(id: any) {
  return this.client.delete(`${this.delurl}/${id}`);
}

}
