import {IComment} from "../../../models/IComment";

export interface CommentState {
    comments: IComment[]
}

export enum CommentActionEnum {
    SET_COMMENTS = 'SET_COMMENTS',
    ADD_COMMENT = 'ADD_COMMENT',
    CHANGE_COMMENT = 'CHANGE_COMMENT',
    REMOVE_COMMENT = 'REMOVE_COMMENT',
}

export interface SetCommentsAction {
    type: CommentActionEnum.SET_COMMENTS,
    payload: IComment[]
}

export interface AddCommentAction {
    type: CommentActionEnum.ADD_COMMENT,
    payload: IComment
}

export interface  ChangeCommentAction {
    type: CommentActionEnum.CHANGE_COMMENT,
    payload: IComment
}

export interface RemoveCommentAction {
    type: CommentActionEnum.REMOVE_COMMENT,
    payload: string
}

export type CommentAction = SetCommentsAction | AddCommentAction | ChangeCommentAction | RemoveCommentAction