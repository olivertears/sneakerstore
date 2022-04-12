import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
//@ts-ignore
import cl from './ProductList.module.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import CatalogLoader from "../../CatalogLoader";
import {setNicePrice} from "../../../utils/setNicePrice";
import {useActions} from "../../../hooks/useActions";
import {sliceProducts} from "../../../utils/catalog/sliceProducts";
import {profileImages} from "../../../dataStorage/images/Profile";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../../router";

const ProductList: FC = () => {
    const {catalogLoader, currency} = useTypedSelector(state => state.app)
    const {products, filter, sort, showAmount, catalogPage, layout, search} = useTypedSelector(state => state.product)
    const {favourites} = useTypedSelector(state => state.customer)
    const {setFavourites} = useActions.useCustomerActions()
    const {getProducts} = useActions.useProductActions()
    const navigate = useNavigate()

    useEffect(() => {
        getProducts(search, sort, filter, currency.exchangeRate)
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
                <div
                    key={product.id}
                    className={`${cl.product} ${layout === 'grid' ? cl.gridProduct : cl.listProduct}`}
                    onClick={() => navigate(RouteNames.CATALOG + '/' + product.id)}
                >
                    <div className={cl.imgWrap}>
                        <img key={product.id} src={product.photos[0]} className={`${layout === 'grid' ? cl.gridPreview : cl.listPreview}`}/>
                        <img
                            src={profileImages.favourites}
                            className={`${cl.favouriteImg} ${favourites.includes(product.id) && cl.selectedFavourite} ${layout === 'grid' && cl.favouriteImgGrid}`}
                            onClick={() => favourites.includes(product.id)
                                ? setFavourites(favourites.filter(fav => fav !== product.id))
                                : setFavourites([...favourites, product.id])
                            }
                        />
                    </div>
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