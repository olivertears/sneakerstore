import {ICard} from "../../../models/ICard";
import {AddCardAction, CardActionsEnum, ChangeCardAction, DeleteCardAction, SetCardsAction} from "./types";
import {AppDispatch} from "../../index";
import {AppActionsCreators} from "../app/action-creators";
import CardService from "../../../api/CardService";
import {ILogin} from "../../../models/ILogin";


export const CardActionCreators = {
    setCards: (cards: ICard[]): SetCardsAction => {
        return {
            type: CardActionsEnum.SET_CARDS,
            payload: cards
        }
    },
    addOneCard: (newCard: ICard): AddCardAction => {
        return {
            type: CardActionsEnum.ADD_CARD,
            payload: newCard
        }
    },
    deleteOneCard: (cardId: string): DeleteCardAction => {
        return {
            type: CardActionsEnum.DELETE_CARD,
            payload: cardId
        }
    },
    changeOneCard: (changedCard: ICard): ChangeCardAction => {
        return {
            type: CardActionsEnum.CHANGE_CARD,
            payload: changedCard
        }
    },

    getCards: (customerId: string, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionsCreators.setLoading(true))
            const response = await CardService.getCards(customerId, loginData)
            dispatch(CardActionCreators.setCards(response.data))
        } catch (err: any) {
            dispatch(AppActionsCreators.setError(err.response.data.message))
        } finally {
            dispatch(AppActionsCreators.setLoading(false))
        }
    },
    addCard: (newCard: ICard, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionsCreators.setLoading(true))
            await CardService.postCard(newCard, loginData)
            dispatch(CardActionCreators.addOneCard(newCard))
        } catch (err: any) {
            dispatch(AppActionsCreators.setError(err.response.data.message))
        } finally {
            dispatch(AppActionsCreators.setLoading(false))
        }
    },
    changeCard: (changedCard: ICard, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionsCreators.setLoading(true))
            await CardService.changeCard(changedCard, loginData)
            dispatch(CardActionCreators.changeOneCard(changedCard))
        } catch (err: any) {
            dispatch(AppActionsCreators.setError(err.response.data.message))
        } finally {
            dispatch(AppActionsCreators.setLoading(false))
        }
    },
    deleteCard: (cardId: string, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionsCreators.setLoading(true))
            await CardService.deleteCard(cardId, loginData)
            dispatch(CardActionCreators.deleteOneCard(cardId))
        } catch (err: any) {
            dispatch(AppActionsCreators.setError(err.response.data.message))
        } finally {
            dispatch(AppActionsCreators.setLoading(false))
        }
    },
}