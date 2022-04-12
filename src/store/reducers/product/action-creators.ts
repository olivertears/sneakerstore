import {IProduct} from "../../../models/IProduct";
import {
    ProductActionsEnum,
    SetCatalogPageAction,
    SetFilterAction, SetLayoutAction,
    SetProductsAction, SetSearchAction,
    SetShowAmountAction,
    SetSortAction
} from "./types";
import {AppDispatch} from "../../index";
import {AppActionCreators} from "../app/action-creators";
import ProductService from "../../../api/ProductService";
import {IFilter} from "../../../models/IFilter";
import {sortProducts} from "../../../utils/catalog/sortProducts";
import {filterProducts} from "../../../utils/catalog/filterProducts";
import {searchProducts} from "../../../utils/catalog/searchProducts";


export const ProductActionCreators = {
    setProducts: (products: IProduct[]): SetProductsAction => ({
        type: ProductActionsEnum.SET_PRODUCTS,
        payload: products
    }),
    setSort: (sort: string): SetSortAction => {
        localStorage.setItem('sort', JSON.stringify(sort))
        return {
            type: ProductActionsEnum.SET_SORT,
            payload: sort
        }
    },
    setFilter: (filter: IFilter): SetFilterAction => {
        localStorage.setItem('filter', JSON.stringify(filter))
        return {
            type: ProductActionsEnum.SET_FILTER,
            payload: filter
        }
    },
    setShowAmount: (showAmount: number): SetShowAmountAction => {
        localStorage.setItem('showAmount', JSON.stringify(showAmount))
        return {
            type: ProductActionsEnum.SET_SHOW_AMOUNT,
            payload: showAmount
        }
    },
    setCatalogPage: (catalogPage: number): SetCatalogPageAction => {
        localStorage.setItem('catalogPage', JSON.stringify(catalogPage))
        return {
            type: ProductActionsEnum.SET_CATALOG_PAGE,
            payload: catalogPage
        }
    },
    setLayout: (layout: string): SetLayoutAction => {
        localStorage.setItem('layout', JSON.stringify(layout))
        return {
            type: ProductActionsEnum.SET_LAYOUT,
            payload: layout
        }
    },
    setSearch: (search: string): SetSearchAction => {
        localStorage.setItem('search', JSON.stringify(search))
        return {
            type: ProductActionsEnum.SET_SEARCH,
            payload: search
        }
    },

    getProducts: (search: string, sort: string, filter: IFilter, exchangeRate: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setCatalogLoader(true))
            const response = await ProductService.getProducts()
            dispatch(ProductActionCreators.setProducts(filterProducts(sortProducts(searchProducts(response.data as IProduct[], search), sort), filter, exchangeRate)))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setCatalogLoader(false))
        }
    }
}
