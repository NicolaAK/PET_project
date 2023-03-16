import React from 'react';
import Product from '@components/Catalog/components/Products/Product';
import ModelPhoto1 from '@assets/foto/catalog/Model_1.png';
import ModelPhoto2 from '@assets/foto/catalog/Model_2.png';
import ModelPhoto3 from '@assets/foto/catalog/Model_3.png';
import ModelPhoto4 from '@assets/foto/catalog/Model_4.png';
import { ProductsContainer } from './style';

const products = [
    {
        id: 1,
        name: 'Белая куртка',
        isNew: true,
        prices: { ru: 2000, ua: 12.2 },
        sizes: ['XXS', 'XS', 'S', 'M', 'L'],
        image: ModelPhoto1,
    },
    {
        id: 2,
        name: 'Синее пальто',
        isNew: false,
        prices: { ru: 3100, ua: 12.2 },
        sizes: ['XXS', 'S', 'M'],
        image: ModelPhoto2,
    },
    {
        id: 3,
        name: 'Бежевая шуба',
        isNew: true,
        prices: { ru: 4500, ua: 12.2 },
        sizes: ['XS', 'S', 'M'],
        image: ModelPhoto3,
    },
    {
        id: 4,
        name: 'Синяя парка',
        isNew: false,
        prices: { ru: 700, ua: 12.2 },
        sizes: ['XXS', 'S', 'M', 'L'],
        image: ModelPhoto4,
    },
    {
        id: 5,
        name: 'Белая куртка',
        isNew: true,
        prices: { ru: 2000, ua: 12.2 },
        sizes: ['XXS', 'XS', 'S', 'M', 'L'],
        image: ModelPhoto1,
    },
    {
        id: 6,
        name: 'Белая куртка',
        isNew: true,
        prices: { ru: 2000, ua: 12.2 },
        sizes: ['XXS', 'XS', 'S', 'M', 'L'],
        image: ModelPhoto1,
    },
    {
        id: 7,
        name: 'Синее пальто',
        isNew: false,
        prices: { ru: 3100, ua: 12.2 },
        sizes: ['XXS', 'S', 'M'],
        image: ModelPhoto2,
    },
    {
        id: 8,
        name: 'Бежевая шуба',
        isNew: true,
        prices: { ru: 4500, ua: 12.2 },
        sizes: ['XS', 'S', 'M'],
        image: ModelPhoto3,
    },
    {
        id: 9,
        name: 'Синяя парка',
        isNew: false,
        prices: { ru: 700, ua: 12.2 },
        sizes: ['XXS', 'S', 'M', 'L'],
        image: ModelPhoto4,
    },
    {
        id: 10,
        name: 'Белая куртка',
        isNew: true,
        prices: { ru: 2000, ua: 12.2 },
        sizes: ['XXS', 'XS', 'S', 'M', 'L'],
        image: ModelPhoto1,
    },
    {
        id: 11,
        name: 'Синее пальто',
        isNew: false,
        prices: { ru: 3100, ua: 12.2 },
        sizes: ['XXS', 'S', 'M'],
        image: ModelPhoto2,
    },
    {
        id: 12,
        name: 'Бежевая шуба',
        isNew: true,
        prices: { ru: 4500, ua: 12.2 },
        sizes: ['XS', 'S', 'M'],
        image: ModelPhoto3,
    },
    {
        id: 13,
        name: 'Бежевая шуба',
        isNew: true,
        prices: { ru: 4500, ua: 12.2 },
        sizes: ['XS', 'S', 'M'],
        image: ModelPhoto3,
    },
    {
        id: 14,
        name: 'Синяя парка',
        isNew: false,
        prices: { ru: 700, ua: 12.2 },
        sizes: ['XXS', 'S', 'M', 'L'],
        image: ModelPhoto4,
    },
];

const Products = () => (
    <ProductsContainer>
        {products.map((product) => (
            <Product
                heightImage={360}
                key={product.id}
                id={product.id}
                prices={product.prices}
                image={product.image}
                name={product.name}
                sizes={product.sizes}
                isNew={product.isNew}
            />
        ))}
    </ProductsContainer>
);

export default Products;
