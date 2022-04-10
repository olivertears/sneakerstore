import React, {FC} from 'react';
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

const Filter: FC = () => {
    const {currency} = useTypedSelector(state => state.app)

    return (
        <div className={cl.wrap}>
            <div className={cl.header}>
                <h2>Filter</h2>
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