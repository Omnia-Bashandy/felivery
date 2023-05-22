import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategoryComponent } from './components/pastry/category.component';
import { OffersComponent } from './components/offers/offers.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { PartnersComponent } from './components/partners/partners.component';
import { HomeComponent } from './components/home/home.component';
import { StepsComponent } from './components/steps/steps.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { DataTablesModule } from "angular-datatables";
import { GroceriesComponent } from './components/groceries/groceries.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { RegestrationComponent } from './components/regestration/regestration.component';
import { ErrorComponent } from './components/error/error.component';
import { OfferslideComponent } from './components/offerslide/offerslide.component';
import { PopularofferComponent } from './components/popularoffer/popularoffer.component';
import { OfferlistComponent } from './components/offerlist/offerlist.component';
import { OrderComponent } from './components/order/order.component';
import { StoreDashboardComponent } from './components/store-dashboard/store-dashboard.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { DeleteStoreComponent } from './components/delete-store/delete-store.component';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { StoreNavBarComponent } from './components/store-nav-bar/store-nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RestauindivualComponent } from './components/restauindivual/restauindivual.component';
import { RegistercustomerComponent } from './components/registercustomer/registercustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    CategoryComponent,
    OffersComponent,
    RestaurantsComponent,
    PartnersComponent,
    HomeComponent,
    StepsComponent,
    LoadingComponent,
    GroceriesComponent,
    DashBoardComponent,
    RegestrationComponent,
    ErrorComponent,
    OfferslideComponent,
    PopularofferComponent,
    OfferlistComponent,
    OrderComponent,
    StoreDashboardComponent,
    EditStoreComponent,
    DeleteStoreComponent,
    AddItemsComponent,
    StoreNavBarComponent,
    LoginComponent,
    RestauindivualComponent,
    RegistercustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    FontAwesomeModule,
    DataTablesModule
    // NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
