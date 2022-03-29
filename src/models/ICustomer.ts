export interface ICustomer {
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,

    avatar?: string,
    role?: string,

    addressesIds?: string[],
    cardsIds?: string[],
    favouritesIds?: string[],
    commentsIds?: string[],
    inCartIds?: string[],
    ordersIds?: string[]
}