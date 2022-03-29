import {ISize} from "../../../models/ISize";
import {SetSizesAction, SizeActionsEnum} from "./types";
import {AppDispatch} from "../../index";
import {AppActionCreators} from "../app/action-creators";
import SizeService from "../../../api/SizeService";

export const SizeActionCreators = {
    setSizes: (sizes: ISize[]): SetSizesAction => ({
        type: SizeActionsEnum.SET_SIZES,
        payload: sizes
    }),

    getSizes: (productId: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            const response = await SizeService.getSizes(productId)
            dispatch(SizeActionCreators.setSizes(response.data as ISize[]))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    }
}