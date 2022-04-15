import React, {Dispatch, FC, SetStateAction} from 'react';
//@ts-ignore
import cl from './ChangeLayoutBtn.module.css'
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface IRadioBtnProps {
    radioLayout: string
}

const ChangeLayoutBtn: FC<IRadioBtnProps> = ({radioLayout}) => {
    const {layout} = useTypedSelector(state => state.catalog)
    const {setLayout} = useActions.useCatalogActions()

    return (
        <div
            className={`${cl.wrap} ${radioLayout === 'grid' ? cl.first : cl.last} ${radioLayout === layout && cl.dark}`}
            onClick={() => setLayout(radioLayout)}
        >
            <div className={`${cl.img} 
                ${radioLayout === 'grid' && radioLayout === layout && cl.gridChecked} 
                ${radioLayout === 'list' && radioLayout === layout && cl.listChecked} 
                ${radioLayout === 'grid' && radioLayout !== layout && cl.grid} 
                ${radioLayout === 'list' && radioLayout !== layout && cl.list}`}
            />
        </div>
    );
};

export default ChangeLayoutBtn