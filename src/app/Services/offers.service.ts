import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private client:HttpClient) { }
  // url
 private offersURL = "https://localhost:44309/api/offers";

 GetAlloffers(){
  return this.client.get(this.offersURL);
 }
 GetofferbyID(id:any){
  return this.client.get(`${this.offersURL}/${id}`)
 }
 

}
