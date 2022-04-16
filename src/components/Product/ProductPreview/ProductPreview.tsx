import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
// @ts-ignore
import cl from './ProductPreview.module.css';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {productPageImages} from "../../../dataStorage/images/ProductPage";
import {ISize} from "../../../models/ISize";

interface IProductPreviewProps {
    activeImgIndex: number
    selectedSize: ISize
}

const ProductPreview: FC<IProductPreviewProps> = ({activeImgIndex, selectedSize}) => {
    const {selectedProduct, sizes} = useTypedSelector(state => state.product)

    useEffect(() => {
        //@ts-ignore
        const percentage: HTMLDivElement = document.getElementById('percentage')
        percentage.style.width = selectedProduct.averageRate * 30 + 'px'
    }, [])

    return (
        <div className={cl.wrap}>
            <img src={selectedProduct.photos[activeImgIndex]} className={cl.preview}/>
            {selectedSize.amount === 0 && <img src={productPageImages.soldOut} className={cl.soldOut}/>}
            <div className={cl.infoWrap}>
                <img src={productPageImages.whiteStars} className={cl.starsImg}/>
                <div id="percentage" className={cl.percentage}/>
                <h3 className={cl.orders}>Orders: {selectedProduct.orderedAmount}</h3>
            </div>
        </div>
    );
};

export default ProductPreview