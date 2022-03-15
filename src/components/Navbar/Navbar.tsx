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

    const {setPage} = useActions()
    const {page} = useTypedSelector(state => state.app)
    const {auth} = useTypedSelector(state => state.customer)

    const favourites: number = 42
    const cart: number = 1

    useEffect(() => {
        setPage(localStorage.getItem('page') as string || 'MAIN')
    }, [])

    return (
        <div className={cl.wrap}>
            <h1
                className={ page === 'MAIN' ? cl.selectedPage : cl.page}
                onClick={() => {
                    setPage('MAIN')
                    navigate(RouteNames.MAIN)
                }}
            >
                MAIN
            </h1>
            <h1
                className={ page === 'CATALOG' ? cl.selectedPage : cl.page}
                onClick={() => {
                    setPage('CATALOG')
                    navigate(RouteNames.CATALOG)
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
                    src={page === 'PROFILE' || page === 'PERSONAL_DATA' || page === 'ORDERS' || page === 'AUTHORIZATION' ? navbarImages.profileOn : navbarImages.profileOff}
                    onClick={() => {
                        if(auth) {
                            setPage('PROFILE')
                            navigate(RouteNames.PROFILE)
                        } else {
                            setPage('AUTHORIZATION')
                            navigate(RouteNames.AUTHORIZATION)
                        }
                    }}
                />
                <div>
                    <img className={cl.imgLink}
                         src={page === 'FAVOURITES' ? navbarImages.favouritesOn : navbarImages.favouritesOff}
                         onClick={() => {
                             setPage('FAVOURITES')
                             navigate(RouteNames.FAVOURITES)
                         }}
                    />
                    <div className={cl.circle}>
                        <span className={cl.numberInCircle}>{favourites}</span>
                    </div>
                </div>
                <div>
                    <img className={cl.imgLink}
                         src={page === 'CART' ? navbarImages.cartOn : navbarImages.cartOff}
                         onClick={() => {
                             setPage('CART')
                             navigate(RouteNames.CART)
                         }}
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