import React, {FC} from 'react';
//@ts-ignore
import cl from './Color.module.css'
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";
import {useActions} from "../../../../../hooks/useActions";

const Color: FC = () => {
    const {filter} = useTypedSelector(state => state.catalog)
    const {setFilter, setCatalogPage} = useActions.useCatalogActions()

    const colorArray: string[] = ['black', 'white', 'red', 'pink', 'blue', 'lightskyblue', 'yellow', 'orange', 'green', 'brown', 'gray', 'purple']

    return (
        <div className={cl.wrap}>
            {
                colorArray.map(color =>
                    <div
                        key={color}
                        className={`${cl.colorWrap} ${filter.color.includes(color) && cl.selectedColor}`}
                        onClick={() => {
                            filter.color.includes(color)
                                ? setFilter({...filter, color: filter.color.filter(item => item !== color)})
                                : setFilter({...filter, color: [...filter.color, color]})
                            setCatalogPage(1)
                        }}
                    >
                        <div
                            className={cl.color}
                            style={{background: color}}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default Color