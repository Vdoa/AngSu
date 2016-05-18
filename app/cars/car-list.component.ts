import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { ICar } from './car';
import { CarFilterPipe } from './car-filter.pipe';
import { CarService } from './car.service';
import { IUser } from '../users/user';
import { IShop } from '../shops/shop';
import { ShopService } from '../shops/shop.service';
import { UserService } from '../users/user.service';
@Component({
    templateUrl: 'app/cars/car-list.component.html',
    styleUrls: ['app/cars/car-list.component.css'],
    pipes: [CarFilterPipe],
    directives: [ROUTER_DIRECTIVES],
    providers: [CarService] 
})
export class CarListComponent implements OnInit {
    pageTitle: string = 'Car List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string = '';
    errorMessage: string;
    cars: ICar[];
    users: IUser[];
    shops: IShop[];

    constructor(private _carService: CarService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
           this._carService.getCars()
                     .subscribe(
                       cars => this.cars = cars,
                       error =>  this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    getInt(stringNumber: string){
        return parseInt(stringNumber);
    }

    getOwnerImage(carObject: ICar){
        if(carObject.ownerUser){
            return carObject.ownerUser.image;
        }
        else if(carObject.ownerShop){
             return carObject.ownerShop.logoUrl;
        }
        else{
            return "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png";
        }
    }
    getOwnerName(carObject: ICar){
        if(carObject.ownerUser){
            return carObject.ownerUser.firstName;
        }
        else if(carObject.ownerShop){
             return carObject.ownerShop.name;
        }
        else{
            return "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png";
        }
    }
      getOwner(carObject: ICar){
        if(carObject.ownerUser){
            return 'UserDetail';
        }
        else if(carObject.ownerShop){
             return 'ShopDetail';
        }
        else{
            return "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png";
        }
    }
         getIDD(carObject: ICar){
        if(carObject.ownerUser){
            return carObject.ownerUser.id;
        }
        else if(carObject.ownerShop){
              return carObject.ownerShop.id;
        }
        else{
            return "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png";
        }
    }
}
