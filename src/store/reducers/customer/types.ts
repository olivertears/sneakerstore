import {ICustomer} from "../../../models/ICustomer";

export interface CustomerState {
    auth: boolean,
    customer: ICustomer,
}

export enum CustomerActionsEnum {
    SET_AUTH = 'SET_AUTH',
    SET_CUSTOMER = 'SET_CUSTOMER',
}

export interface SetAuthAction {
    type: CustomerActionsEnum.SET_AUTH,
    payload: boolean
}

export interface SetCustomerAction {
    type: CustomerActionsEnum.SET_CUSTOMER,
    payload: ICustomer
}

export type CustomerAction = SetAuthAction | SetCustomerAction