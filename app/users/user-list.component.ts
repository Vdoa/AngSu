import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IUser } from './user';
import { UserFilterPipe } from './user-filter.pipe';
import { UserService } from './user.service';

@Component({
    templateUrl: 'app/users/user-list.component.html',
    styleUrls: ['app/users/user-list.component.css'],
    pipes: [UserFilterPipe],
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService] 
})
export class UserListComponent implements OnInit {
    pageTitle: string = 'User List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string = '';
    errorMessage: string;
    users: IUser[];

    constructor(private _userService: UserService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
           this._userService.getUsers()
                     .subscribe(
                       users => this.users = users,
                       error =>  this.errorMessage = <any>error);
    }

    

}
