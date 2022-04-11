import {IProduct} from "../../models/IProduct";
import {IFilter} from "../../models/IFilter";
import {setNicePrice} from "../setNicePrice";

export const filterProducts = (products: IProduct[], filter: IFilter, exchangeRate: number): IProduct[] => {
    if (Object.keys(filter).length === 0) return products

    let filteredProducts = filter.price ? products.filter(product => setNicePrice(product.price * exchangeRate) >= filter.price[0] && setNicePrice(product.price * exchangeRate) <= filter.price[1]) : products
    filteredProducts = filter.gender.length ? filteredProducts.filter(product => filter.gender.some(item => product.sex.split(' ').includes(item))) : filteredProducts
    filteredProducts = filter.brand.length ? filteredProducts.filter(product => filter.brand.some(item => product.brand.split(' ').includes(item))) : filteredProducts
    filteredProducts = filter.color.length ? filteredProducts.filter(product => filter.color.some(item => product.color.split(' ').includes(item))) : filteredProducts
    filteredProducts = filter.season.length ? filteredProducts.filter(product => filter.season.some(item => product.season.split(' ').includes(item))) : filteredProducts

     return filteredProducts
}
