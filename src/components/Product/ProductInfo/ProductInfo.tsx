import React, {FC, useEffect} from 'react';
//@ts-ignore
import cl from './ProductInfo.module.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {ISize} from "../../../models/ISize";
import {setNicePrice} from "../../../utils/setNicePrice";
import {profileImages} from "../../../dataStorage/images/Profile";
import {navbarImages} from "../../../dataStorage/images/Navbar";
import {capitalizePattern} from "../../../utils/patterns/capitalizePattern";

const ProductInfo: FC = () => {
    const {selectedProduct, sizes} = useTypedSelector(state => state.product)
    const {currency} = useTypedSelector(state => state.app)
    const {favourites} = useTypedSelector(state => state.customer)
    const {setSizes} = useActions.useProductActions()
    const {setFavourites} = useActions.useCustomerActions()

    useEffect(() => {
        localStorage.getItem('sizes') && setSizes(JSON.parse(localStorage.getItem('sizes') || '') as ISize[])
    }, [])

    return (
        <div className={cl.wrap}>
            <h1 className={cl.name}>{selectedProduct.name}</h1>

            <h1>SIZES:</h1>
            <div className={cl.sizesWrap}>
                {sizes.map(size =>
                    <div key={size.id} className={cl.size}>
                        <h3>{size.size}</h3>
                    </div>
                )}
            </div>

            <h1>PRICE:</h1>
            <h2>{currency.symbol}{setNicePrice(selectedProduct.price * currency.exchangeRate)}</h2>

            <div className={cl.btnWrap}>
                <button className={cl.addToCartBtn}>ADD TO CART</button>
                <img
                    src={favourites.includes(selectedProduct.id) ? navbarImages.favouritesOn : navbarImages.favouritesOff}
                    className={cl.addToFavBtn}
                    onClick={() => favourites.includes(selectedProduct.id)
                        ? setFavourites(favourites.filter(fav => fav !== selectedProduct.id))
                        : setFavourites([...favourites, selectedProduct.id])
                }
                />
            </div>

            <div className={cl.infoWrap}>
                <h2 className={cl.infoCategoryName}>Gender</h2>
                <h3 className={cl.infoCategoryInfo}>{capitalizePattern(selectedProduct.sex.split(' ').join(', '))}</h3>

                <h2 className={cl.infoCategoryName}>Brand</h2>
                <h3 className={cl.infoCategoryInfo}>{capitalizePattern(selectedProduct.brand === 'underArmour' ? 'under armour' : selectedProduct.brand.split(' ').join(', '))}</h3>

                <h2 className={cl.infoCategoryName}>Season</h2>
                <h3 className={cl.infoCategoryInfo}>{capitalizePattern(selectedProduct.season.split(' ').join(', '))}</h3>

                <h2 className={cl.infoCategoryName}>Color</h2>
                <h3 className={cl.infoCategoryInfo}>{capitalizePattern(selectedProduct.color.split(' ').join(', '))}</h3>

                <h2 className={cl.infoCategoryName}>Origin Country</h2>
                <h3 className={cl.infoCategoryInfo}>{selectedProduct.originCountry}</h3>
            </div>
        </div>
    );
};

export default ProductInfo