import {IOrder} from "../../../models/IOrder";
import {AddOrderAction, OrderActionsEnum, RemoveOrderAction, SetOrdersAction} from "./types";
import {ILogin} from "../../../models/ILogin";
import {AppDispatch} from "../../index";
import {AppActionCreators} from "../app/action-creators";
import CardService from "../../../api/CardService";
import {ICard} from "../../../models/ICard";
import OrderService from "../../../api/OrderService";

export const OrderActionCreators = {
    setOrders: (orders: IOrder[]): SetOrdersAction => ({
        type: OrderActionsEnum.SET_ORDERS,
        payload: orders
    }),
    addOrder: (order: IOrder): AddOrderAction => ({
        type: OrderActionsEnum.ADD_ORDER,
        payload: order
    }),
    removeOrder: (orderId: string): RemoveOrderAction => ({
        type: OrderActionsEnum.REMOVE_ORDER,
        payload: orderId
    }),

    getOrders: (customerId: string, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            const response = await OrderService.getOrders(customerId, loginData)
            dispatch(OrderActionCreators.setOrders(response.data as IOrder[]))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    postOrder: (newOrder: IOrder) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await OrderService.postOrder(newOrder)
            dispatch(OrderActionCreators.addOrder(newOrder))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    deleteOrder: (orderId: string, loginData: ILogin) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await OrderService.deleteOrder(orderId, loginData)
            dispatch(OrderActionCreators.removeOrder(orderId))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
}