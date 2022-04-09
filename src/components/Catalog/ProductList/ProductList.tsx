import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
//@ts-ignore
import cl from './ProductList.module.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import CatalogLoader from "../../CatalogLoader";
import {catalog} from "../../../catalog";
import axios from "axios";

interface IProductListProps {
    layout: string
}

const ProductList: FC<IProductListProps> = ({layout}) => {
    const {catalogLoader} = useTypedSelector(state => state.app)
    const {authorization} = useTypedSelector(state => state.customer)

    // useEffect(() => {
    //     axios.post('https://apisneakerstore.herokuapp.com/api/products/list', catalog, {
    //         headers: {
    //             Authorization: 'Basic ' + authorization
    //         },
    //     })
    // }, [])

    return (
        <div className={`${layout === 'grid' ? cl.gridWrap : cl.listWrap}`}>
            <div className={cl.loader}>
                {catalogLoader && <CatalogLoader/>}
            </div>

            {/*{catalog.map(product =>*/}
            {/*    <div key={product.id} className={cl.product}>*/}
            {/*        /!*<img src={product.links[0]} className={cl.preview}/>*!/*/}
            {/*    </div>*/}
            {/*)}*/}
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