import {CustomerAction, CustomerActionsEnum, CustomerState} from "./types";
import {ICustomer} from "../../../models/ICustomer";

const initialState: CustomerState = {
    auth: false,
    authorization: '',
    customer: {} as ICustomer,
    favourites: [] as string[]
}

export default function CustomerReducer(state = initialState, action: CustomerAction): CustomerState {
    switch (action.type) {
        case CustomerActionsEnum.SET_AUTH:
            return {...state, auth: action.payload}
        case CustomerActionsEnum.SET_AUTHORIZATION:
            return {...state, authorization: action.payload}
        case CustomerActionsEnum.SET_CUSTOMER:
            return {...state, customer: action.payload}
        case CustomerActionsEnum.SET_FAVOURITES:
            return {...state, favourites: action.payload}
        default:
            return state
    }
}