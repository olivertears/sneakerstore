import {IAddress} from "../../../models/IAddress";

export interface AddressState {
    addresses: IAddress[]
}

export enum AddressActionsEnum {
    SET_ADDRESSES = 'SET_ADDRESSES',
    ADD_ADDRESS = 'ADD_ADDRESS',
    CHANGE_ADDRESS = 'CHANGE_ADDRESS',
    REMOVE_ADDRESS = 'REMOVE_ADDRESS'
}

export interface SetAddressesAction {
    type: AddressActionsEnum.SET_ADDRESSES,
    payload: IAddress[]
}

export interface AddAddressAction {
    type: AddressActionsEnum.ADD_ADDRESS,
    payload: IAddress
}

export interface ChangeAddressAction {
    type: AddressActionsEnum.CHANGE_ADDRESS,
    payload: IAddress
}

export interface RemoveAddressAction {
    type: AddressActionsEnum.REMOVE_ADDRESS,
    payload: string
}

export type AddressAction = SetAddressesAction | AddAddressAction | ChangeAddressAction | RemoveAddressAction
