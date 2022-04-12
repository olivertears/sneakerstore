import React, {FC} from 'react';
//@ts-ignore
import cl from './Brand.module.css'
import {brandImages} from "../../../../../dataStorage/images/Catalog/Brand";
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";
import {useActions} from "../../../../../hooks/useActions";

const Brand: FC = () => {
    const {filter} = useTypedSelector(state => state.product)
    const {setFilter, setCatalogPage} = useActions.useProductActions()

    return (
        <div className={cl.wrap}>
            {
                brandImages.map(brand =>
                    <div
                        key={brand.img}
                        className={`${cl.brandWrap} ${filter.brand.includes(brand.brand) && cl.selectedBrand}`}
                        onClick={() => {
                            filter.brand.includes(brand.brand)
                                ? setFilter({...filter, brand: filter.brand.filter(item => item !== brand.brand)})
                                : setFilter({...filter, brand: [...filter.brand, brand.brand]})
                            setCatalogPage(1)
                        }}
                    >
                        <img src={brand.img} className={cl.brandImg}/>
                    </div>
                )
            }
        </div>
    );
};

export default Brand