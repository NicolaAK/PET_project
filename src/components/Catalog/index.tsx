import React, { useEffect, useState } from 'react';
import Menu from '@components/Catalog/components/Menu';
import Filter from '@components/Catalog/components/Filter';
import Products from '@components/Catalog/components/Products';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import { useSelector } from 'react-redux';
import { getProductTotalCount } from '@store/product/selectors';
import { useAppDispatch } from '@store';
import { fetchProductList } from '@store/product';
import { CatalogContent, CatalogContainer, Container, Heading, Text } from './style';

const Catalog = () => {
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [quantityPages, setQuantityPages] = useState(1);
    const xTotalCount = useSelector(getProductTotalCount);
    console.log(setCurrentPage);
    useEffect(() => {
        dispatch(fetchProductList(currentPage));
    }, [dispatch]);
    useEffect(() => {
        setQuantityPages(xTotalCount / 18);
    }, [xTotalCount]);
    console.log(quantityPages);
    return (
        <CatalogContainer>
            <CatalogContent>
                <Breadcrumbs />
                <Container>
                    <Heading>
                        <Text>Каталог</Text>
                    </Heading>
                    <Menu />
                    <Filter />
                    <Products />
                </Container>
            </CatalogContent>
        </CatalogContainer>
    );
};
export default Catalog;
