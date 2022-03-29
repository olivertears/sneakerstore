import {OrderAction, OrderActionsEnum, OrderState} from "./types";
import {IOrder} from "../../../models/IOrder";

const initialState: OrderState = {
    orders: [] as IOrder[]
}

export default function OrderReducer(state = initialState, action: OrderAction): OrderState {
    switch (action.type) {
        case OrderActionsEnum.SET_ORDERS:
            return {...state.orders, orders: action.payload}
        case OrderActionsEnum.ADD_ORDER:
            return {...state.orders, orders: [...state.orders, action.payload]}
        case OrderActionsEnum.REMOVE_ORDER:
            return {...state.orders, orders: state.orders.filter(order => order.id === action.payload)}
        default:
            return state
    }
}