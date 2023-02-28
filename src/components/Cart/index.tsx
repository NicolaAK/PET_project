import React from 'react';
import Order from '@components/Cart/Order';
import { generateGithubPagesRoutes } from '@utils/helpers';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import { Content, Container } from './style';

const URL = [
    { link: 'Главная', path: generateGithubPagesRoutes('') },
    { link: 'Каталог', path: '' },
];

const Cart = () => (
    <Container>
        <Breadcrumbs URL={URL} />
        <Content>
            <Order />
        </Content>
    </Container>
);

export default Cart;
