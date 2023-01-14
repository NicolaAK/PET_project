import React from 'react';
import { useRoutes } from 'react-router';
import { ROUTES } from './constants';

const Routes = () =>
    useRoutes([
        {
            path: ROUTES.DASHBOARD,
            element: <div>Main</div>,
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
