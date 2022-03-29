import {ProductAction, ProductActionsEnum, ProductState} from "./types";
import {IProduct} from "../../../models/IProduct";

const initialState: ProductState = {
    products: [] as IProduct[]
}

export default function ProductReducer(state = initialState, action: ProductAction): ProductState {
    switch (action.type) {
        case ProductActionsEnum.SET_PRODUCTS:
            return {...state, products: action.payload}
        default:
            return state
    }
}