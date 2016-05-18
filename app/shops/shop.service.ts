import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IShop } from './shop';

@Injectable()
export class ShopService {
    private _shopsUrl = 'http://localhost:1337/shop';

    constructor(private _http: Http) { }

    getShops(): Observable<IShop[]> {
        return this._http.get(this._shopsUrl)
            .map((response: Response) => <IShop[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getShop(id: number): Observable<IShop> {
        return this.getShops()
            .map((shops: IShop[]) => shops.find(shop => shop.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
