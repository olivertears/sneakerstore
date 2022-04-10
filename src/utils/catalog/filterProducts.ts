import {IProduct} from "../../models/IProduct";
import {IFilter} from "../../models/IFilter";

export const filterProducts = (products: IProduct[], filter: IFilter): IProduct[] => {
    if (Object.keys(filter).length === 0) return products

    let filteredProducts = filter.price ? products.filter(product => product.price >= filter.price[0] && product.price <= filter.price[1]) : products
    filteredProducts = filter.gender ? filteredProducts.filter(product => filter.gender.some(item => product.sex.split(' ').includes(item))) : filteredProducts
    filteredProducts = filter.brand ? filteredProducts.filter(product => filter.brand.some(item => product.brand.split(' ').includes(item))) : filteredProducts
    filteredProducts = filter.color ? filteredProducts.filter(product => filter.color.some(item => product.color.split(' ').includes(item))) : filteredProducts
    filteredProducts = filter.season ? filteredProducts.filter(product => filter.season.some(item => product.season.split(' ').includes(item))) : filteredProducts

     return filteredProducts
}
