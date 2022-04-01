import {ICurrency} from "../../../models/ICurrency";

export interface AppState {
    loading: boolean,
    error: string,
    warning: string,
    page: string,
    currency: ICurrency,
}

export enum AppActionsEnum {
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_WARNING = 'SET_WARNING',
    SET_PAGE = 'SET_PAGE',
    SET_CURRENCY = 'SET_CURRENCY',
}

export interface SetLoadingAction {
    type: AppActionsEnum.SET_LOADING,
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
    SetLoadingAction |
    SetErrorAction |
    SetWarningAction |
    SetPageAction |
    SetCurrencyAction