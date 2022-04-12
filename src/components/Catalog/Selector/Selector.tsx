import React, {FC, useEffect, useState} from 'react';
//@ts-ignore
import cl from './Selector.module.css'
import {useActions} from "../../../hooks/useActions";

interface ISelectorProps {
    selectorArray: string[] | number[]
    selectorName: string
}

const Selector: FC<ISelectorProps> = ({selectorArray, selectorName}) => {
    const {setSort, setShowAmount, setCatalogPage} = useActions.useProductActions()

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [sortType, setSortType] = useState<string | number>(selectorArray[0])

    useEffect(() => {
        localStorage.getItem('sort') && typeof sortType === 'string' && setSortType(JSON.parse(localStorage.getItem('sort') || ''))
        localStorage.getItem('showAmount') && typeof sortType === 'number' && setSortType(JSON.parse(localStorage.getItem('showAmount') || ''))
    }, [])

    useEffect(() => {
        typeof sortType === 'string' ? setSort(sortType) : setShowAmount(sortType)
        setCatalogPage(1)
    }, [sortType])

    return (
        <div className={cl.wrap}>
            <div className={cl.header}>
                <div className={cl.listName}>
                    <h2>{selectorName}</h2>
                </div>
                <div
                    className={`${cl.listType} ${isOpen && cl.listOpen}`}
                    onClick={() => setIsOpen(isOpen ? false : true)}
                >
                    <h2>{sortType}</h2>
                </div>
            </div>
            <div className={cl.list}>
                {
                    isOpen && selectorArray.map(sort =>
                        <div
                            key={sort}
                            className={`${cl.option}`}
                            onClick={() => {
                                sort !== sortType && setSortType(sort)
                                setIsOpen(false)
                            }}
                        >
                            <h2>
                                {sort}
                            </h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Selector