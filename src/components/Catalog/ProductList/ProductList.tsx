import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
//@ts-ignore
import cl from './ProductList.module.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import CatalogLoader from "../../CatalogLoader";
import {setNicePrice} from "../../../utils/setNicePrice";
import {useActions} from "../../../hooks/useActions";

interface IProductListProps {
    layout: string
}

const ProductList: FC<IProductListProps> = ({layout}) => {
    const {catalogLoader} = useTypedSelector(state => state.app)
    const {products, filter, sort, showAmount, catalogPage} = useTypedSelector(state => state.product)
    const {currency} = useTypedSelector(state => state.app)

    const {getProducts} = useActions.useProductActions()


    useEffect(() => {
        getProducts(sort, filter, showAmount, catalogPage)
    }, [sort, filter, showAmount, catalogPage])

    return (
        <div className={`${layout === 'grid' ? cl.gridWrap : cl.listWrap}`}>
            <div className={cl.loader}>
                {catalogLoader && <CatalogLoader/>}
            </div>

            {products.map(product =>
                <div key={product.id} className={cl.product}>
                    <img key={product.id} src={product.photos[0]} className={cl.preview}/>
                    <div className={cl.text}>
                        <h3>{product.name}</h3>
                        <h2>{currency.symbol}{setNicePrice(product.price * currency.exchangeRate)}</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList