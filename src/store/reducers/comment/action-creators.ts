import {IComment} from "../../../models/IComment";
import {
    AddCommentAction,
    ChangeCommentAction,
    CommentActionEnum,
    RemoveCommentAction,
    SetCommentsAction
} from "./types";
import {AppDispatch} from "../../index";
import {AppActionCreators} from "../app/action-creators";
import CommentService from "../../../api/CommentService";
import {ILogin} from "../../../models/ILogin";


export const CommentActionCreators = {
    setComments: (comments: IComment[]): SetCommentsAction => ({
        type: CommentActionEnum.SET_COMMENTS,
        payload: comments
    }),
    addComment: (comment: IComment): AddCommentAction => ({
        type: CommentActionEnum.ADD_COMMENT,
        payload: comment
    }),
    changeComment: (comment: IComment): ChangeCommentAction => ({
        type: CommentActionEnum.CHANGE_COMMENT,
        payload: comment
    }),
    removeComment: (commentId: string): RemoveCommentAction => ({
        type: CommentActionEnum.REMOVE_COMMENT,
        payload: commentId
    }),

    getComments: (productId: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            const response = await CommentService.getComments(productId)
            dispatch(CommentActionCreators.setComments(response.data))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    postComment: (newComment: IComment, loginData: ILogin) => async(dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await CommentService.postComment(newComment, loginData)
            dispatch(CommentActionCreators.addComment(newComment))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    putComment: (changedComment: IComment, loginData: ILogin) => async(dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await CommentService.putComment(changedComment, loginData)
            dispatch(CommentActionCreators.changeComment(changedComment))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
    deleteComment: (commentId: string, loginData: ILogin) => async(dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setLoading(true))
            await CommentService.deleteComment(commentId, loginData)
            dispatch(CommentActionCreators.removeComment(commentId))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setLoading(false))
        }
    },
}