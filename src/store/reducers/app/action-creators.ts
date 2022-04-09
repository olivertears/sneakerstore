import {
    AppActionsEnum,
    SetPageAction,
    SetCurrencyAction,
    SetErrorAction,
    SetWarningAction,
    SetAppLoaderAction,
    SetCatalogLoaderAction
} from "./types";
import {ICurrency} from "../../../models/ICurrency";
import {scrollToTop} from "../../../utils/scrolls/scrollToTop";


export const AppActionCreators = {
    setAppLoader: (loading: boolean): SetAppLoaderAction => ({
        type: AppActionsEnum.SET_APP_LOADER,
        payload: loading
    }),
    setCatalogLoader: (loading: boolean): SetCatalogLoaderAction => ({
        type: AppActionsEnum.SET_CATALOG_LOADER,
        payload: loading
    }),
    setError: (error: string): SetErrorAction => ({
        type: AppActionsEnum.SET_ERROR,
        payload: error
    }),
    setWarning: (error: string): SetWarningAction => ({
        type: AppActionsEnum.SET_WARNING,
        payload: error
    }),
    setPage: (page: string): SetPageAction => {
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