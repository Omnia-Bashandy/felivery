import { Component } from '@angular/core';

@Component({
  selector: 'app-storeoffers',
  templateUrl: './storeoffers.component.html',
  styleUrls: ['./storeoffers.component.css']
})
export class StoreoffersComponent {
  Restaurants: { name: string; description: string; image: string; }[] = [
    { name: "Restaurant 1", description: "This is a restaurant",  image: "assets/Burger.jpg"},
    { name: "Res 2", description: "This is a res",  image: "assets/Healthy.jpg"},
    { name: "A Long Restaurant Name 3", description: "This is a restaurant with a long discrition and name",  image: "assets/Pizza.jpg"},
    { name: "Restaurant 4", description: "This is another restaurant",  image: "assets/Pizza.jpg"},
    { name: "Res 5", description: "This is another res",  image: "assets/Healthy.jpg"},
    { name: "A Very Long Restaurant Name 6", description: "This is another restaurant with another long discrition and another long name",  image: "assets/Burger.jpg"},
    { name: "Restaurant 7", description: "This is a restaurant",  image: "assets/Burger.jpg"},
    { name: "Res 8", description: "This is a res",  image: "assets/Healthy.jpg"},
    { name: "A Loooooong Restaurant Name 9", description: "This is a restaurant with a long discrition and name",  image: "assets/Pizza.jpg"},
    { name: "Restaurant 10", description: "This is another restaurant",  image: "assets/Pizza.jpg"},
    { name: "Res 11", description: "This is another res",  image: "assets/Healthy.jpg"},
    { name: "A Long Restaurant Name 12", description: "This is another restaurant with a veeeery long discrition and another long name",  image: "assets/Burger.jpg"}
  ];
}
