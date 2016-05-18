System.register(['angular2/core', 'angular2/router', './shop-filter.pipe', './shop.service'], function(exports_1, context_1) {
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
    var core_1, router_1, shop_filter_pipe_1, shop_service_1;
    var ShopListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (shop_filter_pipe_1_1) {
                shop_filter_pipe_1 = shop_filter_pipe_1_1;
            },
            function (shop_service_1_1) {
                shop_service_1 = shop_service_1_1;
            }],
        execute: function() {
            ShopListComponent = (function () {
                function ShopListComponent(_shopService) {
                    this._shopService = _shopService;
                    this.pageTitle = 'Shop List';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = true;
                    this.listFilter = '';
                }
                ShopListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                ShopListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._shopService.getShops()
                        .subscribe(function (shops) { return _this.shops = shops; }, function (error) { return _this.errorMessage = error; });
                };
                ShopListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/shops/shop-list.component.html',
                        styleUrls: ['app/shops/shop-list.component.css'],
                        pipes: [shop_filter_pipe_1.ShopFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [shop_service_1.ShopService]
                    }), 
                    __metadata('design:paramtypes', [shop_service_1.ShopService])
                ], ShopListComponent);
                return ShopListComponent;
            }());
            exports_1("ShopListComponent", ShopListComponent);
        }
    }
});
//# sourceMappingURL=shop-list.component.js.map