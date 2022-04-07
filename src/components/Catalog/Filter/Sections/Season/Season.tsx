import React, {FC} from 'react';
//@ts-ignore
import cl from './Season.module.css'
import {seasonImages} from "../../../../../dataStorage/images/Catalog/Season";

const Season: FC = () => {
    return (
        <div className={cl.wrap}>
            {
                seasonImages.map(season =>
                    <div key={season} className={cl.seasonWrap}>
                        <img src={season} className={cl.seasonImg}/>
                    </div>
                )
            }
        </div>
    );
};

export default Season