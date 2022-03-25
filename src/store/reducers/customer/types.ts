import {ICustomer} from "../../../models/ICustomer";
import {ILogin} from "../../../models/ILogin";

export interface CustomerState {
    auth: boolean,
    loginData: ILogin,
    customer: ICustomer,
}

export enum CustomerActionsEnum {
    SET_AUTH = 'SET_AUTH',
    SET_LOGIN_DATA = 'SET_LOGIN_DATA',
    SET_CUSTOMER = 'SET_CUSTOMER',
}

export interface SetAuthAction {
    type: CustomerActionsEnum.SET_AUTH,
    payload: boolean
}

export interface SetLoginDataAction {
    type: CustomerActionsEnum.SET_LOGIN_DATA,
    payload: ILogin
}

export interface SetCustomerAction {
    type: CustomerActionsEnum.SET_CUSTOMER,
    payload: ICustomer
}

export type CustomerAction = SetAuthAction | SetLoginDataAction | SetCustomerAction