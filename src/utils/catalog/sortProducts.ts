import {IProduct} from "../../models/IProduct";

export const sortProducts = (products: IProduct[], sort: string): IProduct[] => {
    switch (sort) {
        case 'Popularity':
            return products.sort((a,b) => (a.orderedAmount > b.orderedAmount) ? 1 : ((b.orderedAmount > a.orderedAmount) ? -1 : 0))
        case 'Rating':
            return products.sort((a,b) => (a.averageRate > b.averageRate) ? 1 : ((b.averageRate > a.averageRate) ? -1 : 0))
        case 'Price ↑':
            return products.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        case 'Price ↓':
            return products.sort((a,b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0))
        default:
            return products
    }
}