import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuitemsService {

  private Base_URL = "https://localhost:44309/api/MenuItem/getFoodServed";
  private Uurl = "https://localhost:44309/api/MenuItem/getById";
  private addURL = "https://localhost:44309/api/MenuItem/Post";
  private putURL = "https://localhost:44309/api/MenuItem/put";
  // private deleteURL ="https://localhost:44309/api/MenuItem";
  private delurl = "https://localhost:44309/api/MenuItem/delete";
  constructor(private client:HttpClient) { }


 GetAllmenuserved(){
  return this.client.get(this.Base_URL);
 }
 getMenuitemById(id:any) {
  const url = `${this.Uurl}/${id}`;
  return this.client.get(url);
}
addmenuitem(menuitem:any) {
  return this.client.post(this.addURL, menuitem);
}
updateMenuitem(menuitem: any ) {
  return this.client.put(`${this.putURL}/${menuitem.id}`, menuitem);
}

// updateMenuitem(id: any, updatedItem: any){
//   const url = `${this.putURL}/${id}`;
//   return this.client.put(url, updatedItem);
// }
deleteMenuitem(id: any) {
  return this.client.delete(`${this.delurl}/${id}`);
}

// addmenuitem(item: any): Observable<any> {
//   return this.client.post(this.addURL, item);
// }
// deleteMenuitem(id: any) {
  // const url = `${this.Uurl}/${id}`;   
//   return this.client.delete(url);
// }


}
