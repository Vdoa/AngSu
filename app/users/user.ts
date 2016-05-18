/* Defines the user entity */

import { ICar } from '../cars/car';
export interface IUser {
    cars:ICar[];
    firstName: string;
    lastName: string;
    birthDate: string;
    username: string;
    country: string;
    image: string;
    email: string;
    gender: string;
    id: number;
}