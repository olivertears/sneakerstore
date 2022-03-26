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

    cardsIds?: string[],
    favouritesIds?: string[],
    commentsIds?: string[],
    inCartIds?: string[],
    ordersIds?: string[]
}