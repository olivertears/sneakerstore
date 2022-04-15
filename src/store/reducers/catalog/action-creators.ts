import {
    CatalogActionsEnum,
    SetCatalogPageAction,
    SetFilterAction,
    SetLayoutAction,
    SetSearchAction,
    SetShowAmountAction,
    SetSortAction
} from "./types";
import {IFilter} from "../../../models/IFilter";


export const CatalogActionCreators = {
    setSort: (sort: string): SetSortAction => {
        localStorage.setItem('sort', JSON.stringify(sort))
        return {
            type: CatalogActionsEnum.SET_SORT,
            payload: sort
        }
    },
    setFilter: (filter: IFilter): SetFilterAction => {
        localStorage.setItem('filter', JSON.stringify(filter))
        return {
            type: CatalogActionsEnum.SET_FILTER,
            payload: filter
        }
    },
    setShowAmount: (showAmount: number): SetShowAmountAction => {
        localStorage.setItem('showAmount', JSON.stringify(showAmount))
        return {
            type: CatalogActionsEnum.SET_SHOW_AMOUNT,
            payload: showAmount
        }
    },
    setCatalogPage: (catalogPage: number): SetCatalogPageAction => {
        localStorage.setItem('catalogPage', JSON.stringify(catalogPage))
        return {
            type: CatalogActionsEnum.SET_CATALOG_PAGE,
            payload: catalogPage
        }
    },
    setLayout: (layout: string): SetLayoutAction => {
        localStorage.setItem('layout', JSON.stringify(layout))
        return {
            type: CatalogActionsEnum.SET_LAYOUT,
            payload: layout
        }
    },
    setSearch: (search: string): SetSearchAction => {
        localStorage.setItem('search', JSON.stringify(search))
        return {
            type: CatalogActionsEnum.SET_SEARCH,
            payload: search
        }
    },
}
