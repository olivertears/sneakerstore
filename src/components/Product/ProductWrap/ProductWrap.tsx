import React, {FC, useEffect, useState} from 'react';
//@ts-ignore
import cl from './ProductWrap.module.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import ProductSlider from "../ProductSlider/ProductSlider";
import ProductPreview from "../ProductPreview/ProductPreview";
import ProductInfo from "../ProductInfo/ProductInfo";
import ProductComments from "../ProductComments/ProductComments";

const ProductWrap: FC = () => {
    const {selectedProduct} = useTypedSelector(state => state.product)

    const [activeImgIndex, setActiveImgIndex] = useState<number>( 0);

    return (
        <div className={cl.wrap}>
            <div className={cl.sliderWrap}>
                <ProductSlider activeImgIndex={activeImgIndex} setActiveImgIndex={setActiveImgIndex}/>
            </div>
            <div className={cl.previewWrap}>
                <ProductPreview activeImgIndex={activeImgIndex}/>
            </div>
            <div className={cl.infoWrap}>
                <ProductInfo/>
            </div>
            <div className={cl.commentWrap}>
                <ProductComments/>
            </div>
        </div>
    );
};

export default ProductWrap