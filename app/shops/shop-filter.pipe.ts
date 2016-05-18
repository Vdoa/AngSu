import {  PipeTransform, Pipe } from 'angular2/core';
import { IShop } from './shop';

@Pipe({
    name: 'shopFilter'
})
export class ShopFilterPipe implements PipeTransform {

    transform(value: IShop[], args: string[]): IShop[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((shop: IShop) =>
            shop.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}

