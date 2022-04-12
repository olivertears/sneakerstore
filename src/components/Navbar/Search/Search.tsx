import React, {ChangeEvent, useEffect} from 'react';
import {navbarImages} from "../../../dataStorage/images/Navbar";
// @ts-ignore
import cl from './Search.module.css'
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../../router";

const Search = () => {
    const {setSearch, getProducts} = useActions.useProductActions()
    const {search, sort, filter} = useTypedSelector(state => state.product)
    const {currency} = useTypedSelector(state => state.app)
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.getItem('search') && setSearch(JSON.parse(localStorage.getItem('search') || ''))
    }, [])

    return (
        <div className={cl.wrap}>
            <input
                className={cl.search}
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            />
            <img
                className={cl.magnifier}
                src={navbarImages.magnifier}
                onClick={() => {
                    navigate(RouteNames.CATALOG)
                    getProducts(search, sort, filter, currency.exchangeRate)
                }}
            />
        </div>
    );
};

export default Search;