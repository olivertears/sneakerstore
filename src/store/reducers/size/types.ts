import {ISize} from "../../../models/ISize";

export interface SizeState {
    sizes: ISize[]
}

export enum SizeActionsEnum {
    SET_SIZES = 'SET_SIZES',
}

export interface SetSizesAction {
    type: SizeActionsEnum.SET_SIZES,
    payload: ISize[]
}

export type SizeAction = SetSizesAction