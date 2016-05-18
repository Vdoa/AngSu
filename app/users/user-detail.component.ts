import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IUser } from './user';
import { UserService } from './user.service';

@Component({
    templateUrl: 'app/users/user-detail.component.html',
    directives: []
})
export class UserDetailComponent implements OnInit {
    pageTitle: string = 'User Detail';
    user: IUser;
    errorMessage: string;

    constructor(private _userService: UserService,
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.user) {
            let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            this.getUser(id);
        }
    }

    getUser(id: number) {
        this._userService.getUser(id)
            .subscribe(
            user => this.user = user,
            error => this.errorMessage = <any>error);
    }
    
    getInt(stringNumber: string){
        return parseInt(stringNumber);
    }

    onBack(): void {
        this._router.navigate(['Users']);
    }

}
