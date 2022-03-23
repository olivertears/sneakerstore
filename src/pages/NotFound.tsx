import React, {FC} from 'react';
import {notFoundImages} from "../dataStorage/images/NotFound";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../router";
import {useActions} from "../hooks/useActions";

const NotFound: FC = () => {
    const {setPage} = useActions()
    const navigate = useNavigate()

    return (
        <div className="contentWrap">
            <h5>PAGE NOT FOUND :(</h5>
            <img
                className="imgNotFound"
                src={notFoundImages.img404}
            />
            <a onClick={() => {
                setPage('MAIN')
                navigate(RouteNames.MAIN)
            }}>
                <h5>GO SHOPPING</h5>
            </a>
        </div>
    );
};

export default NotFound