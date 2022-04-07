import React, {Dispatch, FC, SetStateAction} from 'react';
//@ts-ignore
import cl from './ChangeLayoutBtn.module.css'

interface IRadioBtnProps {
    layout: string
    setLayout: Dispatch<SetStateAction<string>>
    currentLayout: string
}

const ChangeLayoutBtn: FC<IRadioBtnProps> = ({layout, setLayout, currentLayout}) => {
    return (
        <div
            className={`${cl.wrap} ${layout === 'grid' ? cl.first : cl.last} ${layout === currentLayout && cl.dark}`}
            onClick={() => setLayout(layout)}
        >
            <div className={`${cl.img} ${layout === 'grid' && layout === currentLayout && cl.gridChecked} ${layout === 'list' && layout === currentLayout && cl.gridChecked} ${layout === 'grid' && layout !== currentLayout && cl.grid} ${layout === 'list' && layout !== currentLayout && cl.list}`}/>
        </div>
    );
};

export default ChangeLayoutBtn