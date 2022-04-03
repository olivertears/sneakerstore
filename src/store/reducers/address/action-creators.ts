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
            dispatch(AppActionCreators.setLoading(true))
            const response = await AddressService.getAddresses(customerId, authorization)
            dispatch(AddressActionCreators.setAddresses(response.data as IAddress[]))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    postAddress: (newAddress: IAddress, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await AddressService.postAddress(newAddress, authorization)
            dispatch(AddressActionCreators.addAddress(newAddress))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    putAddress: (changedAddress: IAddress, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await AddressService.putAddress(changedAddress, authorization)
            dispatch(AddressActionCreators.changeAddress(changedAddress))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    deleteAddress: (addressId: string, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await AddressService.deleteAddress(addressId, authorization)
            dispatch(AddressActionCreators.removeAddress(addressId))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
}