import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IShop } from './shop';
import { ShopFilterPipe } from './shop-filter.pipe';
import { ShopService } from './shop.service';

@Component({
    templateUrl: 'app/shops/shop-list.component.html',
    styleUrls: ['app/shops/shop-list.component.css'],
    pipes: [ShopFilterPipe],
    directives: [ROUTER_DIRECTIVES],
    providers: [ShopService] 
})
export class ShopListComponent implements OnInit {
    pageTitle: string = 'Shop List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string = '';
    errorMessage: string;
    shops: IShop[];

    constructor(private _shopService: ShopService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
           this._shopService.getShops()
                     .subscribe(
                       shops => this.shops = shops,
                       error =>  this.errorMessage = <any>error);
    }


}
