import {IProduct} from "../../../models/IProduct";
import {IFilter} from "../../../models/IFilter";

export interface ProductState {
    products: IProduct[]
    sort: string
    filter: IFilter
    showAmount: number
    catalogPage: number
    layout: string
}

export enum ProductActionsEnum {
    SET_PRODUCTS = 'SET_PRODUCTS',
    SET_SORT = 'SET_SORT',
    SET_FILTER = 'SET_FILTER',
    SET_SHOW_AMOUNT = 'SET_SHOW_AMOUNT',
    SET_CATALOG_PAGE = 'SET_CATALOG_PAGE',
    SET_LAYOUT = 'SET_LAYOUT',
}

export interface SetProductsAction {
    type: ProductActionsEnum.SET_PRODUCTS,
    payload: IProduct[]
}

export interface SetSortAction {
    type: ProductActionsEnum.SET_SORT,
    payload: string
}

export interface SetFilterAction {
    type: ProductActionsEnum.SET_FILTER,
    payload: IFilter
}

export interface SetShowAmountAction {
    type: ProductActionsEnum.SET_SHOW_AMOUNT,
    payload: number
}

export interface SetCatalogPageAction {
    type: ProductActionsEnum.SET_CATALOG_PAGE,
    payload: number
}

export interface SetLayoutAction {
    type: ProductActionsEnum.SET_LAYOUT,
    payload: string
}

export type ProductAction =
    SetProductsAction |
    SetSortAction |
    SetFilterAction |
    SetShowAmountAction |
    SetCatalogPageAction |
    SetLayoutAction