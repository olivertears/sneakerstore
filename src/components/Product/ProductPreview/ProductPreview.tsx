import React, {Dispatch, FC, SetStateAction} from 'react';
// @ts-ignore
import cl from './ProductPreview.module.css';
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface IProductPreviewProps {
    activeImgIndex: number
}

const ProductPreview: FC<IProductPreviewProps> = ({activeImgIndex}) => {
    const {selectedProduct} = useTypedSelector(state => state.product)

    return (
        <div>
            <img src={selectedProduct.photos[activeImgIndex]} className={cl.preview}/>
        </div>
    );
};

export default ProductPreview