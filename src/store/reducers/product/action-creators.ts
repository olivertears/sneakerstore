import {IProduct} from "../../../models/IProduct";
import {
    AddProductAction, AddSizeAction,
    ProductActionsEnum, RemoveProductAction,
    SetProductsAction,
    SetSelectedProductAction, SetSizesAction,
} from "./types";
import {AppDispatch} from "../../index";
import {AppActionCreators} from "../app/action-creators";
import ProductService from "../../../api/ProductService";
import {IFilter} from "../../../models/IFilter";
import {sortProducts} from "../../../utils/catalog/sortProducts";
import {filterProducts} from "../../../utils/catalog/filterProducts";
import {searchProducts} from "../../../utils/catalog/searchProducts";
import {ISize} from "../../../models/ISize";


export const ProductActionCreators = {
    setProducts: (products: IProduct[]): SetProductsAction => ({
        type: ProductActionsEnum.SET_PRODUCTS,
        payload: products
    }),
    addProduct: (product: IProduct): AddProductAction => ({
        type: ProductActionsEnum.ADD_PRODUCT,
        payload: product
    }),
    removeProduct: (productId: string): RemoveProductAction => ({
        type: ProductActionsEnum.REMOVE_PRODUCT,
        payload: productId
    }),
    setSelectedProduct: (selectedProduct: IProduct): SetSelectedProductAction => {
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct))
        return {
            type: ProductActionsEnum.SET_SELECTED_PRODUCT,
            payload: selectedProduct
        }
    },
    setSizes: (sizes: ISize[]): SetSizesAction => {
       localStorage.setItem('sizes', JSON.stringify(sizes))
       return  {
           type: ProductActionsEnum.SET_SIZES,
           payload: sizes
       }
    },
    addSize: (size: ISize): AddSizeAction => ({
        type: ProductActionsEnum.ADD_SIZE,
        payload: size
    }),

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
    },
    getProduct: (productId: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            const response = await ProductService.getProduct(productId)
            dispatch(ProductActionCreators.addProduct(response.data as IProduct))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    getSizes: (productId: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            const response = await ProductService.getSizes(productId)
            dispatch(ProductActionCreators.setSizes(response.data as ISize[]))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    getSize: (sizeId: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await ProductService.getSize(sizeId)
            dispatch(ProductActionCreators.addSize(response.data as ISize))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        }
    },
}
