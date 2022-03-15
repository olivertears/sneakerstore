import React, {FC} from 'react';
import {advantageImages} from "../../../dataStorage/images/Main/Advantages";
// @ts-ignore
import cl from './Advantages.module.css'

const Advantages: FC = () => {
    return (
        <div className={cl.wrap}>
            <div className={cl.twoItemsWrap}>
                <div className={cl.contentWrap}>
                    <img src={advantageImages.price}/>
                    <h2>Nice Price</h2>
                    <h4>The best price on the market</h4>
                </div>
                <div className={cl.contentWrap}>
                    <img src={advantageImages.delivery}/>
                    <h2>Fast & Free</h2>
                    <h4>Delivery to any city in one day</h4>
                </div>
            </div>

            <div className={cl.twoItemsWrap}>
                <div className={cl.contentWrap}>
                    <img src={advantageImages.quality}/>
                    <h2>100% Original</h2>
                    <h4>Official partner of brands</h4>
                </div>
                <div className={cl.contentWrap}>
                    <img src={advantageImages.card}/>
                    <h2>Installment</h2>
                    <h4>Installments up to 12 months</h4>
                </div>
            </div>
        </div>
    );
};

export default Advantages