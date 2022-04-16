import {IComment} from "../../../models/IComment";
import {
    AddAuthorAction,
    AddCommentAction,
    ChangeCommentAction,
    CommentActionsEnum,
    RemoveCommentAction, SetAuthorsAction,
    SetCommentsAction
} from "./types";
import {AppDispatch} from "../../index";
import {AppActionCreators} from "../app/action-creators";
import CommentService from "../../../api/CommentService";
import {ICustomer} from "../../../models/ICustomer";
import CustomerService from "../../../api/CustomerService";


export const CommentActionCreators = {
    setComments: (comments: IComment[]): SetCommentsAction => {
        localStorage.setItem('comments', JSON.stringify(comments))
        return {
            type: CommentActionsEnum.SET_COMMENTS,
            payload: comments
        }
    },
    addComment: (comment: IComment): AddCommentAction => ({
        type: CommentActionsEnum.ADD_COMMENT,
        payload: comment
    }),
    changeComment: (comment: IComment): ChangeCommentAction => ({
        type: CommentActionsEnum.CHANGE_COMMENT,
        payload: comment
    }),
    removeComment: (commentId: string): RemoveCommentAction => ({
        type: CommentActionsEnum.REMOVE_COMMENT,
        payload: commentId
    }),
    setAuthors: (authors: ICustomer[]): SetAuthorsAction => ({
        type: CommentActionsEnum.SET_AUTHORS,
        payload: authors
    }),
    addAuthor: (author: ICustomer): AddAuthorAction => ({
        type: CommentActionsEnum.ADD_AUTHOR,
        payload: author
    }),



    getComments: (productId: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            const response = await CommentService.getComments(productId)
            dispatch(CommentActionCreators.setComments(response.data as IComment[]))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    postComment: (newComment: IComment, authorization: string) => async(dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await CommentService.postComment(newComment, authorization)
            dispatch(CommentActionCreators.addComment(newComment))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    putComment: (changedComment: IComment, authorization: string) => async(dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await CommentService.putComment(changedComment, authorization)
            dispatch(CommentActionCreators.changeComment(changedComment))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },
    deleteComment: (commentId: string, authorization: string) => async(dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setAppLoader(true))
            await CommentService.deleteComment(commentId, authorization)
            dispatch(CommentActionCreators.removeComment(commentId))
        } catch (err: any) {
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        } finally {
            dispatch(AppActionCreators.setAppLoader(false))
        }
    },

    getAuthor: (customerId: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await CustomerService.getCustomer(customerId)
            dispatch(CommentActionCreators.addAuthor(response.data))
        } catch (err: any){
            dispatch(AppActionCreators.setError('Something went wrong, please try again later...'))
        }
    },
}