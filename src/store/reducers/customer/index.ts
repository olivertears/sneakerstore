import {CustomerAction, CustomerActionsEnum, CustomerState} from "./types";
import {ICustomer} from "../../../models/ICustomer";

const initialState: CustomerState = {
    loginWithGoogleForm: false,
    auth: true,
    authorization: '',
    customer: {} as ICustomer,
}

export default function CustomerReducer(state = initialState, action: CustomerAction): CustomerState {
    switch (action.type) {
        case CustomerActionsEnum.SET_LOGIN_WITH_GOOGLE_FORM:
            return {...state, loginWithGoogleForm: action.payload}
        case CustomerActionsEnum.SET_AUTH:
            return {...state, auth: action.payload}
        case CustomerActionsEnum.SET_AUTHORIZATION:
            return {...state, authorization: action.payload}
        case CustomerActionsEnum.SET_CUSTOMER:
            return {...state, customer: action.payload}
        default:
            return state
    }
}