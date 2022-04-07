import React, {Dispatch, FC, SetStateAction} from 'react';
//@ts-ignore
import cl from './ProductList.module.css'

interface IProductListProps {
    layout: string
}

const ProductList: FC<IProductListProps> = ({layout}) => {
    return (
        <div className={`${layout === 'grid' ? cl.gridWrap : cl.listWrap}`}>
            <div className={cl.product}></div>
            <div className={cl.product}></div>
            <div className={cl.product}></div>
            <div className={cl.product}></div>
            <div className={cl.product}></div>
            <div className={cl.product}></div>
            <div className={cl.product}></div>
            <div className={cl.product}></div>
            <div className={cl.product}></div>
            <div className={cl.product}></div>
            <div className={cl.product}></div>
            <div className={cl.product}></div>
        </div>
    );
};

export default ProductList