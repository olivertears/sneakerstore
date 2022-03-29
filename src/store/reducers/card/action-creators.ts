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

    getCards: (customerId: string, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            const response = await CardService.getCards(customerId, loginData)
            dispatch(CardActionCreators.setCards(response.data as ICard[]))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    postCard: (newCard: ICard, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await CardService.postCard(newCard, loginData)
            dispatch(CardActionCreators.addCard(newCard))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Card with this number already exists'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    putCard: (changedCard: ICard, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await CardService.putCard(changedCard, loginData)
            dispatch(CardActionCreators.changeCard(changedCard))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Card with this number already exists'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    deleteCard: (cardId: string, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await CardService.deleteCard(cardId, loginData)
            dispatch(CardActionCreators.removeCard(cardId))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
}