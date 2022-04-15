import {ProductAction, ProductActionsEnum, ProductState} from "./types";
import {IProduct} from "../../../models/IProduct";

const initialState: ProductState = {
    products: [] as IProduct[],
    selectedProduct: {} as IProduct,
    sort: 'Popularity',
    filter: {price: [59.99, 199.99], gender: [] as string[], season: [] as string[], color: [] as string[], brand: [] as string[]},
    showAmount: 12,
    catalogPage: 1,
    layout: 'grid',
    search: ''
}

export default function ProductReducer(state = initialState, action: ProductAction): ProductState {
    switch (action.type) {
        case ProductActionsEnum.SET_PRODUCTS:
            return {...state, products: action.payload}
        case ProductActionsEnum.ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]}
        case ProductActionsEnum.REMOVE_PRODUCT:
            return {...state, products: state.products.filter(product => product.id !== action.payload)}
        case ProductActionsEnum.SET_SELECTED_PRODUCT:
            return {...state, selectedProduct: action.payload}
        case ProductActionsEnum.SET_SORT:
            return {...state, sort: action.payload}
        case ProductActionsEnum.SET_FILTER:
            return {...state, filter: action.payload}
        case ProductActionsEnum.SET_SHOW_AMOUNT:
            return {...state, showAmount: action.payload}
        case ProductActionsEnum.SET_CATALOG_PAGE:
            return {...state, catalogPage: action.payload}
        case ProductActionsEnum.SET_LAYOUT:
            return {...state, layout: action.payload}
        case ProductActionsEnum.SET_SEARCH:
            return {...state, search: action.payload}
        default:
            return state
    }
}