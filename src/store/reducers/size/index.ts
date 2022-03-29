import {SizeAction, SizeActionsEnum, SizeState} from "./types";
import {ISize} from "../../../models/ISize";

const initialState: SizeState = {
    sizes: [] as ISize[]
}

export default function SizeReducer(state = initialState, action: SizeAction): SizeState {
    switch (action.type) {
        case SizeActionsEnum.SET_SIZES:
            return {...state, sizes: action.payload}
        default:
            return state
    }
}