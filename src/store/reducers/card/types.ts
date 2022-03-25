import {ICard} from "../../../models/ICard";
import {ICustomer} from "../../../models/ICustomer";
import {SetAuthAction, SetCustomerAction} from "../customer/types";

export interface CardState {
    cards: ICard[],
}

export enum CardActionsEnum {
    SET_CARDS = 'SET_CARDS',
    CHANGE_CARD = 'CHANGE_CARD',
    DELETE_CARD = 'DELETE_CARD',
    ADD_CARD = 'ADD_CARD'
}

export interface SetCardsAction {
    type: CardActionsEnum.SET_CARDS,
    payload: ICard[]
}

export interface ChangeCardAction {
    type: CardActionsEnum.CHANGE_CARD,
    payload: ICard
}

export interface AddCardAction {
    type: CardActionsEnum.ADD_CARD,
    payload: ICard
}

export interface DeleteCardAction {
    type: CardActionsEnum.DELETE_CARD,
    payload: string
}

export type CardAction = SetCardsAction | ChangeCardAction | AddCardAction | DeleteCardAction