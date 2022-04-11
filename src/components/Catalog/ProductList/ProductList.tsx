import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
//@ts-ignore
import cl from './ProductList.module.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import CatalogLoader from "../../CatalogLoader";
import {setNicePrice} from "../../../utils/setNicePrice";
import {useActions} from "../../../hooks/useActions";
import {sliceProducts} from "../../../utils/catalog/sliceProducts";

const ProductList: FC = () => {
    const {catalogLoader} = useTypedSelector(state => state.app)
    const {products, filter, sort, showAmount, catalogPage, layout} = useTypedSelector(state => state.product)
    const {currency} = useTypedSelector(state => state.app)

    const {getProducts} = useActions.useProductActions()


    useEffect(() => {
        getProducts(sort, filter, currency.exchangeRate)
    }, [sort, filter, showAmount, catalogPage])

    return (
        <div className={`${layout === 'grid' ? cl.gridWrap : cl.listWrap}`}>
            {catalogLoader &&
              <div className={cl.loader}>
                <CatalogLoader/>
              </div>
            }

            {products.length === 0 && <h1 className={cl.textNoSneakers}>No sneakers matching your request :(</h1>}

            {sliceProducts(products, showAmount, catalogPage).map(product =>
                <div key={product.id} className={`${layout === 'grid' ? cl.gridProduct : cl.listProduct}`}>
                    <img key={product.id} src={product.photos[0]} className={`${layout === 'grid' ? cl.gridPreview : cl.listPreview}`}/>
                    <div className={`${layout === 'grid' ? cl.gridText : cl.listText}`}>
                        <h3>{product.name}</h3>
                        <h2>{currency.symbol}{setNicePrice(product.price * currency.exchangeRate)}</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList