import {ICurrency} from "../../../models/ICurrency";

export interface AppState {
    appLoader: boolean,
    catalogLoader: boolean,
    error: string,
    warning: string,
    page: string,
    currency: ICurrency,
}

export enum AppActionsEnum {
    SET_APP_LOADER = 'SET_APP_LOADER',
    SET_CATALOG_LOADER = 'SET_CATALOG_LOADER',
    SET_ERROR = 'SET_ERROR',
    SET_WARNING = 'SET_WARNING',
    SET_PAGE = 'SET_PAGE',
    SET_CURRENCY = 'SET_CURRENCY',
}

export interface SetAppLoaderAction {
    type: AppActionsEnum.SET_APP_LOADER,
    payload: boolean
}

export interface SetCatalogLoaderAction {
    type: AppActionsEnum.SET_CATALOG_LOADER,
    payload: boolean
}

export interface SetErrorAction {
    type: AppActionsEnum.SET_ERROR,
    payload: string
}

export interface SetWarningAction {
    type: AppActionsEnum.SET_WARNING,
    payload: string
}

export interface SetPageAction {
    type: AppActionsEnum.SET_PAGE,
    payload: string
}

export interface SetCurrencyAction {
    type: AppActionsEnum.SET_CURRENCY,
    payload: ICurrency
}


export type AppAction =
    SetAppLoaderAction |
    SetCatalogLoaderAction |
    SetErrorAction |
    SetWarningAction |
    SetPageAction |
    SetCurrencyAction