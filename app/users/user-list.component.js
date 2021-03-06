System.register(['angular2/core', 'angular2/router', './user-filter.pipe', './user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, user_filter_pipe_1, user_service_1;
    var UserListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_filter_pipe_1_1) {
                user_filter_pipe_1 = user_filter_pipe_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserListComponent = (function () {
                function UserListComponent(_userService) {
                    this._userService = _userService;
                    this.pageTitle = 'User List';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = true;
                    this.listFilter = '';
                }
                UserListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                UserListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
                };
                UserListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/users/user-list.component.html',
                        styleUrls: ['app/users/user-list.component.css'],
                        pipes: [user_filter_pipe_1.UserFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserListComponent);
                return UserListComponent;
            }());
            exports_1("UserListComponent", UserListComponent);
        }
    }
});
//# sourceMappingURL=user-list.component.js.map