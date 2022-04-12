import React, {FC, useState} from 'react';
import {sliderImages} from '../../../dataStorage/images/Main/Slider';
//@ts-ignore
import cl from './Slider.module.css'
import SideImageSlider from "./SideImageSlider/SideImageSlider";
import CenterImageSlider from "./CenterImageSlider/CenterImageSlider";
import {RouteNames} from "../../../router";
import {useActions} from "../../../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const Slider: FC = () => {
    const {setFilter, setCatalogPage} = useActions.useProductActions()
    const {currency} = useTypedSelector(state => state.app)
    const navigate = useNavigate()

    const [idx, setIdx] = useState<number>(0)

    return (
        <div className={cl.wrap}>
            <div
                className={cl.wrapSide}
                onClick={() => {
                    setFilter({
                        price: [55 * currency.exchangeRate, 205 * currency.exchangeRate],
                        gender: [] as string[],
                        season: [] as string[],
                        color: [] as string[],
                        brand: [sliderImages.logoLeft[idx][1]] as string[]
                    })
                    setCatalogPage(1)
                    navigate(RouteNames.CATALOG)
                }}
            >
                <SideImageSlider
                    images={sliderImages.logoLeft}
                    clockwise={false}
                    setIdx={setIdx}
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
            <div
                className={cl.wrapSide}
                 onClick={() => {
                     setFilter({
                         price: [55 * currency.exchangeRate, 205 * currency.exchangeRate],
                         gender: [] as string[],
                         season: [] as string[],
                         color: [] as string[],
                         brand: [sliderImages.logoRight[idx][1]] as string[]
                     })
                     setCatalogPage(1)
                     navigate(RouteNames.CATALOG)
                 }}
            >
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