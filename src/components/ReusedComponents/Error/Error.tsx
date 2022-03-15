import React, {FC} from 'react';
//@ts-ignore
import cl from './Error.module.css'
import {useActions} from "../../../hooks/useActions";

interface IError {
    message: string
}

const Error: FC<IError> = ({message}) => {
    const {setError} = useActions()


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
                <h4>{message}</h4>
                <button onClick={() => setError('')}>OK</button>
            </div>
        </div>
    );
};

export default Error