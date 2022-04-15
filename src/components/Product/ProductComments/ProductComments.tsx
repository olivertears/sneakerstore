import React, {FC, useEffect} from 'react';
//@ts-ignore
import cl from './ProductComments.module.css'
import {useActions} from "../../../hooks/useActions";
import {IComment} from "../../../models/IComment";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const ProductComments: FC = () => {
    const {comments} = useTypedSelector(state => state.comment)
    const {setComments} = useActions.useCommentActions()

    useEffect(() => {
        localStorage.getItem('comments') && setComments(JSON.parse(localStorage.getItem('comments') || '') as IComment[])
    }, [])

    return (
        <div>
            <h1 className={cl.commentsText}>COMMENTS:</h1>
            {comments.map(comment =>
                <div className={cl.commentWrap}>

                </div>
            )}
        </div>
    );
};

export default ProductComments