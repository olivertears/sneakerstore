import {CardAction, CardActionsEnum, CardState} from "./types";
import {ICard} from "../../../models/ICard";


const initialState: CardState = {
    cards: [] as ICard[]
}

export default function CardReducer(state = initialState, action: CardAction): CardState {
    switch (action.type) {
        case CardActionsEnum.SET_CARDS:
            return {...state, cards: action.payload}
        case CardActionsEnum.ADD_CARD:
            return {...state, cards: [...state.cards, action.payload]}
        case CardActionsEnum.DELETE_CARD:
            return {...state, cards: state.cards.filter(card => card.id !== action.payload)}
        case CardActionsEnum.CHANGE_CARD:
            return {...state, cards: [...state.cards, state.cards[state.cards.findIndex(card => card.id === action.payload.id)] = action.payload]}
        default:
            return state
    }

}