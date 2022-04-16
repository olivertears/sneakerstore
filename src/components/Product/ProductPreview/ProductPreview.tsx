import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
// @ts-ignore
import cl from './ProductPreview.module.css';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {productPageImages} from "../../../dataStorage/images/ProductPage";

interface IProductPreviewProps {
    activeImgIndex: number
}

const ProductPreview: FC<IProductPreviewProps> = ({activeImgIndex}) => {
    const {selectedProduct} = useTypedSelector(state => state.product)

    useEffect(() => {
        //@ts-ignore
        const percentage: HTMLDivElement = document.getElementById('percentage')

        percentage.style.width = selectedProduct.averageRate * 30 + 'px'
    }, [])

    return (
        <div>
            <img src={selectedProduct.photos[activeImgIndex]} className={cl.preview}/>
            <div className={cl.infoWrap}>
                <img src={productPageImages.whiteStars} className={cl.starsImg}/>
                <div id="percentage" className={cl.percentage}/>
                <h3 className={cl.orders}>Orders: {selectedProduct.orderedAmount}</h3>
            </div>
        </div>
    );
};

export default ProductPreview