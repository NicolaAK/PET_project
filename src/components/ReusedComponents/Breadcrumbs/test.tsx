import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbsTest = () => {
    const location = useLocation();
    const breadcrumbPaths = useMemo(() => {
        const paths = location.pathname.split('/').filter((path) => path !== '');
        return paths.map((path, index) => ({
            path: paths.slice(0, index + 1).join('/'),
            title: getBreadcrumbTitle(path),
        }));
    }, [location]);

    return (
        <nav>
            <ul>
                {breadcrumbPaths.map((breadcrumb, index) => {
                    const isLast = index === breadcrumbPaths.length - 1;

                    return (
                        <li key={breadcrumb.path}>
                            {!isLast ? <Link to={breadcrumb.path}>{breadcrumb.title}</Link> : breadcrumb.title}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

function getBreadcrumbTitle(path: string) {
    switch (path) {
        case 'yanki':
            return 'Welcome';
        case 'catalog':
            return 'Our Story';
        default:
            return path.charAt(0).toUpperCase() + path.slice(1);
    }
}
export default BreadcrumbsTest;
