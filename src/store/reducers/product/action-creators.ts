import {IProduct} from "../../../models/IProduct";
import {ProductActionsEnum, SetProductsAction} from "./types";
import {AppDispatch} from "../../index";
import {AppActionCreators} from "../app/action-creators";
import ProductService from "../../../api/ProductService";

export const ProductActionCreators = {
    setProducts: (products: IProduct[]): SetProductsAction => ({
        type: ProductActionsEnum.SET_PRODUCTS,
        payload: products
    }),

    getProducts: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            const response = await ProductService.getProducts()
            dispatch(ProductActionCreators.setProducts(response.data as IProduct[]))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    }
}
