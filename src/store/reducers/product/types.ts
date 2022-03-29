import {IProduct} from "../../../models/IProduct";

export interface ProductState {
    products: IProduct[]
}

export enum ProductActionsEnum {
    SET_PRODUCTS = '',
}

export interface SetProductsAction {
    type: ProductActionsEnum.SET_PRODUCTS,
    payload: IProduct[]
}

export type ProductAction = SetProductsAction