import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  Restaurants: { name: string; description: string; image: string; }[] = [
    { name: "Burgers", description: "This is a restaurant",  image: "assets/Burger.jpg"},
    { name: "Healthy", description: "This is a res",  image: "assets/Healthy.jpg"},
    { name: "Pizza", description: "This is a restaurant with a long discrition and name",  image: "assets/Pizza.jpg"},
    { name: "Pizza", description: "This is another restaurant",  image: "assets/Pizza.jpg"},
    { name: "Healthy", description: "This is another res",  image: "assets/Healthy.jpg"},
    { name: "Burgers", description: "This is another restaurant with another long discrition and another long name",  image: "assets/Burger.jpg"},
    { name: "Burgers", description: "This is a restaurant",  image: "assets/Burger.jpg"},
    { name: "Healthy", description: "This is a res",  image: "assets/Healthy.jpg"},
    { name: "Pizza", description: "This is a restaurant with a long discrition and name",  image: "assets/Pizza.jpg"},
    { name: "Burgers", description: "This is another restaurant",  image: "assets/Pizza.jpg"},
    { name: "Healthy", description: "This is another res",  image: "assets/Healthy.jpg"},
    { name: "Pizza", description: "This is another restaurant with a veeeery long discrition and another long name",  image: "assets/Burger.jpg"}
  ];
}
