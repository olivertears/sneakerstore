import {CustomerActionsEnum, SetAuthAction, SetCustomerAction, SetLoginDataAction} from "../customer/types";
import {ICustomer} from "../../../models/ICustomer";
import {AppDispatch} from "../../index";
import {AppActionsCreators} from "../app/action-creators";
import CustomerService from "../../../api/CustomerService";
import {scrollToTop} from "../../../utils/scrolls/scrollToTop";
import {ILogin} from "../../../models/ILogin";
import {IResetPassword} from "../../../models/IResetPassword";


export const CustomerActionCreators = {
    setAuth: (auth: boolean): SetAuthAction => {
        localStorage.setItem('auth', JSON.stringify(auth))
        return {
            type: CustomerActionsEnum.SET_AUTH,
            payload: auth
        }
    },
    setLoginData: (loginData: ILogin): SetLoginDataAction => {
        localStorage.setItem('loginData', JSON.stringify(loginData))
        return {
            type: CustomerActionsEnum.SET_LOGIN_DATA,
            payload: loginData
        }
    },
    setCustomer: (customer: ICustomer): SetCustomerAction => {
        localStorage.setItem('customer', JSON.stringify(customer))
        return {
            type: CustomerActionsEnum.SET_CUSTOMER,
            payload: customer
        }
    },
    registration: (newCustomer: ICustomer) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionsCreators.setLoading(true))
            await CustomerService.registration(newCustomer)
            scrollToTop()
        } catch (err: any) {
            dispatch(AppActionsCreators.setError(err.response.data.message))
        } finally {
            dispatch(AppActionsCreators.setLoading(false))
        }
    },
    login: (loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionsCreators.setLoading(true))
            const response = await CustomerService.login(loginData)
            dispatch(CustomerActionCreators.setAuth(true))
            dispatch(CustomerActionCreators.setLoginData(loginData))
            dispatch(CustomerActionCreators.setCustomer(response.data))
            dispatch(AppActionsCreators.setPage('PROFILE'))
        } catch (err: any) {
            dispatch(AppActionsCreators.setError(loginData ? 'Invalid email or password' : `Something went wrong, please try later...`))
        } finally {
            dispatch(AppActionsCreators.setLoading(false))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('loginData')
        localStorage.removeItem('customer')
        localStorage.removeItem('auth')
        dispatch(CustomerActionCreators.setLoginData({} as ILogin))
        dispatch(CustomerActionCreators.setCustomer({} as ICustomer))
        dispatch(CustomerActionCreators.setAuth(false))
        dispatch(AppActionsCreators.setPage('AUTHORIZATION'))
    },
    checkDoesEmailExist: (email: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionsCreators.setLoading(true))
            const response = await CustomerService.checkDoesEmailExist(email)
            console.log(response)
            return true
        } catch (err: any) {
            dispatch(AppActionsCreators.setError(`There is no account with this email`))
            return false
        } finally {
            dispatch(AppActionsCreators.setLoading(false))
        }
    },
    recovery: (recoveryData: IResetPassword) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionsCreators.setLoading(true))
            const response = await CustomerService.recovery(recoveryData)
            console.log(response)
            scrollToTop()
        } catch (err: any) {
            dispatch(AppActionsCreators.setError(`Something went wrong, please try later...`))
        } finally {
            dispatch(AppActionsCreators.setLoading(false))
        }
    }
}