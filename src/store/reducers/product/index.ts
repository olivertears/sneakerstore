import {ProductAction, ProductActionsEnum, ProductState} from "./types";
import {IProduct} from "../../../models/IProduct";
import {ISize} from "../../../models/ISize";

const initialState: ProductState = {
    products: [] as IProduct[],
    selectedProduct: {} as IProduct,
    sizes: [] as ISize[],
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
        case ProductActionsEnum.SET_SIZES:
            return {...state, sizes: action.payload}
        case ProductActionsEnum.ADD_SIZE:
            return {...state, sizes: [...state.sizes, action.payload]}
        default:
            return state
    }
}