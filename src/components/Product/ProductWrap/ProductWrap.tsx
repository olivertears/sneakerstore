import React, {FC, useEffect, useState} from 'react';
//@ts-ignore
import cl from './ProductWrap.module.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import ProductSlider from "../ProductSlider/ProductSlider";
import ProductPreview from "../ProductPreview/ProductPreview";
import ProductInfo from "../ProductInfo/ProductInfo";
import ProductComments from "../ProductComments/ProductComments";
import {ISize} from "../../../models/ISize";

const ProductWrap: FC = () => {
    const [selectedSize, setSelectedSize] = useState<ISize>({} as ISize)
    const [activeImgIndex, setActiveImgIndex] = useState<number>( 0);

    return (
        <div className={cl.wrap}>
            <div className={cl.sliderWrap}>
                <ProductSlider activeImgIndex={activeImgIndex} setActiveImgIndex={setActiveImgIndex}/>
            </div>
            <div className={cl.previewWrap}>
                <ProductPreview activeImgIndex={activeImgIndex} selectedSize={selectedSize}/>
            </div>
            <div className={cl.infoWrap}>
                <ProductInfo selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
            </div>
            <div className={cl.commentWrap}>
                <ProductComments/>
            </div>
        </div>
    );
};

export default ProductWrap