import React from 'react';
import { useRoutes } from 'react-router';
import Main from '@components/Main';
import { ROUTES } from './constants';

const Routes = () =>
    useRoutes([
        {
            path: ROUTES.DASHBOARD,
            element: <Main />,
        },
        {
            path: ROUTES.CATALOG,
            element: <div>Catalog</div>,
        },
        {
            path: ROUTES.CATEGORY,
            children: [
                {
                    path: ':idCategory',
                    element: <div>Category</div>,
                },
            ],
        },
    ]);

export default Routes;
