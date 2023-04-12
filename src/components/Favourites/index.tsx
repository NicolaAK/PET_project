import React from 'react';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import ModelPhoto1 from '@assets/foto/favourites/Rectangle 10.png';
import Product from '@components/Catalog/components/Products/Product';
import { Content, Container, Title, ContainerProduct } from './style';

const products = [
    {
        id: 1,
        name: 'Белая куртка',
        isNew: true,
        price: 2000,
        sizes: ['XXS', 'XS', 'S', 'M', 'L'],
        image: ModelPhoto1,
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
                        // @ts-ignore
                        product={product}
                        heightImage={400}
                        key={product.id}
                        widthImage={370}
                    />
                ))}
            </ContainerProduct>
        </Content>
    </Container>
);

export default Favourites;
