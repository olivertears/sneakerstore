import {IProduct} from "../../models/IProduct";

export const sliceProducts = (products: IProduct[], showAmount: number, catalogPage: number): IProduct[] => {
    return products.slice(showAmount * (catalogPage - 1), showAmount * catalogPage)
}