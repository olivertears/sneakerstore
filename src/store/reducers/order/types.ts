import {IOrder} from "../../../models/IOrder";

export interface OrderState {
    orders: IOrder[]
}

export enum OrderActionsEnum {
    SET_ORDERS = 'SET_ORDERS',
    ADD_ORDER = 'ADD_ORDER',
    REMOVE_ORDER = 'REMOVE_ORDER'
}

export interface SetOrdersAction {
    type: OrderActionsEnum.SET_ORDERS,
    payload: IOrder[]
}

export interface AddOrderAction {
    type: OrderActionsEnum.ADD_ORDER,
    payload: IOrder
}

export interface RemoveOrderAction {
    type: OrderActionsEnum.REMOVE_ORDER,
    payload: string
}

export type OrderAction = SetOrdersAction | AddOrderAction | RemoveOrderAction