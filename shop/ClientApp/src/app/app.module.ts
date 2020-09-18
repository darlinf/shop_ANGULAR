import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './shop/nav-menu/nav-menu.component';
import { StoreComponent } from './shop/store/store.component';
import { LoginComponent } from './authentication/login/login.component';
import { MenuAdminComponent } from './adminComponents/menu-admin/menu-admin.component';
import { MenuUserComponent } from './userComponents/menu-user/menu-user.component';
import { DashboardComponent } from './adminComponents/dashboard/dashboard.component';
import { CategoriesComponent } from './adminComponents/categories/categories.component';
import { ProductsComponent } from './adminComponents/products/products.component';
import { CustomerListComponent } from './adminComponents/customer-list/customer-list.component';
import { SalesComponent } from './adminComponents/sales/sales.component';
import { SettingsComponent } from './adminComponents/settingAdmin/settings.component';
import { DashboardComponentUser } from './userComponents/dashboard/dashboard-user.component';
import { OrderComponent } from './userComponents/order/order.component';
import { OrderListComponent } from './userComponents/order-list/order-list.component';
import { NewSalesComponent } from './adminComponents/new-sales/new-sales.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { NewProductComponent } from './adminComponents/new-product/new-product.component';
import { ExploreStoreComponent } from './shop/explore-store/explore-store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorComponent } from './shop/paginator/paginator.component';
import { CharFirstUppercasePipe } from './pipes/char-first-uppercase.pipe';
import { StringReducePipe } from './pipes/string-reduce.pipe';
import { RegisterComponent } from './authentication/register/register.component';
import { IsNullPipe } from './pipes/is-null.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CanDeactivateGuard } from './helpers/can-deactivate.guard';
import { NewCategoryComponent } from './adminComponents/new-category/new-category.component';
import { EditCactegoryComponent } from './adminComponents/edit-cactegory/edit-cactegory.component';
import { PaginatePipe } from './pipes/paginate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    StoreComponent,
    LoginComponent,
    MenuAdminComponent,
    MenuUserComponent,
    DashboardComponent,
    CategoriesComponent,
    ProductsComponent,
    CustomerListComponent,
    SalesComponent,
    SettingsComponent,
    DashboardComponentUser,
    OrderComponent,
    OrderListComponent,
    NewSalesComponent,
    CheckoutComponent,
    NewProductComponent,
    ExploreStoreComponent,
    PaginatorComponent,
    CharFirstUppercasePipe,
    StringReducePipe,
    RegisterComponent,
    IsNullPipe,
    SearchPipe,
    NewCategoryComponent,
    EditCactegoryComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: StoreComponent, pathMatch: 'full' },
      { path: 'store', component: StoreComponent},
      { path: 'login', component: LoginComponent},
      { path: 'Checkout', component: CheckoutComponent, canDeactivate: [CanDeactivateGuard]},
      { path: "register", component: RegisterComponent },

      //Admin routes
      { path: 'Dashboard', component: DashboardComponent},
      { path: 'Categories', component: CategoriesComponent},
      { path: 'Products', component: ProductsComponent},
      { path: 'CustomerList', component: CustomerListComponent},
      { path: 'Sales', component: SalesComponent},
      { path: 'Settings', component: SettingsComponent},
      { path: 'NewSales', component: NewSalesComponent},
      { path: 'NewProduct', component: NewProductComponent},
      { path: 'NewCategory', component: NewCategoryComponent},

      //User routes
      { path: 'DashboardUser', component: DashboardComponentUser},
      { path: 'Order', component: OrderComponent},
      { path: 'OrderList', component: OrderListComponent},

    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
