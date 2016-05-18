import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { ProductListComponent } from './products/product-list.component';
import { CarListComponent } from './cars/car-list.component';
import { ShopListComponent } from './shops/shop-list.component';
import { ProductService } from './products/product.service';
import { CarService } from './cars/car.service';
import { UserService } from './users/user.service';
import { ShopService } from './shops/shop.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { CarDetailComponent } from './cars/car-detail.component';
import { UserDetailComponent } from './users/user-detail.component';
import { ShopDetailComponent } from './shops/shop-detail.component';
import { UserListComponent } from './users/user-list.component';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['Products']">Product List</a></li>
                    <li><a [routerLink]="['Cars']">Car List</a></li>
                    <li><a [routerLink]="['Shops']">Shop List</a></li>
                    <li><a [routerLink]="['Users']">User List</a></li>
                    
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService,CarService,UserService,ShopService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/products', name: 'Products', component: ProductListComponent},
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent },
    { path: '/cars', name: 'Cars', component: CarListComponent },
    { path: '/shops', name: 'Shops', component: ShopListComponent },
    { path: '/users', name: 'Users', component: UserListComponent },
    { path: '/car/:id', name: 'CarDetail', component: CarDetailComponent },
    { path: '/shop/:id', name: 'ShopDetail', component: ShopDetailComponent },
    { path: '/user/:id', name: 'UserDetail', component: UserDetailComponent },
])
export class AppComponent {
    pageTitle: string = 'Product Management';
}
