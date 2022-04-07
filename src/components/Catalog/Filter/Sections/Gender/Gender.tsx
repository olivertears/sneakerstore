import React, {FC} from 'react';
//@ts-ignore
import cl from './Gender.module.css'
import {genderImages} from "../../../../../dataStorage/images/Catalog/Gender";

const Gender: FC = () => {
    return (
        <div className={cl.wrap}>
            {
                genderImages.map(gender =>
                    <div key={gender} className={cl.genderWrap}>
                        <img src={gender} className={cl.genderImg}/>
                    </div>
                )
            }
        </div>
    );
};

export default Gender