import React, {FC} from 'react';
//@ts-ignore
import cl from './Brand.module.css'
import {brandImages} from "../../../../../dataStorage/images/Catalog/Brand";

const Brand: FC = () => {
    return (
        <div className={cl.wrap}>
            {
                brandImages.map(brand =>
                    <div key={brand} className={cl.brandWrap}>
                        <img src={brand} className={cl.brandImg}/>
                    </div>
                )
            }
        </div>
    );
};

export default Brand