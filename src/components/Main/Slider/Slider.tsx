import React, {FC} from 'react';
import {sliderImages} from '../../../dataStorage/images/Main/Slider';
//@ts-ignore
import cl from './Slider.module.css'
import SideImageSlider from "./SideImageSlider/SideImageSlider";
import CenterImageSlider from "./CenterImageSlider/CenterImageSlider";

// TODO: navigation to the catalog with its properties on click

const Slider: FC = () => {
    return (
        <div className={cl.wrap}>
            <div className={cl.wrapSide}>
                <SideImageSlider
                    images={sliderImages.logoLeft}
                    clockwise={false}
                />
                <SideImageSlider
                    images={sliderImages.miniLeft}
                    clockwise={true}
                />
            </div>
            <div className={cl.wrapCenter}>
                <CenterImageSlider
                    images={sliderImages.bigLeft}
                    clockwise={true}
                />
            </div>
            <div className={cl.wrapCenter}>
                <CenterImageSlider
                    images={sliderImages.bigRight}
                    clockwise={false}
                />
            </div>
            <div className={cl.wrapSide}>
                <SideImageSlider
                    images={sliderImages.miniRight}
                    clockwise={false}
                />
                <SideImageSlider
                    images={sliderImages.logoRight}
                    clockwise={true}
                />
            </div>
        </div>
    );
};

export default Slider