import React, {FC} from 'react';
import Filter from "../Filter/Filter";
import ProductList from "../ProductList/ProductList";
//@ts-ignore
import cl from './CatalogWrap.module.css'
import ChangeLayoutBtn from "../ChangeLayoutBtn/ChangeLayoutBtn";
import PageNumbers from "../PageNumbers/PageNumbers";
import Selector from "../Selector/Selector";

const CatalogWrap: FC = () => {
    return (
        <div className={cl.wrap}>
            <div>
                <Filter/>
            </div>
            <div className={cl.contentRight}>
                <div className={cl.contentRightFirstLine}>
                    <Selector selectorArray={['Popularity', 'Rating', 'Price ↑', 'Price ↓']} selectorName={'Sort by:'}/>
                    <Selector selectorArray={[12, 24, 36]} selectorName={'Show:'}/>
                    <div className={cl.radioBtnWrap}>
                        <ChangeLayoutBtn radioLayout={'grid'}/>
                        <ChangeLayoutBtn radioLayout={'list'}/>
                    </div>
                </div>
                <div className={cl.productWrap}>
                    <PageNumbers/>
                    <ProductList/>
                    <PageNumbers/>
                </div>
            </div>
        </div>
    );
};

export default CatalogWrap