import {
    CustomerActionsEnum,
    SetAuthAction,
    SetCustomerAction,
    SetLoginDataAction,
    SetLoginWithGoogleForm
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
    setLoginWithGoogleForm: (isLoginWithGoogleForm: boolean): SetLoginWithGoogleForm => ({
        type: CustomerActionsEnum.SET_LOGIN_WITH_GOOGLE_FORM,
        payload: isLoginWithGoogleForm
    }),
    setAuth: (auth: boolean): SetAuthAction => ({
        type: CustomerActionsEnum.SET_AUTH,
        payload: auth
    }),
    setLoginData: (loginData: ILogin): SetLoginDataAction => ({
        type: CustomerActionsEnum.SET_LOGIN_DATA,
        payload: loginData
    }),
    setCustomer: (customer: ICustomer): SetCustomerAction => ({
        type: CustomerActionsEnum.SET_CUSTOMER,
        payload: customer
    }),

    getCustomer: (customerId: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            const response = await CustomerService.getCustomer(customerId)
        } catch (err: any){
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    putCustomer: (customer: ICustomer, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await CustomerService.putCustomer(customer, loginData)
            localStorage.setItem('customer', JSON.stringify(customer))
            dispatch(CustomerActionCreators.setCustomer(customer))
        } catch (err: any){
            dispatch(AppActionCreators.setError(err.response.data.message))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    deleteCustomer: (customerId: string, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await CustomerService.deleteCustomer(customerId, loginData)
        } catch (err: any){
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },

    login: (loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            const response = await CustomerService.login(loginData)
            localStorage.setItem('auth', JSON.stringify(true))
            localStorage.setItem('loginData', JSON.stringify(loginData))
            localStorage.setItem('customer', JSON.stringify(response.data))
            dispatch(CustomerActionCreators.setAuth(true))
            dispatch(CustomerActionCreators.setLoginData(loginData))
            dispatch(CustomerActionCreators.setCustomer(response.data as ICustomer))
            dispatch(AppActionCreators.setPage('PROFILE'))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Invalid email or password'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    logout: () => (dispatch: AppDispatch) => {
        localStorage.removeItem('loginData')
        localStorage.removeItem('customer')
        localStorage.removeItem('auth')
        dispatch(CustomerActionCreators.setLoginData({} as ILogin))
        dispatch(CustomerActionCreators.setCustomer({} as ICustomer))
        dispatch(CustomerActionCreators.setAuth(false))
        dispatch(AppActionCreators.setPage('AUTHORIZATION'))
    },
    loginWithGoogleForm: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            const response = await CustomerService.loginWithGoogleForm()
            dispatch(CustomerActionCreators.setLoginWithGoogleForm(true))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    registration: (registrationData: IRegistration) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await CustomerService.registration(registrationData)
            scrollToTop()
        } catch (err: any) {
            dispatch(AppActionCreators.setError(err.response.data.message))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    checkDoesEmailExist: (email: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await CustomerService.checkDoesEmailExist(email)
        } catch (err: any) {
            dispatch(AppActionCreators.setError('There is no account with this email'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    resetPassword: (resetPasswordData: IResetPassword) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await CustomerService.resetPassword(resetPasswordData)
            scrollToTop()
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Invalid code'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    changePassword: (changePasswordData: IChangePassword) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await CustomerService.changePassword(changePasswordData)
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Invalid oldPassword'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    }
}