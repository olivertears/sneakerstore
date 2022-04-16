import React, {FC, useEffect} from 'react';
//@ts-ignore
import cl from './ProductComments.module.css'
import {useActions} from "../../../hooks/useActions";
import {IComment} from "../../../models/IComment";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {ICustomer} from "../../../models/ICustomer";
import {productPageImages} from "../../../dataStorage/images/ProductPage";
import {appImages} from "../../../dataStorage/images/App";

const ProductComments: FC = () => {
    const {comments, authors} = useTypedSelector(state => state.comment)
    const {customer} = useTypedSelector(state => state.customer)
    const {setComments, getAuthor, setAuthors} = useActions.useCommentActions()
    const {setAppLoader} = useActions.useAppActions()

    useEffect(() => {
        setAuthors([] as ICustomer[])
        setAppLoader(true)
        const commArr: IComment[] = JSON.parse(localStorage.getItem('comments') || '')
        setComments(commArr as IComment[])
        commArr.length
            ?
            commArr.forEach(comment => {
                getAuthor(comment.customerId)
                comment === commArr[commArr.length - 1] && setAppLoader(false)
            })
            :
            setAppLoader(false)
    }, [])

    return (
        <div>
            {comments.length !== 0 && <h1 className={cl.commentsText}>COMMENTS:</h1>}
            {authors.length === comments.length && comments.map((comment, idx) =>
                <div key={comment.id} className={cl.commentWrap}>
                    <div className={cl.commentHeader}>
                        <img src={authors[idx].avatar} className={cl.avatar}/>
                        <div className={cl.nameAndRate}>
                            <h2>{authors[idx].firstName} {authors[idx].lastName}</h2>
                            <div className={cl.rateWrap}>
                                <img src={productPageImages.grayStars} className={cl.starsImg}/>
                                <div id="percentage" className={cl.percentage} style={{width: comment.rate * 20}}/>
                            </div>
                            <h3 className={cl.date}>{comment.date}</h3>
                            {customer.id === authors[idx].id && <img src={productPageImages.changeComment} className={cl.changeCommentBtn}/>}
                            {customer.id === authors[idx].id && <img src={appImages.deleteBtn} className={cl.deleteBtn}/>}
                        </div>
                    </div>
                    <div className={cl.messageWrap}>
                        <h3>{comment.message}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductComments