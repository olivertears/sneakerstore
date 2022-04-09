import {ICard} from "../../../models/ICard";
import {
    AddCardAction,
    CardActionsEnum,
    ChangeCardAction,
    RemoveCardAction,
    SetCardsAction
} from "./types";
import {AppDispatch} from "../../index";
import {AppActionCreators} from "../app/action-creators";
import CardService from "../../../api/CardService";
import {ILogin} from "../../../models/ILogin";


export const CardActionCreators = {
    setCards: (cards: ICard[]): SetCardsAction => ({
        type: CardActionsEnum.SET_CARDS,
        payload: cards
    }),
    addCard: (newCard: ICard): AddCardAction => ({
        type: CardActionsEnum.ADD_CARD,
        payload: newCard
    }),
    changeCard: (changedCard: ICard): ChangeCardAction => ({
        type: CardActionsEnum.CHANGE_CARD,
        payload: changedCard
    }),
    removeCard: (cardId: string): RemoveCardAction => ({
        type: CardActionsEnum.REMOVE_CARD,
        payload: cardId
    }),

    getCards: (customerId: string, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            const response = await CardService.getCards(customerId, authorization)
            localStorage.setItem('cards', JSON.stringify([{id: '0', number: '', validityDate: '', owner: '', cvv: '', customersIds: ['']}, ...response.data as ICard[]]))
            dispatch(CardActionCreators.setCards([{id: '0', number: '', validityDate: '', owner: '', cvv: '', customersIds: ['']}, ...response.data as ICard[]]))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    postCard: (newCard: ICard, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await CardService.postCard(newCard, authorization)
            localStorage.setItem('cards', JSON.stringify([...JSON.parse(localStorage.getItem('cards') || '') as ICard[], newCard]))
            dispatch(CardActionCreators.addCard(newCard))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Card with this number already exists'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    putCard: (changedCard: ICard, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await CardService.putCard(changedCard, authorization)
            localStorage.setItem('cards', JSON.stringify([...JSON.parse(localStorage.getItem('cards') || '') as ICard[]].map(card => card.id === changedCard.id ? changedCard : card)))
            dispatch(CardActionCreators.changeCard(changedCard))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Card with this number already exists'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    deleteCard: (cardId: string, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await CardService.deleteCard(cardId, authorization)
            localStorage.setItem('cards', JSON.stringify([...JSON.parse(localStorage.getItem('cards') || '') as ICard[]].filter(card => card.id !== cardId)))
            dispatch(CardActionCreators.removeCard(cardId))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
}