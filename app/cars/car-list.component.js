System.register(['angular2/core', 'angular2/router', './car-filter.pipe', './car.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, car_filter_pipe_1, car_service_1;
    var CarListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (car_filter_pipe_1_1) {
                car_filter_pipe_1 = car_filter_pipe_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            }],
        execute: function() {
            CarListComponent = (function () {
                function CarListComponent(_carService) {
                    this._carService = _carService;
                    this.pageTitle = 'Car List';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = true;
                    this.listFilter = '';
                }
                CarListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                CarListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._carService.getCars()
                        .subscribe(function (cars) { return _this.cars = cars; }, function (error) { return _this.errorMessage = error; });
                };
                CarListComponent.prototype.onRatingClicked = function (message) {
                    this.pageTitle = 'Product List: ' + message;
                };
                CarListComponent.prototype.getInt = function (stringNumber) {
                    return parseInt(stringNumber);
                };
                CarListComponent.prototype.getOwnerImage = function (carObject) {
                    if (carObject.ownerUser) {
                        return carObject.ownerUser.image;
                    }
                    else if (carObject.ownerShop) {
                        return carObject.ownerShop.logoUrl;
                    }
                    else {
                        return "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png";
                    }
                };
                CarListComponent.prototype.getOwnerName = function (carObject) {
                    if (carObject.ownerUser) {
                        return carObject.ownerUser.firstName;
                    }
                    else if (carObject.ownerShop) {
                        return carObject.ownerShop.name;
                    }
                    else {
                        return "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png";
                    }
                };
                CarListComponent.prototype.getOwner = function (carObject) {
                    if (carObject.ownerUser) {
                        return 'UserDetail';
                    }
                    else if (carObject.ownerShop) {
                        return 'ShopDetail';
                    }
                    else {
                        return "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png";
                    }
                };
                CarListComponent.prototype.getIDD = function (carObject) {
                    if (carObject.ownerUser) {
                        return carObject.ownerUser.id;
                    }
                    else if (carObject.ownerShop) {
                        return carObject.ownerShop.id;
                    }
                    else {
                        return "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png";
                    }
                };
                CarListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/cars/car-list.component.html',
                        styleUrls: ['app/cars/car-list.component.css'],
                        pipes: [car_filter_pipe_1.CarFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [car_service_1.CarService]
                    }), 
                    __metadata('design:paramtypes', [car_service_1.CarService])
                ], CarListComponent);
                return CarListComponent;
            }());
            exports_1("CarListComponent", CarListComponent);
        }
    }
});
//# sourceMappingURL=car-list.component.js.map