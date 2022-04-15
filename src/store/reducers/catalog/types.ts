import {IFilter} from "../../../models/IFilter";

export interface CatalogState {
    sort: string
    filter: IFilter
    showAmount: number
    catalogPage: number
    layout: string
    search: string
}

export enum CatalogActionsEnum {
    SET_SORT = 'SET_SORT',
    SET_FILTER = 'SET_FILTER',
    SET_SHOW_AMOUNT = 'SET_SHOW_AMOUNT',
    SET_CATALOG_PAGE = 'SET_CATALOG_PAGE',
    SET_LAYOUT = 'SET_LAYOUT',
    SET_SEARCH = 'SET_SEARCH'
}


export interface SetSortAction {
    type: CatalogActionsEnum.SET_SORT,
    payload: string
}

export interface SetFilterAction {
    type: CatalogActionsEnum.SET_FILTER,
    payload: IFilter
}

export interface SetShowAmountAction {
    type: CatalogActionsEnum.SET_SHOW_AMOUNT,
    payload: number
}

export interface SetCatalogPageAction {
    type: CatalogActionsEnum.SET_CATALOG_PAGE,
    payload: number
}

export interface SetLayoutAction {
    type: CatalogActionsEnum.SET_LAYOUT,
    payload: string
}

export interface SetSearchAction {
    type: CatalogActionsEnum.SET_SEARCH,
    payload: string
}

export type CatalogAction =
    SetSortAction |
    SetFilterAction |
    SetShowAmountAction |
    SetCatalogPageAction |
    SetLayoutAction |
    SetSearchAction