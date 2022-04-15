import React, {FC} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {RouteNames, publicRoutes, privateRoutes} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";


const AppRouter: FC = () => {
    const {auth} = useTypedSelector(store => store.customer)
    const {selectedProduct} = useTypedSelector(store => store.product)

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
                    path={RouteNames.CATALOG + '/' + selectedProduct.id}
                    element={<Product/>}
                />
                <Route
                    path="*"
                    element={<NotFound/>}
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
                    path={RouteNames.CATALOG + '/' + selectedProduct.id}
                    element={<Product/>}
                />
                <Route
                    path="*"
                    element={<NotFound/>}
                />
            </Routes>

    );
};

export default AppRouter