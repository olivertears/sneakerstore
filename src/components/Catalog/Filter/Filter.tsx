import React, {FC} from 'react';
//@ts-ignore
import cl from './Filter.module.css'
import Gender from "./Sections/Gender/Gender";
import Brand from "./Sections/Brand/Brand";
import Size from "./Sections/Size/Size";
import Color from "./Sections/Color/Color";
import Season from "./Sections/Season/Season";
import Section from "./Section/Section";
import Price from "./Sections/Price/Price";

const Filter: FC = () => {
    return (
        <div className={cl.wrap}>
            <div className={cl.header}>
                <h2>Filter</h2>
            </div>

            <Section sectionName={'Price'} component={<Price min={0} max={1000}/>}/>
            <hr className={cl.sectionDivider}/>
            <Section sectionName={'Gender'} component={<Gender/>}/>
            <hr className={cl.sectionDivider}/>
            <Section sectionName={'Brand'} component={<Brand/>}/>
            <hr className={cl.sectionDivider}/>
            <Section sectionName={'Size'} component={<Size/>}/>
            <hr className={cl.sectionDivider}/>
            <Section sectionName={'Color'} component={<Color/>}/>
            <hr className={cl.sectionDivider}/>
            <Section sectionName={'Season'} component={<Season/>}/>
        </div>
    );
};

export default Filter