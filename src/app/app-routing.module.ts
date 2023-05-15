import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/pastry/category.component';
import { OffersComponent } from './components/offers/offers.component';
import { PartnersComponent } from './components/partners/partners.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { GroceriesComponent } from './components/groceries/groceries.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"pastry" , component:CategoryComponent},
  {path:"offers" , component:OffersComponent},
  {path:"groceries" , component:GroceriesComponent},
  {path:"restaurants" , component:RestaurantsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
