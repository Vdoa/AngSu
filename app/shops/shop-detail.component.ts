import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IShop } from './shop';
import { ShopService } from './shop.service';

@Component({
    templateUrl: 'app/shops/shop-detail.component.html',
    directives: []
})
export class ShopDetailComponent implements OnInit {
    pageTitle: string = 'Shop Detail';
    shop: IShop;
    errorMessage: string;

    constructor(private _shopService: ShopService,
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.shop) {
            let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            this.getShop(id);
        }
    }

    getShop(id: number) {
        this._shopService.getShop(id)
            .subscribe(
            shop => this.shop = shop,
            error => this.errorMessage = <any>error);
    }
    
   onBack(): void {
        this._router.navigate(['Shops']);
    }

}
