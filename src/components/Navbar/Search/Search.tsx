import React from 'react';
import {navbarImages} from "../../../dataStorage/images/Navbar";
// @ts-ignore
import cl from './Search.module.css'

const Search = () => {
    return (
        <div className={cl.wrap}>
            <input className={cl.search}/>
            <img className={cl.magnifier} src={navbarImages.magnifier} />
        </div>
    );
};

export default Search;