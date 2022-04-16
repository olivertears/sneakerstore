import {
    CustomerActionsEnum,
    SetAuthAction, SetAuthorizationAction,
    SetCustomerAction, SetFavouritesAction,
} from "../customer/types";
import {ICustomer} from "../../../models/ICustomer";
import {AppDispatch} from "../../index";
import {AppActionCreators} from "../app/action-creators";
import CustomerService from "../../../api/CustomerService";
import {scrollToTop} from "../../../utils/scrolls/scrollToTop";
import {ILogin} from "../../../models/ILogin";
import {IResetPassword} from "../../../models/IResetPassword";
import {IRegistration} from "../../../models/IRegistration";
import {IChangePassword} from "../../../models/IChangePassword";


export const CustomerActionCreators = {
    setAuth: (auth: boolean): SetAuthAction => ({
        type: CustomerActionsEnum.SET_AUTH,
        payload: auth
    }),
    setAuthorization: (authorization: string): SetAuthorizationAction => ({
        type: CustomerActionsEnum.SET_AUTHORIZATION,
        payload: authorization
    }),
    setCustomer: (customer: ICustomer): SetCustomerAction => ({
        type: CustomerActionsEnum.SET_CUSTOMER,
        payload: customer
    }),
    setFavourites: (favourites: string[]): SetFavouritesAction => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
        return {
            type: CustomerActionsEnum.SET_FAVOURITES,
            payload: favourites
        }
    },

    putCustomer: (customer: ICustomer, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await CustomerService.putCustomer(customer, authorization)
            localStorage.setItem('customer', JSON.stringify(customer))
            dispatch(CustomerActionCreators.setCustomer(customer))
        } catch (err: any){
            dispatch(AppActionCreators.setError(err.response.data.message))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    deleteCustomer: (customerId: string, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await CustomerService.deleteCustomer(customerId, authorization)
        } catch (err: any){
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },

    login: (loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            const response = await CustomerService.login(loginData)
            localStorage.setItem('auth', JSON.stringify(true))
            localStorage.setItem('authorization', JSON.stringify(btoa(`${loginData.email}:${loginData.password}`)))
            localStorage.setItem('customer', JSON.stringify(response.data))
            localStorage.setItem('favourites', JSON.stringify(response.data.favoritesIds))
            dispatch(CustomerActionCreators.setAuth(true))
            dispatch(CustomerActionCreators.setAuthorization(btoa(`${loginData.email}:${loginData.password}`)))
            dispatch(CustomerActionCreators.setCustomer(response.data as ICustomer))
            dispatch(CustomerActionCreators.setFavourites(response.data.favoritesIds as string[]))
            dispatch(AppActionCreators.setPage('PROFILE'))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Invalid email or password'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    logout: () => (dispatch: AppDispatch) => {
        localStorage.clear()
        dispatch(CustomerActionCreators.setFavourites([] as string[]))
        dispatch(CustomerActionCreators.setAuthorization(''))
        dispatch(CustomerActionCreators.setCustomer({} as ICustomer))
        dispatch(CustomerActionCreators.setAuth(false))
        dispatch(AppActionCreators.setPage('AUTHORIZATION'))
    },
    registration: (registrationData: IRegistration) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await CustomerService.registration(registrationData)
            scrollToTop()
        } catch (err: any) {
            dispatch(AppActionCreators.setError(err.response.data.message))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    checkDoesEmailExist: (email: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await CustomerService.checkDoesEmailExist(email)
        } catch (err: any) {
            dispatch(AppActionCreators.setError('There is no account with this email'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    resetPassword: (resetPasswordData: IResetPassword) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await CustomerService.resetPassword(resetPasswordData)
            scrollToTop()
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Invalid code'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    changePassword: (changePasswordData: IChangePassword) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await CustomerService.changePassword(changePasswordData)
            dispatch(AppActionCreators.setWarning(`The password has been successfully changed!`))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Invalid oldPassword'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    }
}