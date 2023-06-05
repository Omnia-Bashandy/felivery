import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  //crud operation for store 

  constructor(private myClient: HttpClient) { }
  private Base_URL = "https://localhost:44309/api/Store";
  private Base_URLReg = "https://localhost:44309/api/Store/Registration";
  private ItemsbyID ="https://localhost:44309/api/Store/StoreMenu";
  private totalEarningsURL ="https://localhost:44309/api/Store/TotalEarnings";
  
  private img_url = "https://localhost:44309/api/Store/uploadImage";
  //uploadImg(img:any , name:any){
    //return this.myClient.post(this.img_url,img ,name);
  //}
  uploadImg(img:any ,storeName:any){
    return this.myClient.post(`${this.img_url}/${storeName}`,img);
  }

  getAllRestaurants() {
    return this.myClient.get(this.Base_URL);
  }

  getRestaurantById(id: any) {
    return this.myClient.get(`${this.Base_URL}/${id}`);
  }

  updateRestaurant(Restaurant: any ) {
    return this.myClient.put(`${this.Base_URL}`, Restaurant);
  }

  deleteRestaurant(id: any) {
    return this.myClient.delete(`${this.Base_URL}/${id}`);
  }

  addRestaurant(Restaurant: any ) {
    return this.myClient.post(this.Base_URLReg,Restaurant );
  }

  getItemsbyRestID(id:any){
    return this.myClient.get(`${this.ItemsbyID}/${id}`);
  }

  gettotalbyID(id:any){
    return this.myClient.get(`${this.totalEarningsURL}/${id}`);
  }

}
