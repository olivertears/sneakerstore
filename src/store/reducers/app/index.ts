import {AppAction, AppActionsEnum, AppState} from "./types";


const initialState: AppState = {
    appLoader: false,
    catalogLoader: false,
    page: 'MAIN',
    currency: {label: 'USD', symbol: '$', exchangeRate: 1},
    error: '',
    warning: ''
}

export default function appReducer(state = initialState, action: AppAction): typeof initialState{
    switch (action.type) {
        case AppActionsEnum.SET_APP_LOADER:
            return {...state, appLoader: action.payload}
        case AppActionsEnum.SET_CATALOG_LOADER:
            return {...state, catalogLoader: action.payload}
        case AppActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        case AppActionsEnum.SET_WARNING:
            return {...state, warning: action.payload}
        case AppActionsEnum.SET_PAGE:
            return {...state, page: action.payload}
        case AppActionsEnum.SET_CURRENCY:
            return {...state, currency: action.payload}
        default:
            return state
    }

}