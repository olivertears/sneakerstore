import React, {FC, useEffect} from 'react';
//@ts-ignore
import cl from './CartWrap.module.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {IProduct} from "../../../models/IProduct";
import {useActions} from "../../../hooks/useActions";
import {ISize} from "../../../models/ISize";
import {setNicePrice} from "../../../utils/setNicePrice";

const CartWrap: FC = () => {
    const {products, sizes} = useTypedSelector(state => state.product)
    const {cart} = useTypedSelector(state => state.customer)
    const {currency} = useTypedSelector(state => state.app)
    const {setSizes, setProducts, getProduct, getSize} = useActions.useProductActions()
    const {setAppLoader} = useActions.useAppActions()

    useEffect(() => {
        setProducts([] as IProduct[])
        setSizes([] as ISize[])
        setAppLoader(true)
        const cart: string[] = JSON.parse(localStorage.getItem('cart') || '')
        cart.length
            ? cart.forEach(sizeId => {
                getSize(sizeId)
                sizeId === cart[cart.length - 1] && setAppLoader(false)
            })
            :
            setAppLoader(false)
    }, [])

    useEffect(() => {
        sizes.length
            ? sizes.length === cart.length && sizes.forEach(size => {
                getProduct(size.productId)
                size.id === sizes[sizes.length - 1].id && setAppLoader(false)
            })
            : setAppLoader(false)
    }, [sizes])


    return (
        <div className={cl.wrap}>
            <h5>CART</h5>

            {sizes.length === 0 && <h1 className={cl.cartIsEmpty}>Cart is empty :(</h1>}

            {products.length > 0 && products.length === sizes.length && sizes.map((size, idx) =>
                <div key={size.id} className={cl.productWrap}>
                    <div className={cl.infoWrap}>
                        <h1>{products[idx].name}</h1>
                        <h2>{currency.symbol}{setNicePrice(products[idx].price * currency.exchangeRate)}</h2>
                        <h3 className={cl.size}>{size.size}</h3>
                    </div>

                    <div className={cl.amountWrap}>
                        <div className={cl.signWrap}>
                            <div className={cl.horizontalLine}/>
                            <div className={cl.verticalLine}/>
                        </div>
                        <h3 className={cl.amount}>99</h3>
                        <div className={cl.signWrap}>
                            <div className={cl.horizontalLine}/>
                        </div>
                    </div>

                    <img src={products[idx].photos[0]} className={cl.preview}/>
                </div>
            )}

            {sizes.length === 0 ||
              <div className={cl.orderWrap}>
                <button className={cl.makeAnOrderBtn}>MAKE AN ORDER</button>
                <h1 className={cl.totalPrice}> TOTAL PRICE: {currency.symbol}{1000}</h1>
              </div>
            }
        </div>
    );
};

export default CartWrap