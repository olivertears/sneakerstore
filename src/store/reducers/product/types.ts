import {IProduct} from "../../../models/IProduct";
import {ISize} from "../../../models/ISize";

export interface ProductState {
    products: IProduct[]
    selectedProduct: IProduct,
    sizes: ISize[]
}

export enum ProductActionsEnum {
    SET_PRODUCTS = 'SET_PRODUCTS',
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
    SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT',
    SET_SIZES = 'SET_SIZES',
}

export interface SetProductsAction {
    type: ProductActionsEnum.SET_PRODUCTS,
    payload: IProduct[]
}

export interface AddProductAction {
    type: ProductActionsEnum.ADD_PRODUCT,
    payload: IProduct
}

export interface RemoveProductAction {
    type: ProductActionsEnum.REMOVE_PRODUCT,
    payload: string
}

export interface SetSelectedProductAction {
    type: ProductActionsEnum.SET_SELECTED_PRODUCT
    payload: IProduct
}

export interface SetSizesAction {
    type: ProductActionsEnum.SET_SIZES
    payload: ISize[]
}

export type ProductAction =
    SetProductsAction |
    AddProductAction |
    RemoveProductAction |
    SetSelectedProductAction |
    SetSizesAction