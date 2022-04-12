import {IProduct} from "../../models/IProduct";

export const searchProducts = (products: IProduct[], search: string): IProduct[] => {
    return products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
}