import React, {FC, useEffect} from 'react';
import CatalogWrap from "../components/Catalog/CatalogWrap/CatalogWrap";
import {useActions} from "../hooks/useActions";

const Catalog: FC = () => {
    const {setSort, setFilter, setShowAmount, setCatalogPage, setLayout} = useActions.useProductActions()

    useEffect(() => {
        localStorage.getItem('sort') && setSort(JSON.parse(localStorage.getItem('sort') || ''))
        localStorage.getItem('showAmount') && setShowAmount(JSON.parse(localStorage.getItem('showAmount') || ''))
        localStorage.getItem('layout') && setLayout(JSON.parse(localStorage.getItem('layout') || ''))
        localStorage.getItem('filter') && setFilter(JSON.parse(localStorage.getItem('filter') || ''))
        localStorage.getItem('catalogPage') && setCatalogPage(JSON.parse(localStorage.getItem('catalogPage') || ''))
    }, [])

    return (
        <div>
            <CatalogWrap/>
        </div>
    );
};

export default Catalog