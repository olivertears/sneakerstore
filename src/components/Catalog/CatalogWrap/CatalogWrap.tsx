import React, {FC, useState} from 'react';
import Filter from "../Filter/Filter";
import List from "../Selector/Selector";
import ProductList from "../ProductList/ProductList";
//@ts-ignore
import cl from './CatalogWrap.module.css'
import ChangeLayoutBtn from "../ChangeLayoutBtn/ChangeLayoutBtn";
import PageNumbers from "../PageNumbers/PageNumbers";
import Selector from "../Selector/Selector";

const CatalogWrap: FC = () => {
    const [layout, setLayout] = useState<string>('grid')

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
                        <ChangeLayoutBtn layout={'grid'} setLayout={setLayout} currentLayout={layout}/>
                        <ChangeLayoutBtn layout={'list'} setLayout={setLayout} currentLayout={layout}/>
                    </div>
                </div>
                <PageNumbers/>
                <ProductList layout={layout}/>
                <PageNumbers/>
            </div>
        </div>
    );
};

export default CatalogWrap