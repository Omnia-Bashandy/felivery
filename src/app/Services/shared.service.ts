import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private id: string | null = null;
  private name: string | null = null;

  setId(id: string): void {
    this.id = id;
  }

  getId(): string | null {
    return this.id;
  }
  setName(name: string): void {
    this.name = name;
  }

  geName(): string | null {
    return this.name;
  }
}
