import {AddressAction, AddressActionsEnum, AddressState} from "./types";
import {IAddress} from "../../../models/IAddress";

const initialState: AddressState = {
    addresses: [] as IAddress[]
}

export default function AddressReducer(state = initialState, action: AddressAction): AddressState {
    switch (action.type) {
        case AddressActionsEnum.SET_ADDRESSES:
            return {...state, addresses: action.payload}
        case AddressActionsEnum.ADD_ADDRESS:
            return {...state, addresses: [...state.addresses, action.payload]}
        case AddressActionsEnum.CHANGE_ADDRESS:
            return {...state, addresses: state.addresses.map(address => address.id === action.payload.id ? action.payload : address)}
        case AddressActionsEnum.REMOVE_ADDRESS:
            return {...state, addresses: state.addresses.filter(address => address.id === action.payload)}
        default:
            return state
    }
}