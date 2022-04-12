import {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useState,
    useRef
} from "react";
//@ts-ignore
import cl from "./Price.module.css";
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";
import {useActions} from "../../../../../hooks/useActions";
import {returnPrice, setNicePrice} from "../../../../../utils/setNicePrice";

interface IPriceProps {
    min: number;
    max: number;
}

const Price: FC<IPriceProps> = ({min, max}) => {
    const {filter} = useTypedSelector(state => state.product)
    const {setFilter, setCatalogPage} = useActions.useProductActions()

    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(filter.price[0] < min) setFilter({...filter, price: [min, filter.price[1]]})
        if(filter.price[1] > max) setFilter({...filter, price: [filter.price[0], max]})
    }, [filter])


    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(filter.price[0]);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [filter.price[0], getPercent]);

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(filter.price[1]);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [filter.price[1], getPercent]);

    return (
        <div className={cl.container}>
            <input
                type="range"
                min={min}
                max={max}
                value={filter.price[0]}
                ref={minValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, filter.price[1] - 1);
                    setFilter({...filter, price: [value, filter.price[1]]});
                    setCatalogPage(1)
                    event.target.value = value.toString();
                }}
                className={`${cl.thumb} ${cl.thumbZIndex3} ${filter.price[0] > max - 100 && cl.thumbZIndex5}`}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={filter.price[1]}
                ref={maxValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(+event.target.value, filter.price[0] + 1);
                    setFilter({...filter, price: [filter.price[0], value]});
                    setCatalogPage(1)
                    event.target.value = value.toString();
                }}
                className={`${cl.thumb} ${cl.thumbZIndex4}`}
            />

            <div className={cl.slider}>
                <div className={cl.sliderTrack}/>
                <div ref={range} className={cl.sliderRange}/>
                <div className={cl.sliderLeftValue}>{filter.price[0]}</div>
                <div className={cl.sliderRightValue}>{filter.price[1]}</div>
            </div>
        </div>
    );
};

export default Price;
