import React from "react";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import PersonalData from "../pages/PersonalData";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import Catalog from "../pages/Catalog";
import Favourites from "../pages/Favourites";
import Authorization from "../pages/Authorization";
import Deal from "../pages/Deal";


export interface IRoute {
    path: string,
    element: React.ComponentType
}

export enum RouteNames {
    MAIN = '/',

    CATALOG = '/catalog',

    PROFILE = '/profile',
    PERSONAL_DATA = '/profile/personal_data',
    ORDERS = '/profile/orders',
    FAVOURITES = '/favourites',
    CART = '/cart',

    AUTHORIZATION = '/authorization',

    DEAL = '/deal',
}

export const privateRoutes: IRoute[] = [
    {path: RouteNames.PROFILE, element: Profile},
    {path: RouteNames.PERSONAL_DATA, element: PersonalData},
    {path: RouteNames.ORDERS, element: Orders},

    {path: RouteNames.MAIN, element: Main},
    {path: RouteNames.CATALOG, element: Catalog},
    {path: RouteNames.FAVOURITES, element: Favourites},
    {path: RouteNames.CART, element: Cart},
    {path: RouteNames.DEAL, element: Deal},
]

export const publicRoutes: IRoute[] = [
    {path: RouteNames.MAIN, element: Main},
    {path: RouteNames.CATALOG, element: Catalog},
    {path: RouteNames.FAVOURITES, element: Favourites},
    {path: RouteNames.CART, element: Cart},
    {path: RouteNames.AUTHORIZATION, element: Authorization},
    {path: RouteNames.DEAL, element: Deal},
]