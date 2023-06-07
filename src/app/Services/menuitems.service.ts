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
  private delurl = "https://localhost:44309/api/MenuItem/delete";
  private imgUrl = "https://localhost:44309/api/MenuItem/UploadImage/uploadImage"


  uploadImg(img:any ,storeId:any , itemname :any){
    return this.client.post(`${this.imgUrl}/${storeId}/${itemname}`,img);
  }

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
  return this.client.put(`${this.putURL}`, menuitem);
}
deleteMenuitem(id: any) {
  return this.client.delete(`${this.delurl}/${id}`);
}


}
