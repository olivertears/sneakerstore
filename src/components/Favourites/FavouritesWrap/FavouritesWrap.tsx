import React, {FC, useEffect} from 'react';
//@ts-ignore
import cl from './FavouritesWrap.module.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../../router";
import {setNicePrice} from "../../../utils/setNicePrice";
import {appImages} from "../../../dataStorage/images/App";
import {IProduct} from "../../../models/IProduct";

const FavouritesWrap: FC = () => {
    const {currency} = useTypedSelector(state => state.app)
    const {products} = useTypedSelector(state => state.product)
    const {favourites} = useTypedSelector(state => state.customer)
    const {setAppLoader} = useActions.useAppActions()
    const {setFavourites} = useActions.useCustomerActions()
    const {getComments} = useActions.useCommentActions()
    const {setSelectedProduct, getProduct, removeProduct, setProducts, getSizes} = useActions.useProductActions()
    const navigate = useNavigate()

    useEffect(() => {
        setProducts([] as IProduct[])
        setAppLoader(true)
        const favArr: string[] = JSON.parse(localStorage.getItem('favourites') || '')
        favArr.forEach(fav => {
            getProduct(fav)
            fav === favArr[favArr.length - 1] && setAppLoader(false)
        })
    }, [])

    return (
        <div className={cl.wrap}>
            <h5>MY FAVOURITE SNEAKERS</h5>

            {products.length === 0 && <h1 className={cl.textNoSneakers}>Favourite list is empty :(</h1>}

            {products.map(product =>
                <div
                    id={product.id}
                    key={product.id}
                    className={cl.product}
                    onClick={() => {
                        setSelectedProduct(product)
                        getComments(product.id)
                        getSizes(product.id)
                        navigate(RouteNames.CATALOG + '/' + product.id)
                    }}
                >
                    <div className={cl.imageWrap}>
                        <img key={product.id} src={product.photos[0]} className={cl.preview}/>
                    </div>

                    <div className={cl.productInfoWrap}>
                        <h1>{product.name}</h1>
                        <h2>{currency.symbol}{setNicePrice(product.price * currency.exchangeRate)}</h2>
                    </div>

                    <div
                        className={cl.deleteBtnWrap}
                        onClick={(e) => {
                            e.stopPropagation()
                            // @ts-ignore
                            document.getElementById(product.id).classList.add(`${cl.deletedProduct}`)
                            setTimeout(() => {
                                removeProduct(product.id)
                                setFavourites(favourites.filter(fav => fav !== product.id))
                            }, 500)
                        }}
                    >
                        <img src={appImages.deleteBtn} className={cl.deleteBtn}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FavouritesWrap