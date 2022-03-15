import {AppAction, AppActionsEnum, AppState} from "./types";


const initialState: AppState = {
    loading: false,
    page: 'MAIN',
    currency: {label: 'USD', symbol: '$', exchangeRate: 1},
    error: ''
}

export default function appReducer(state = initialState, action: AppAction): typeof initialState{
    switch (action.type) {
        case AppActionsEnum.SET_LOADING:
            return {...state, loading: action.payload}
        case AppActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        case AppActionsEnum.SET_PAGE:
            return {...state, page: action.payload}
        case AppActionsEnum.SET_CURRENCY:
            return {...state, currency: action.payload}
        default:
            return state
    }

}