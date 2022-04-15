import {CatalogAction, CatalogActionsEnum, CatalogState} from "./types";

const initialState: CatalogState = {
    sort: 'Popularity',
    filter: {price: [59.99, 199.99], gender: [] as string[], season: [] as string[], color: [] as string[], brand: [] as string[]},
    showAmount: 12,
    catalogPage: 1,
    layout: 'grid',
    search: ''
}

export default function CatalogReducer(state = initialState, action: CatalogAction): CatalogState {
    switch (action.type) {
        case CatalogActionsEnum.SET_SORT:
            return {...state, sort: action.payload}
        case CatalogActionsEnum.SET_FILTER:
            return {...state, filter: action.payload}
        case CatalogActionsEnum.SET_SHOW_AMOUNT:
            return {...state, showAmount: action.payload}
        case CatalogActionsEnum.SET_CATALOG_PAGE:
            return {...state, catalogPage: action.payload}
        case CatalogActionsEnum.SET_LAYOUT:
            return {...state, layout: action.payload}
        case CatalogActionsEnum.SET_SEARCH:
            return {...state, search: action.payload}
        default:
            return state
    }
}