import React, {FC} from 'react';
//@ts-ignore
import cl from './Season.module.css'
import {seasonImages} from "../../../../../dataStorage/images/Catalog/Season";
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";
import {useActions} from "../../../../../hooks/useActions";

const Season: FC = () => {
    const {filter} = useTypedSelector(state => state.product)
    const {setFilter, setCatalogPage} = useActions.useProductActions()

    return (
        <div className={cl.wrap}>
            {
                seasonImages.map(season =>
                    <div
                        key={season.season}
                        className={`${cl.seasonWrap} ${filter.season.includes(season.season) && cl.selectedSeason}`}
                        onClick={() => {
                            filter.season.includes(season.season)
                                ? setFilter({...filter, season: filter.season.filter(item => item !== season.season)})
                                : setFilter({...filter, season: [...filter.season, season.season]})
                            setCatalogPage(1)
                        }}
                    >
                        <img src={season.img} className={cl.seasonImg}/>
                    </div>
                )
            }
        </div>
    );
};

export default Season