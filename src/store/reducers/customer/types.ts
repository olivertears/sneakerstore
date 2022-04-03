import {ICustomer} from "../../../models/ICustomer";
import {ILogin} from "../../../models/ILogin";

export interface CustomerState {
    loginWithGoogleForm: boolean
    auth: boolean,
    authorization: string,
    customer: ICustomer,
}

export enum CustomerActionsEnum {
    SET_LOGIN_WITH_GOOGLE_FORM = 'SET_LOGIN_WITH_GOOGLE_FORM',
    SET_AUTH = 'SET_AUTH',
    SET_AUTHORIZATION = 'SET_LOGIN_DATA',
    SET_CUSTOMER = 'SET_CUSTOMER',
}

export interface SetLoginWithGoogleForm {
    type: CustomerActionsEnum.SET_LOGIN_WITH_GOOGLE_FORM,
    payload: boolean
}

export interface SetAuthAction {
    type: CustomerActionsEnum.SET_AUTH,
    payload: boolean
}

export interface SetLoginDataAction {
    type: CustomerActionsEnum.SET_AUTHORIZATION,
    payload: string
}

export interface SetCustomerAction {
    type: CustomerActionsEnum.SET_CUSTOMER,
    payload: ICustomer
}

export type CustomerAction = SetLoginWithGoogleForm | SetAuthAction | SetLoginDataAction | SetCustomerAction