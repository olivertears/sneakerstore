import React, {FC} from 'react';
//@ts-ignore
import cl from './Gender.module.css'
import {genderImages} from "../../../../../dataStorage/images/Catalog/Gender";
import {useActions} from "../../../../../hooks/useActions";
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";

const Gender: FC = () => {
    const {filter} = useTypedSelector(state => state.catalog)
    const {setFilter, setCatalogPage} = useActions.useCatalogActions()

    return (
        <div className={cl.wrap}>
            {
                genderImages.map(gender =>
                    <div
                        key={gender.img}
                        className={`${cl.genderWrap} ${filter.gender.includes(gender.sex) && cl.selectedGender}`}
                        onClick={() => {
                            filter.gender.includes(gender.sex)
                                ? setFilter({...filter, gender: filter.gender.filter(item => item !== gender.sex)})
                                : setFilter({...filter, gender: [...filter.gender, gender.sex]})
                            setCatalogPage(1)
                        }}
                    >
                        <img src={gender.img} className={cl.genderImg}/>
                    </div>
                )
            }
        </div>
    );
};

export default Gender