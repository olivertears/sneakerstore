import React, {FC, useEffect, useState} from 'react';
//@ts-ignore
import cl from './ArrowToTop.module.css'
import {appImages} from "../../../dataStorage/images/App";
import {scrollToTop} from "../../../utils/scrolls/scrollToTop";

const ArrowToTop: FC = () => {
    return (
        <div
            className={cl.wrap}
            onClick={scrollToTop}
        >
            <img src={appImages.arrowToTop}/>
        </div>
    );
};

export default ArrowToTop