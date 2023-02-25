import React from 'react';
import Menu from '@components/Catalog/components/Menu';
import Filter from '@components/Catalog/components/Filter';
import Products from '@components/Catalog/components/Products';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import { generateGithubPagesRoutes } from '@utils/helpers';
import { CatalogContent, CatalogContainer, Container, Heading, Text } from './style';

const URL = [
    { link: 'Главная', path: generateGithubPagesRoutes('') },
    { link: 'Каталог', path: '' },
];

const Catalog = () => (
    <CatalogContainer>
        <CatalogContent>
            <Breadcrumbs URL={URL} />
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

export default Catalog;
