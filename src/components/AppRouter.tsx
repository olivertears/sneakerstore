import React, {FC} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {RouteNames, publicRoutes, privateRoutes} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Error from "./ReusedComponents/Error/Error";

//TODO: если ввели левую страницу - идёт редирект на главную / профиль - прописать setPage(page)

const AppRouter: FC = () => {
    const {auth} = useTypedSelector(store => store.customer)

    return (
        auth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element/>}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to={RouteNames.PROFILE}/>}
                />
            </Routes>
                :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element />}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to={RouteNames.AUTHORIZATION}/>}
                />
            </Routes>

    );
};

export default AppRouter