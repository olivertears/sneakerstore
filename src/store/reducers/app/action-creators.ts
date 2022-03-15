import {AppActionsEnum, SetPageAction, SetCurrencyAction, SetLoadingAction, SetErrorAction} from "./types";
import {ICurrency} from "../../../models/ICurrency";
import {scrollToTop} from "../../../utils/scrollToTop";


export const AppActionsCreators = {
    setLoading: (loading: boolean): SetLoadingAction => ({
        type: AppActionsEnum.SET_LOADING,
        payload: loading
    }),
    setError: (error: string): SetErrorAction => ({
        type: AppActionsEnum.SET_ERROR,
        payload: error
    }),
    setPage: (page: string): SetPageAction => {
        localStorage.setItem('page', page)
        scrollToTop()
        return {
            type: AppActionsEnum.SET_PAGE,
            payload: page
        }
    },
    setCurrency: (currency: ICurrency): SetCurrencyAction => {
        localStorage.setItem('currency', JSON.stringify(currency))
        return {
            type: AppActionsEnum.SET_CURRENCY,
            payload: currency
        }
    },
}