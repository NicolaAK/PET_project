import React from 'react';
import Menu from '@components/Catalog/components/Menu';
import Filter from '@components/Catalog/components/Filter';
import Products from '@components/Catalog/components/Products';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import Pagination from '@components/ReusedComponents/Pagination';
import { CatalogContent, CatalogContainer, Container, Heading, Text } from './style';

const Catalog = () => (
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
            <Pagination />
        </CatalogContent>
    </CatalogContainer>
);
export default Catalog;
