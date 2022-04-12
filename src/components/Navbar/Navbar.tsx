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

const Navbar: FC = () => {
    const navigate = useNavigate()

    const {setPage} = useActions.useAppActions()
    const {setFilter, setCatalogPage} = useActions.useProductActions()

    const {page, currency} = useTypedSelector(state => state.app)
    const {auth} = useTypedSelector(state => state.customer)

    const favourites: number = 42
    const cart: number = 1

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
                         onClick={() => navigate(RouteNames.FAVOURITES)}
                    />
                    <div className={cl.circle}>
                        <span className={cl.numberInCircle}>{favourites}</span>
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