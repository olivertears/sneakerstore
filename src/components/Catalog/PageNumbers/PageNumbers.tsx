import React, {FC, useEffect} from 'react';
//@ts-ignore
import cl from './PageNumbers.module.css'
import {pageChangerImages} from "../../../dataStorage/images/Catalog/PageChanger";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";

const PageNumbers: FC = () => {
    const {catalogPage, products, showAmount} = useTypedSelector(state => state.product)
    const {setCatalogPage} = useActions.useProductActions()

    return (
        <div className={cl.wrap}>
            <img src={pageChangerImages.twoArrows} className={cl.arrowLeft} onClick={() => setCatalogPage(1)}/>
            <img src={pageChangerImages.oneArrow} className={cl.arrowLeft} onClick={() => setCatalogPage(catalogPage > 1 ? catalogPage - 1 : catalogPage)}/>

            {catalogPage === Math.ceil(products.length / showAmount) && Math.ceil(products.length / showAmount) - 2 > 0 && <h2 onClick={() => setCatalogPage(Math.ceil(products.length / showAmount) - 2)}>{Math.ceil(products.length / showAmount) - 2}</h2>}

            {catalogPage > 1 && <h2 onClick={() => setCatalogPage(catalogPage - 1)}>{catalogPage - 1}</h2>}
            <h2 className={cl.selectedPage}>{catalogPage}</h2>
            {catalogPage < Math.ceil(products.length / showAmount) && <h2 onClick={() => setCatalogPage(catalogPage + 1)}>{catalogPage + 1}</h2>}

            {catalogPage === 1 && catalogPage + 2 <= Math.ceil(products.length / showAmount) && <h2 onClick={() => setCatalogPage(catalogPage + 2)}>{catalogPage + 2}</h2>}

            <img src={pageChangerImages.oneArrow} className={cl.arrowRight} onClick={() => setCatalogPage(catalogPage < Math.ceil(products.length / showAmount) ? catalogPage + 1 : catalogPage)}/>
            <img src={pageChangerImages.twoArrows} className={cl.arrowRight} onClick={() => setCatalogPage(Math.ceil(products.length / showAmount))}/>
        </div>
    );
};

export default PageNumbers