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

    getAddresses: (customerId: string, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            const response = await AddressService.getAddresses(customerId, loginData)
            dispatch(AddressActionCreators.setAddresses(response.data as IAddress[]))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    postAddress: (newAddress: IAddress, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await AddressService.postAddress(newAddress, loginData)
            dispatch(AddressActionCreators.addAddress(newAddress))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    putAddress: (changedAddress: IAddress, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await AddressService.putAddress(changedAddress, loginData)
            dispatch(AddressActionCreators.changeAddress(changedAddress))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    deleteAddress: (addressId: string, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await AddressService.deleteAddress(addressId, loginData)
            dispatch(AddressActionCreators.removeAddress(addressId))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
}