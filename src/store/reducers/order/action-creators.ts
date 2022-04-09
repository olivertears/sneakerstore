import {IOrder} from "../../../models/IOrder";
import {AddOrderAction, OrderActionsEnum, RemoveOrderAction, SetOrdersAction} from "./types";
import {AppDispatch} from "../../index";
import {AppActionCreators} from "../app/action-creators";
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

    getOrders: (customerId: string, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            const response = await OrderService.getOrders(customerId, authorization)
            dispatch(OrderActionCreators.setOrders(response.data as IOrder[]))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    postOrder: (newOrder: IOrder) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await OrderService.postOrder(newOrder)
            dispatch(OrderActionCreators.addOrder(newOrder))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    deleteOrder: (orderId: string, authorization: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await OrderService.deleteOrder(orderId, authorization)
            dispatch(OrderActionCreators.removeOrder(orderId))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
}