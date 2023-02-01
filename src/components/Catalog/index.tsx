import React from 'react';
import Menu from '@components/Catalog/components/Menu';
import Filter from '@components/Catalog/components/Filter';
import Products from '@components/Catalog/components/Products';
import { CatalogContent, CatalogContainer, Navigation, Container } from './styled';
const Catalog = () => (
    <CatalogContainer>
        <CatalogContent>
            <Navigation>Главная Каталог</Navigation>
            <Container>
                <Menu />
                <Filter />
                <Products />
            </Container>
        </CatalogContent>
    </CatalogContainer>
);

export default Catalog;
