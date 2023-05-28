import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private id: string | null = null;
  private custId: string | null = null;
  private name: string | null = null;

  setId(id: string): void {
    localStorage.setItem("storeId",id)
    // this.id = id;
  }

  getId(): string | null {
    return localStorage.getItem("storeId")
    // return this.id;
  }

  setCustId(id: string): void {
    localStorage.setItem("custId",id)
    // this.id = id;
  }

  getCustId(): string | null {
    return localStorage.getItem("custId")
    // return this.id;
  }

  setName(name: string): void {
    this.name = name;
  }

  geName(): string | null {
    return this.name;
  }


}
