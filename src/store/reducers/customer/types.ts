import {ICustomer} from "../../../models/ICustomer";

export interface CustomerState {
    auth: boolean,
    authorization: string,
    customer: ICustomer,
    favourites: string[],
    cart: string[],
}

export enum CustomerActionsEnum {
    SET_AUTH = 'SET_AUTH',
    SET_AUTHORIZATION = 'SET_LOGIN_DATA',
    SET_CUSTOMER = 'SET_CUSTOMER',
    SET_FAVOURITES = 'SET_FAVOURITES',
    SET_CART = 'SET_CART',
}

export interface SetAuthAction {
    type: CustomerActionsEnum.SET_AUTH,
    payload: boolean
}

export interface SetAuthorizationAction {
    type: CustomerActionsEnum.SET_AUTHORIZATION,
    payload: string
}

export interface SetCustomerAction {
    type: CustomerActionsEnum.SET_CUSTOMER,
    payload: ICustomer
}

export interface SetFavouritesAction {
    type: CustomerActionsEnum.SET_FAVOURITES,
    payload: string[]
}

export interface SetCartAction {
    type: CustomerActionsEnum.SET_CART,
    payload: string[]
}

export type CustomerAction =
    SetAuthAction |
    SetAuthorizationAction |
    SetCustomerAction |
    SetFavouritesAction |
    SetCartAction