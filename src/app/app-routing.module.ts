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
import { UpdateItemsComponent } from './components/storeDashboardComponents/update-items/update-items.component';
import { DeleteItemsComponent } from './components/storeDashboardComponents/delete-items/delete-items.component';
import { PendingComponent } from './components/storeDashboardComponents/pending/pending.component';
import { MenuservedComponent } from './components/menuserved/menuserved.component';
import { CartComponent } from './components/cart/cart.component';
import { TryadditemComponent } from './components/tryadditem/tryadditem.component';
import { ShowitemsbyidComponent } from './components/storeDashboardComponents/showitemsbyid/showitemsbyid.component';
import { AddcategoryComponent } from './components/storeDashboardComponents/addcategory/addcategory.component';
import { UpdatecategoryComponent } from './components/storeDashboardComponents/updatecategory/updatecategory.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { OrderstatusComponent } from './components/orderstatus/orderstatus.component';
import { EditStorImgComponent } from './components/storeDashboardComponents/edit-stor-img/edit-stor-img.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pastry', component: CategoryComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'groceries', component: GroceriesComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'Partners', component: PartnersComponent },
  { path: 'offerlist', component: OfferlistComponent },
  { path: 'order/:id', component: OrderComponent },
  { path: 'menuserved', component: MenuservedComponent},
  { path: 'cart', component: CartComponent},
  { path: 'tryadditem', component: TryadditemComponent},

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
      // menuitems store
      { path: 'delete-items/:id', component: DeleteItemsComponent},
      { path: 'update-items/:id', component: UpdateItemsComponent},
      // category
      { path: 'showitemsbyid/:id', component: ShowitemsbyidComponent},
      { path: 'addcategory', component: AddcategoryComponent},
      { path: 'updatecategory/:id', component: UpdatecategoryComponent},
      // pending
      { path: 'pending', component: PendingComponent},
      {path:"storeImg" , component:EditStorImgComponent},




      

      
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'restauindivual/:id', component: RestauindivualComponent },
  { path: 'registercustomer', component: RegistercustomerComponent },
  {path:"pending" , component:PendingComponent},
  {path:"confirm-order" , component:ConfirmOrderComponent},
  {path:"orderstatus" , component:OrderstatusComponent},
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
