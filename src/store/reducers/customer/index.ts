import {CustomerAction, CustomerActionsEnum, CustomerState} from "./types";
import {ICustomer} from "../../../models/ICustomer";
import {ILogin} from "../../../models/ILogin";

const initialState: CustomerState = {
    auth: false,
    loginData: {} as ILogin,
    customer: {} as ICustomer,
}

export default function CustomerReducer(state = initialState, action: CustomerAction): CustomerState {
    switch (action.type) {
        case CustomerActionsEnum.SET_AUTH:
            return {...state, auth: action.payload}
        case CustomerActionsEnum.SET_LOGIN_DATA:
            return {...state, loginData: action.payload}
        case CustomerActionsEnum.SET_CUSTOMER:
            return {...state, customer: action.payload}
        default:
            return state
    }
}