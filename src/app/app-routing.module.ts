import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/pastry/category.component';
import { OffersComponent } from './components/offers/offers.component';
import { PartnersComponent } from './components/partners/partners.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { GroceriesComponent } from './components/groceries/groceries.component';
import { ErrorComponent } from './components/error/error.component';
import { OrderComponent } from './components/order/order.component';
import { OfferlistComponent } from './components/offerlist/offerlist.component';
import { LoginComponent } from './components/login/login.component';
import { RestauindivualComponent } from './components/restauindivual/restauindivual.component';
import { RegistercustomerComponent } from './components/registercustomer/registercustomer.component';
import { StoreDashboardComponent } from './components/storeDashboardComponents/store-dashboard/store-dashboard.component';
import { EditStoreComponent } from './components/storeDashboardComponents/edit-store/edit-store.component';
import { AddItemsComponent } from './components/storeDashboardComponents/add-items/add-items.component';
import { DeleteStoreComponent } from './components/storeDashboardComponents/delete-store/delete-store.component';
import { CategoriesComponent } from './components/storeDashboardComponents/categories/categories.component';
import { MenuitemsComponent } from './components/storeDashboardComponents/menuitems/menuitems.component';
import { StoreoffersComponent } from './components/storeDashboardComponents/storeoffers/storeoffers.component';
import { StoresettingComponent } from './components/storeDashboardComponents/storesetting/storesetting.component';
import { StorehomeComponent } from './components/storeDashboardComponents/storehome/storehome.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"pastry" , component:CategoryComponent},
  {path:"offers" , component:OffersComponent},
  {path:"groceries" , component:GroceriesComponent},
  {path:"restaurants" , component:RestaurantsComponent},
  {path:"Partners" , component:PartnersComponent},
  {path:"order" , component:OrderComponent},
  {path:"offerlist" , component:OfferlistComponent},
  {
    path: 'store-dashboard',
    component: StoreDashboardComponent,
    children: [
      { path: '', redirectTo: 'storehome', pathMatch: 'full' }, // Redirect to the default child route
      { path: 'storehome', component: StorehomeComponent },
      { path: 'edit-store', component: EditStoreComponent },
      { path: 'add-items', component: AddItemsComponent },
      { path: 'delete-store', component: DeleteStoreComponent },
      { path: 'categories', component: CategoriesComponent},
      { path: 'menuitems', component: MenuitemsComponent},
      { path: 'storeoffers', component: StoreoffersComponent},
      { path: 'storesetting', component: StoresettingComponent},
    ]
  },
  {path:"login" , component:LoginComponent},
  {path:"restauindivual" , component:RestauindivualComponent},
  {path:"registercustomer" , component:RegistercustomerComponent},
  {path:"**", component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
