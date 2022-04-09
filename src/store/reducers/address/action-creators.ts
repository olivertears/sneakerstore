import {IAddress} from "../../../models/IAddress";
import {
    AddAddressAction,
    AddressActionsEnum,
    ChangeAddressAction,
    RemoveAddressAction,
    SetAddressesAction
} from "./types";
import {ILogin} from "../../../models/ILogin";
import {AppDispatch} from "../../index";
import {AppActionCreators} from "../app/action-creators";
import AddressService from "../../../api/AddressService";

export const AddressActionCreators = {
    setAddresses: (addresses: IAddress[]): SetAddressesAction => ({
        type: AddressActionsEnum.SET_ADDRESSES,
        payload: addresses
    }),
    addAddress: (newAddress: IAddress): AddAddressAction=> ({
        type: AddressActionsEnum.ADD_ADDRESS,
        payload: newAddress
    }),
    changeAddress: (changedAddress: IAddress): ChangeAddressAction => ({
        type: AddressActionsEnum.CHANGE_ADDRESS,
        payload: changedAddress
    }),
    removeAddress: (addressId: string): RemoveAddressAction => ({
        type: AddressActionsEnum.REMOVE_ADDRESS,
        payload: addressId
    }),

    getAddresses: (customerId: string, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            const response = await AddressService.getAddresses(customerId, authorization)
            localStorage.setItem('addresses', JSON.stringify(response.data as IAddress[]))
            dispatch(AddressActionCreators.setAddresses(response.data as IAddress[]))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    postAddress: (newAddress: IAddress, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await AddressService.postAddress(newAddress, authorization)
            localStorage.setItem('addresses', JSON.stringify([...JSON.parse(localStorage.getItem('addresses') || '') as IAddress[], newAddress]))
            dispatch(AddressActionCreators.addAddress(newAddress))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    putAddress: (changedAddress: IAddress, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await AddressService.putAddress(changedAddress, authorization)
            localStorage.setItem('addresses', JSON.stringify([...JSON.parse(localStorage.getItem('addresses') || '') as IAddress[]].map(address => address.id === changedAddress.id ? changedAddress : address)))
            dispatch(AddressActionCreators.changeAddress(changedAddress))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    deleteAddress: (addressId: string, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await AddressService.deleteAddress(addressId, authorization)
            localStorage.setItem('addresses', JSON.stringify([...JSON.parse(localStorage.getItem('addresses') || '') as IAddress[]].filter(address => address.id !== addressId)))
            dispatch(AddressActionCreators.removeAddress(addressId))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
}