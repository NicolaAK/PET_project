import React from 'react';
import { useRoutes } from 'react-router';
import Main from '@components/Main';
import { Navigate } from 'react-router-dom';
import Catalog from '@components/Catalog';
import Payment from '@components/Payment';
import Refund from '@components/Refund';
import ProductCatalog from '@components/ProductCatalog';
import { generateGithubPagesRoutes } from '@utils/helpers';
import Cart from '@components/Cart';
import Favourites from '@components/Favourites';
import Abouts from '@components/Abouts';
import { ROUTES } from './constants';

const Routes = () =>
    useRoutes([
        {
            path: generateGithubPagesRoutes(''),
            element: <Main />,
        },
        {
            path: generateGithubPagesRoutes(ROUTES.CATALOG),
            element: <Catalog />,
        },
        {
            path: generateGithubPagesRoutes(ROUTES.CATALOG),
            children: [
                {
                    path: ':idCatalog',
                    element: <ProductCatalog />,
                },
            ],
        },
        {
            path: generateGithubPagesRoutes(ROUTES.ABOUTS),
            element: <Abouts />,
        },
        {
            path: generateGithubPagesRoutes(ROUTES.PAYMENT),
            element: <Payment />,
        },
        {
            path: generateGithubPagesRoutes(ROUTES.REFUND),
            element: <Refund />,
        },
        {
            path: generateGithubPagesRoutes(ROUTES.CART),
            element: <Cart />,
        },
        {
            path: generateGithubPagesRoutes(ROUTES.FAVOURITES),
            element: <Favourites />,
        },
        { path: '*', element: <Navigate to={generateGithubPagesRoutes('')} replace /> },
    ]);

export default Routes;
