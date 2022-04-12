import React, {FC, useEffect, useState} from 'react';
//@ts-ignore
import cl from './Filter.module.css'
import Gender from "./Sections/Gender/Gender";
import Brand from "./Sections/Brand/Brand";
import Color from "./Sections/Color/Color";
import Season from "./Sections/Season/Season";
import Section from "./Section/Section";
import Price from "./Sections/Price/Price";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {setNicePrice} from "../../../utils/setNicePrice";
import {appImages} from "../../../dataStorage/images/App";
import {useActions} from "../../../hooks/useActions";

const Filter: FC = () => {
    const {currency} = useTypedSelector(state => state.app)
    const {setFilter, setCatalogPage, setSearch} = useActions.useProductActions()

    return (
        <div className={cl.wrap}>
            <div className={cl.header}>
                <h2>Filter</h2>
                <img
                    src={appImages.deleteBtn}
                    className={cl.deleteBtn}
                    onClick={() => {
                        setFilter({
                            price: [55 * currency.exchangeRate, 205 * currency.exchangeRate],
                            gender: [] as string[],
                            season: [] as string[],
                            color: [] as string[],
                            brand: [] as string[]
                        })
                        setCatalogPage(1)
                        setSearch('')
                    }}
                />
            </div>

            <Section sectionName={'Price'} component={<Price min={Math.floor(setNicePrice(59.99 * currency.exchangeRate))} max={Math.ceil(setNicePrice(199.99 * currency.exchangeRate))}/>}/>
            <hr className={cl.sectionDivider}/>
            <Section sectionName={'Gender'} component={<Gender/>}/>
            <hr className={cl.sectionDivider}/>
            <Section sectionName={'Brand'} component={<Brand/>}/>
            <hr className={cl.sectionDivider}/>
            <Section sectionName={'Color'} component={<Color/>}/>
            <hr className={cl.sectionDivider}/>
            <Section sectionName={'Season'} component={<Season/>}/>
        </div>
    );
};

export default Filter