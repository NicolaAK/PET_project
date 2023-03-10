import React from 'react';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import ModelPhoto1 from '@assets/foto/favourites/Rectangle 10.png';
import ModelPhoto2 from '@assets/foto/favourites/Rectangle 11.png';
import Product from '@components/Catalog/components/Products/Product';
import { Content, Container, Title, ContainerProduct } from './style';

const products = [
    {
        id: 1,
        name: 'Белая куртка',
        isNew: true,
        prices: { ru: 2000, ua: 12.2 },
        sizes: ['XXS', 'XS', 'S', 'M', 'L'],
        colors: ['white', 'blue', 'yellow', 'black', 'red', 'green'],
        image: ModelPhoto1,
    },
    {
        id: 2,
        name: 'Синее пальто',
        isNew: false,
        prices: { ru: 3100, ua: 12.2 },
        sizes: ['XXS', 'S', 'M'],
        colors: ['white', 'yellow', 'black'],
        image: ModelPhoto2,
    },
    {
        id: 3,
        name: 'Бежевая шуба',
        isNew: true,
        prices: { ru: 4500, ua: 12.2 },
        sizes: ['XS', 'S', 'M'],
        colors: ['blue', 'yellow', 'green'],
        image: ModelPhoto1,
    },
    {
        id: 4,
        name: 'Синяя парка',
        isNew: false,
        prices: { ru: 700, ua: 12.2 },
        sizes: ['XXS', 'S', 'M', 'L'],
        colors: ['white', 'red', 'green'],
        image: ModelPhoto2,
    },
];
const Favourites = () => (
    <Container>
        <Breadcrumbs />
        <Content>
            <Title>Избранное</Title>
            <ContainerProduct>
                {products.map((product) => (
                    <Product
                        heightImage={400}
                        key={product.id}
                        id={product.id}
                        prices={product.prices}
                        image={product.image}
                        name={product.name}
                        sizes={product.sizes}
                        colors={product.colors}
                        isNew={product.isNew}
                    />
                ))}
            </ContainerProduct>
        </Content>
    </Container>
);

export default Favourites;
