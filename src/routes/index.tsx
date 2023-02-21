import React from 'react';
import { useRoutes } from 'react-router';
import Main from '@components/Main';
import { Navigate } from 'react-router-dom';
import Catalog from '@components/Catalog';
import Payment from '@components/Payment';
import Refund from '@components/Refund';
import ProductCatalog from '@components/ProductCatalog';
import { ROUTES } from './constants';

export const generateGithubPagesRoutes = (route: string) => `${ROUTES.YANKI}/${route}`;

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
            element: <div>ABOUTS</div>,
        },
        {
            path: generateGithubPagesRoutes(ROUTES.PAYMENT),
            element: <Payment />,
        },
        {
            path: generateGithubPagesRoutes(ROUTES.REFUND),
            element: <Refund />,
        },
        { path: '*', element: <Navigate to={generateGithubPagesRoutes('')} replace /> },
    ]);

export default Routes;
