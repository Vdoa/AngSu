import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IUser } from './user';

@Injectable()
export class UserService {
    private _usersUrl = 'http://localhost:1337/user';

    constructor(private _http: Http) { }

    getUsers(): Observable<IUser[]> {
        return this._http.get(this._usersUrl)
            .map((response: Response) => <IUser[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getUser(id: number): Observable<IUser> {
        return this.getUsers()
            .map((users: IUser[]) => users.find(user => user.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
