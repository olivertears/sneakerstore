import {ICard} from "./ICard";

export interface ICustomer {
    id: string,
    password?: string,
    role?: string,

    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    country: string,

    city?: string,
    address?: string,
    avatar?: string,
    cards?: string[],

    favourites?: string[], // [favouriteProductId: string]
    cart?: string[], // [cartProductId: string]
}