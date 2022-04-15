import React, {FC, useEffect} from 'react';
import CurrencyChange from "./CurrencyChange/CurrencyChange";
import Search from "./Search/Search";
// @ts-ignore
import {navbarImages} from "../../dataStorage/images/Navbar"
// @ts-ignore
import cl from "./Navbar.module.css"
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../router";
import {IProduct} from "../../models/IProduct";

const Navbar: FC = () => {
    const navigate = useNavigate()

    const {setPage} = useActions.useAppActions()
    const {setProducts} = useActions.useProductActions()
    const {setFilter, setCatalogPage} = useActions.useCatalogActions()
    const {setFavourites} = useActions.useCustomerActions()

    const {page, currency} = useTypedSelector(state => state.app)
    const {auth, favourites} = useTypedSelector(state => state.customer)

    const cart: number = 1

    useEffect(() => {
        localStorage.getItem('favourites') && setFavourites(JSON.parse(localStorage.getItem('favourites') || '') as string[])
    }, [])

    useEffect(() => {
        setPage(window.location.pathname.slice(1).toUpperCase() || '')
    }, [window.location.pathname])

    useEffect(() => {
        page === 'PROFILE' && navigate(RouteNames.PROFILE)
    }, [page])

    return (
        <div className={cl.wrap}>
            <h1
                className={ page === '' ? cl.selectedPage : cl.page}
                onClick={() => navigate(RouteNames.MAIN)}
            >
                MAIN
            </h1>
            <h1
                className={ page === 'CATALOG' ? cl.selectedPage : cl.page}
                onClick={() => {
                    navigate(RouteNames.CATALOG)
                    setFilter({
                        price: [55 * currency.exchangeRate, 205 * currency.exchangeRate],
                        gender: [] as string[],
                        season: [] as string[],
                        color: [] as string[],
                        brand: [] as string[]
                    })
                    setCatalogPage(1)
                }}
            >
                CATALOG
            </h1>

            <img className={cl.logo} src={navbarImages.logo}/>

            <div className={cl.wrapRight}>
                <Search/>
                <CurrencyChange />
                <img
                    className={cl.imgLink}
                    src={page === 'PROFILE' || page === 'AUTHORIZATION' ? navbarImages.profileOn : navbarImages.profileOff}
                    onClick={() => {
                        auth
                            ?
                            navigate(RouteNames.PROFILE)
                            :
                            navigate(RouteNames.AUTHORIZATION)

                    }}
                />
                <div>
                    <img className={cl.imgLink}
                         src={page === 'FAVOURITES' ? navbarImages.favouritesOn : navbarImages.favouritesOff}
                         onClick={() => {
                             setProducts([] as IProduct[])
                             navigate(RouteNames.FAVOURITES)
                         }}
                    />
                    <div className={cl.circle}>
                        <span className={cl.numberInCircle}>{favourites.length}</span>
                    </div>
                </div>
                <div>
                    <img className={cl.imgLink}
                         src={page === 'CART' ? navbarImages.cartOn : navbarImages.cartOff}
                         onClick={() => navigate(RouteNames.CART)}
                    />
                    <div className={cl.circle}>
                        <span className={cl.numberInCircle}>{cart}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar