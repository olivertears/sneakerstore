import {IComment} from "../../../models/IComment";

export interface CommentState {
    comments: IComment[]
}

export enum CommentActionsEnum {
    SET_COMMENTS = 'SET_COMMENTS',
    ADD_COMMENT = 'ADD_COMMENT',
    CHANGE_COMMENT = 'CHANGE_COMMENT',
    REMOVE_COMMENT = 'REMOVE_COMMENT',
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

export type CommentAction = SetCommentsAction | AddCommentAction | ChangeCommentAction | RemoveCommentAction