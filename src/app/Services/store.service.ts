import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

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
  private rate_url = "https://localhost:44309/api/Store/SetRating";
  
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

  SetRate(id:any,rate:any){
    return this.myClient.put(`${this.rate_url}/${id}/${rate}`,"");
  }
  
  private _listeners = new Subject<any>();
  listen(): Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy:string){
    this._listeners.next(filterBy);
  }

}
