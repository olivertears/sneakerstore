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
                    <h3>The best price on the market</h3>
                </div>
                <div className={cl.contentWrap}>
                    <img src={advantageImages.delivery}/>
                    <h2>Fast & Free</h2>
                    <h3>Delivery to any city in one day</h3>
                </div>
            </div>

            <div className={cl.twoItemsWrap}>
                <div className={cl.contentWrap}>
                    <img src={advantageImages.quality}/>
                    <h2>100% Original</h2>
                    <h3>Official partner of brands</h3>
                </div>
                <div className={cl.contentWrap}>
                    <img src={advantageImages.card}/>
                    <h2>Installment</h2>
                    <h3>Installments up to 12 months</h3>
                </div>
            </div>
        </div>
    );
};

export default Advantages