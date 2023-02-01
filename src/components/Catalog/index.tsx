import React from 'react';
import { CatalogContent, CatalogContainer, Navigation, Container, Menu, Filter, Products } from './styled';
const Catalog = () => (
    <CatalogContainer>
        <CatalogContent>
            <Navigation>Главная Каталог</Navigation>
            <Container>
                <Menu>asc</Menu>
                <Filter>asv</Filter>
                <Products>asv</Products>
            </Container>
        </CatalogContent>
    </CatalogContainer>
);

export default Catalog;
