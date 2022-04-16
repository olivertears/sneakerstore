import {IComment} from "../../../models/IComment";
import {ICustomer} from "../../../models/ICustomer";

export interface CommentState {
    comments: IComment[]
    authors: ICustomer[]
}

export enum CommentActionsEnum {
    SET_COMMENTS = 'SET_COMMENTS',
    ADD_COMMENT = 'ADD_COMMENT',
    CHANGE_COMMENT = 'CHANGE_COMMENT',
    REMOVE_COMMENT = 'REMOVE_COMMENT',
    SET_AUTHORS = 'SET_AUTHORS',
    ADD_AUTHOR = 'ADD_AUTHOR'
}

export interface SetCommentsAction {
    type: CommentActionsEnum.SET_COMMENTS,
    payload: IComment[]
}

export interface AddCommentAction {
    type: CommentActionsEnum.ADD_COMMENT,
    payload: IComment
}

export interface  ChangeCommentAction {
    type: CommentActionsEnum.CHANGE_COMMENT,
    payload: IComment
}

export interface RemoveCommentAction {
    type: CommentActionsEnum.REMOVE_COMMENT,
    payload: string
}

export interface SetAuthorsAction {
    type: CommentActionsEnum.SET_AUTHORS,
    payload: ICustomer[]
}

export interface AddAuthorAction {
    type: CommentActionsEnum.ADD_AUTHOR,
    payload: ICustomer
}

export type CommentAction =
    SetCommentsAction |
    AddCommentAction |
    ChangeCommentAction |
    RemoveCommentAction |
    SetAuthorsAction |
    AddAuthorAction