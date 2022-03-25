import {ICard} from "./ICard";

export interface ICustomer {
    id: string,

    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    country: string,

    role?: string,
    city?: string,
    address?: string,
    avatar?: string,

    cardIds?: string[],
    favouriteIds?: string[],
    commentIds?: string[],
    cartIds?: string[],
    orderIds?: string[]
}