import {ICard} from "../../../models/ICard";

export interface CardState {
    cards: ICard[],
}

export enum CardActionsEnum {
    SET_CARDS = 'SET_CARDS',
    ADD_CARD = 'ADD_CARD',
    CHANGE_CARD = 'CHANGE_CARD',
    REMOVE_CARD = 'REMOVE_CARD',
}

export interface SetCardsAction {
    type: CardActionsEnum.SET_CARDS,
    payload: ICard[]
}

export interface AddCardAction {
    type: CardActionsEnum.ADD_CARD,
    payload: ICard
}

export interface ChangeCardAction {
    type: CardActionsEnum.CHANGE_CARD,
    payload: ICard
}

export interface RemoveCardAction {
    type: CardActionsEnum.REMOVE_CARD,
    payload: string
}

export type CardAction = SetCardsAction | AddCardAction | ChangeCardAction | RemoveCardAction