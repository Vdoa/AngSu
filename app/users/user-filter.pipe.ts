import {  PipeTransform, Pipe } from 'angular2/core';
import { IUser } from './user';

@Pipe({
    name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

    transform(value: IUser[], args: string[]): IUser[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((user: IUser) =>
            user.firstName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}

