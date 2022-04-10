import React, {FC, useEffect} from 'react';
import CatalogWrap from "../components/Catalog/CatalogWrap/CatalogWrap";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {IFilter} from "../models/IFilter";

const Catalog: FC = () => {
    const {setFilter} = useActions.useProductActions()

    // useEffect(() => {
    //     setFilter(JSON.parse(localStorage.getItem('filter') || '') as IFilter)
    // })

    return (
        <div>
            <CatalogWrap/>
        </div>
    );
};

export default Catalog