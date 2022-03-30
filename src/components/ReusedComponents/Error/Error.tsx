import React, {FC} from 'react';
//@ts-ignore
import cl from './Error.module.css'
import {useActions} from "../../../hooks/useActions";

interface IErrorProps {
    message: string
}

const Error: FC<IErrorProps> = ({message}) => {
    const {setError} = useActions.useAppActions()


    return (
        <div
            className={cl.wrap}
            onClick={() => setError('')}
        >
            <div
                className={cl.content}
                onClick={(e:React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
                <h1>Error :(</h1>
                <h3>{message}</h3>
                <button onClick={() => setError('')}>OK</button>
            </div>
        </div>
    );
};

export default Error