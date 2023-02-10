import React from 'react';
import Menu from '@components/Catalog/components/Menu';
import Filter from '@components/Catalog/components/Filter';
import Products from '@components/Catalog/components/Products';
import ArrowR from '@assets/icons/arrowR.svg';
import { Link } from 'react-router-dom';
import { CatalogContent, CatalogContainer, Navigation, Container, Heading, Text, LinkMain } from './styled';
import { generateGithubPagesRoutes } from '../../routes';
import { ROUTES } from '../../routes/constants';
const Catalog = () => (
    <CatalogContainer>
        <CatalogContent>
            <Navigation>
                <LinkMain to={generateGithubPagesRoutes('')}>Главная</LinkMain>
                <ArrowR />
                <Link to={generateGithubPagesRoutes(ROUTES.CATALOG)}>Каталог</Link>
            </Navigation>
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
