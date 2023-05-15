import React, { FC } from 'react';
import { useRoutes } from 'react-router';
import Main from '@components/Main';
import { Navigate } from 'react-router-dom';
import Catalog from '@components/Catalog';
import Payment from '@components/Payment';
import Refund from '@components/Refund';
import ProductCatalog from '@components/ProductCatalog';
import { generateRoute } from '@utils/helpers';
import Cart from '@components/Cart';
import Favourites from '@components/Favourites';
import Abouts from '@components/Abouts';
import Profile from '@components/Profile';
import { ROUTES } from './constants';

interface IProps {
    isAuth: boolean;
}

const Routes: FC<IProps> = ({ isAuth }) => {
    const publicRoutes = [
        {
            path: generateRoute(''),
            element: <Main />,
        },
        {
            path: generateRoute(ROUTES.CATALOG),
            children: [
                {
                    index: true,
                    element: <Catalog />,
                },
                {
                    path: ':idCategory',
                    children: [
                        {
                            index: true,
                            element: <Catalog />,
                        },
                        {
                            path: ':idProduct/*',
                            element: <ProductCatalog />,
                        },
                    ],
                },
            ],
        },
        {
            path: generateRoute(ROUTES.ABOUTS),
            element: <Abouts />,
        },
        {
            path: generateRoute(ROUTES.PAYMENT),
            element: <Payment />,
        },
        {
            path: generateRoute(ROUTES.REFUND),
            element: <Refund />,
        },
        { path: '*', element: <Navigate to={generateRoute('')} replace /> },
    ];

    const privateRoutes = [
        {
            path: generateRoute(ROUTES.CART),
            element: <Cart />,
        },
        {
            path: generateRoute(ROUTES.FAVOURITES),
            element: <Favourites />,
        },
        {
            path: generateRoute(ROUTES.PROFILE),
            element: <Profile />,
        },
    ];

    const routes = isAuth ? [...publicRoutes, ...privateRoutes] : publicRoutes;

    return useRoutes(routes);
};

export default Routes;
