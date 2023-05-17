import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ArrowR from '@assets/icons/arrowR.svg';
import { useSelector } from 'react-redux';
import { getCategoryById } from '@store/category/selectors';
import { getProductById } from '@store/product/selectors';
import { Skeleton } from '@components/ReusedComponents/Skeleton/style';
import { ROUTES } from '../../../routes/constants';
import { Navigation, LinkText, List, NavUl, Content, EndCrumb } from './style';

const Breadcrumbs = () => {
    const location = useLocation();
    const { idCategory, idProduct } = useParams();
    const category = useSelector(getCategoryById(Number(idCategory)));
    const categoryName = category?.name;
    const product = useSelector(getProductById(Number(idProduct)));
    const productName = product?.name;

    const breadcrumbPaths = useMemo(() => {
        const paths = location.pathname.split('/').filter((path) => path !== '');

        return [
            {
                path: '',
                title: 'Главная',
            },
            ...paths.map((path, index) => ({
                path: paths.slice(0, index + 1).join('/'),
                title: getBreadcrumbTitle(path, index === 1 ? categoryName : null, index === 2 ? productName : null),
            })),
        ];
    }, [location, categoryName, productName]);

    return (
        <Navigation>
            <NavUl>
                {breadcrumbPaths.map((breadcrumb, index) => {
                    const isLast = index === breadcrumbPaths.length - 1;

                    return (
                        <List key={breadcrumb.path}>
                            {isLast ? (
                                <EndCrumb>{breadcrumb.title}</EndCrumb>
                            ) : (
                                <Content>
                                    <LinkText to={`/${breadcrumb.path}`}>{breadcrumb.title}</LinkText> <ArrowR />
                                </Content>
                            )}
                        </List>
                    );
                })}
            </NavUl>
        </Navigation>
    );
};

const getBreadcrumbTitle = (
    path: string,
    categoryName: string | undefined | null,
    productName: string | null | undefined,
) => {
    switch (path) {
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
            return productName || categoryName || <Skeleton width={100} height={20} />;
    }
};

export default Breadcrumbs;
