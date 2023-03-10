import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ArrowR from '@assets/icons/arrowR.svg';
import { Navigation, LinkText, List, NavUl, Content, EndCrumb } from './style';
import { ROUTES } from '../../../routes/constants';

const Breadcrumbs = () => {
    const location = useLocation();
    const breadcrumbPaths = useMemo(() => {
        const paths = location.pathname.split('/').filter((path) => path !== '');
        return paths.map((path, index) => ({
            path: paths.slice(0, index + 1).join('/'),
            title: getBreadcrumbTitle(path),
        }));
    }, [location]);

    return (
        <Navigation>
            <NavUl>
                {breadcrumbPaths.map((breadcrumb, index) => {
                    const isLast = index === breadcrumbPaths.length - 1;

                    return (
                        <List key={breadcrumb.path}>
                            {!isLast ? (
                                <Content>
                                    <LinkText to={`/${breadcrumb.path}`}>{breadcrumb.title}</LinkText> <ArrowR />
                                </Content>
                            ) : (
                                <EndCrumb>{breadcrumb.title}</EndCrumb>
                            )}
                        </List>
                    );
                })}
            </NavUl>
        </Navigation>
    );
};

const getBreadcrumbTitle = (path: string) => {
    switch (path) {
        case ROUTES.YANKI:
            return 'Главная';
        case ROUTES.CATALOG:
            return 'Каталог';
        case ROUTES.CATEGORY:
            return 'Категории';
        case ROUTES.FAVOURITES:
            return 'Избранное';
        case ROUTES.PAYMENT:
            return 'Оплата и доставка';
        case ROUTES.ABOUTS:
            return 'Контакты';
        case ROUTES.CART:
            return 'Корзина';
        case ROUTES.REFUND:
            return 'Обмен и воврат';
        case ROUTES.PROFILE:
            return 'Личный кабинет';
        default:
            return path.charAt(0).toUpperCase() + path.slice(1);
    }
};
export default Breadcrumbs;
