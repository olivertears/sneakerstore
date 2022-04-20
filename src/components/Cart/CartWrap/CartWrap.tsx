import React, {FC, useEffect, useState} from 'react';
//@ts-ignore
import cl from './CartWrap.module.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {IProduct} from "../../../models/IProduct";
import {useActions} from "../../../hooks/useActions";
import {ISize} from "../../../models/ISize";
import {setNicePrice} from "../../../utils/setNicePrice";
import {appImages} from "../../../dataStorage/images/App";
import ProductService from "../../../api/ProductService";
import {productPageImages} from "../../../dataStorage/images/ProductPage";
import {RouteNames} from "../../../router";
import {useNavigate} from "react-router-dom";
import CustomInputTypeNumber from "../CustomInputTypeNumber/CustomInputTypeNumber";

const CartWrap: FC = () => {
    const {products, sizes} = useTypedSelector(state => state.product)
    const {cart} = useTypedSelector(state => state.customer)
    const {currency} = useTypedSelector(state => state.app)
    const {setSizes, setProducts, getProduct, getSize, removeProduct, setSelectedProduct, getSizes} = useActions.useProductActions()
    const {getComments} = useActions.useCommentActions()
    const {setCart} = useActions.useCustomerActions()
    const {setAppLoader} = useActions.useAppActions()

    const [totalPrice, setTotalPrice] = useState<number>(0)

    const navigate = useNavigate()

    useEffect(() => {
        setProducts([] as IProduct[])
        setSizes([] as ISize[])
        setAppLoader(true)
        const cartArr: string[] = JSON.parse(localStorage.getItem('cart') || '')
        cartArr.length && cartArr.forEach(sizeId => getSize(sizeId))
    }, [])

    useEffect(() => {
        setProducts([] as IProduct[])
        sizes.length
            ? sizes.length === cart.length && sizes.forEach((size, idx) => {
            console.log(idx)
            getProduct(size.productId)
            size.id === sizes[sizes.length - 1].id && setAppLoader(false)
        })
            : setAppLoader(false)
    }, [sizes])

    useEffect(() => {
        setTotalPrice(products.reduce((total, product) => total + setNicePrice(product.price * currency.exchangeRate), 0))
    }, [products, currency])

    return (
        <div className={cl.wrap}>
            <h5>CART</h5>

            {sizes.length === 0 && <h1 className={cl.cartIsEmpty}>Cart is empty :(</h1>}

            {products.length > 0 && products.length === sizes.length && sizes.map((size, idx) =>
                <div id={size.id} key={size.id} className={cl.productWrap}>
                    <div className={cl.infoWrap}>
                        <h1>{products[idx].name}</h1>
                        <h2>{currency.symbol}{setNicePrice(products[idx].price * currency.exchangeRate)}</h2>
                        <h3 className={cl.size}>{size.size}</h3>
                    </div>

                    <CustomInputTypeNumber
                        key={size.id}
                        maxValue={size.amount}
                        productPrice={setNicePrice(products[idx].price * currency.exchangeRate)}
                        totalPrice={totalPrice}
                        setTotalPrice={setTotalPrice}
                    />

                    <img
                        src={products[idx].photos[0]}
                        className={cl.preview}
                         onClick={() => {
                             setSelectedProduct(products[idx])
                             getComments(products[idx].id)
                             getSizes(products[idx].id)
                             navigate(RouteNames.CATALOG + '/' + products[idx].id)
                         }}
                    />
                    {size.amount > 0 || <img src={productPageImages.soldOut} className={cl.soldOut}/>}

                    <img
                        src={appImages.deleteBtn}
                        className={cl.deleteBtn}
                        onClick={(e) => {
                            e.stopPropagation()
                            // @ts-ignore
                            document.getElementById(size.id).classList.add(`${cl.deletedProduct}`)
                            setTimeout(() => {
                                setSizes(sizes.filter(s => s.id !== size.id))
                                setCart(cart.filter(item => item !== size.id))
                            }, 500)
                        }}
                    />
                </div>
            )}

            {sizes.length === 0 ||
              <div className={cl.orderWrap}>
                <button className={cl.makeAnOrderBtn}>MAKE AN ORDER</button>
                <h1 className={cl.totalPrice}> TOTAL PRICE: {currency.symbol}{totalPrice}</h1>
              </div>
            }
        </div>
    );
};

export default CartWrap