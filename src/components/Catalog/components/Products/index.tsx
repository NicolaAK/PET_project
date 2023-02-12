import React from 'react';
import Product from '@components/Catalog/components/Products/Product';
import ModelFoto1 from '@assets/foto/catalog/Model_1.png';
import ModelFoto2 from '@assets/foto/catalog/Model_2.png';
import ModelFoto3 from '@assets/foto/catalog/Model_3.png';
import ModelFoto4 from '@assets/foto/catalog/Model_4.png';
import { ProductsContainer } from './style';

const products = [
    {
        name: 'Белая куртка',
        isNew: true,
        prices: { ru: 2000, ua: 12.2 },
        sizes: ['XXS', 'XS', 'S', 'M', 'L'],
        colors: ['white', 'blue', 'yellow', 'black', 'red', 'green'],
        image: ModelFoto1,
    },
    {
        name: 'Синее пальто',
        isNew: false,
        prices: { ru: 3100, ua: 12.2 },
        sizes: ['XXS', 'S', 'M'],
        colors: ['white', 'yellow', 'black'],
        image: ModelFoto2,
    },
    {
        name: 'Бежевая шуба',
        isNew: true,
        prices: { ru: 4500, ua: 12.2 },
        sizes: ['XS', 'S', 'M'],
        colors: ['blue', 'yellow', 'green'],
        image: ModelFoto3,
    },
    {
        name: 'Синяя парка',
        isNew: false,
        prices: { ru: 700, ua: 12.2 },
        sizes: ['XXS', 'S', 'M', 'L'],
        colors: ['white', 'red', 'green'],
        image: ModelFoto4,
    },
    {
        name: 'Белая куртка',
        isNew: true,
        prices: { ru: 2000, ua: 12.2 },
        sizes: ['XXS', 'XS', 'S', 'M', 'L'],
        colors: ['white', 'blue', 'yellow'],
        image: ModelFoto1,
    },
    {
        name: 'Белая куртка',
        isNew: true,
        prices: { ru: 2000, ua: 12.2 },
        sizes: ['XXS', 'XS', 'S', 'M', 'L'],
        colors: ['white', 'blue', 'yellow', 'black', 'red', 'green'],
        image: ModelFoto1,
    },
    {
        name: 'Синее пальто',
        isNew: false,
        prices: { ru: 3100, ua: 12.2 },
        sizes: ['XXS', 'S', 'M'],
        colors: ['white', 'yellow', 'black'],
        image: ModelFoto2,
    },
    {
        name: 'Бежевая шуба',
        isNew: true,
        prices: { ru: 4500, ua: 12.2 },
        sizes: ['XS', 'S', 'M'],
        colors: ['blue', 'yellow', 'green'],
        image: ModelFoto3,
    },
    {
        name: 'Синяя парка',
        isNew: false,
        prices: { ru: 700, ua: 12.2 },
        sizes: ['XXS', 'S', 'M', 'L'],
        colors: ['white', 'red', 'green'],
        image: ModelFoto4,
    },
    {
        name: 'Белая куртка',
        isNew: true,
        prices: { ru: 2000, ua: 12.2 },
        sizes: ['XXS', 'XS', 'S', 'M', 'L'],
        colors: ['white', 'blue', 'yellow', 'black', 'red', 'green'],
        image: ModelFoto1,
    },
    {
        name: 'Синее пальто',
        isNew: false,
        prices: { ru: 3100, ua: 12.2 },
        sizes: ['XXS', 'S', 'M'],
        colors: ['white', 'yellow', 'black'],
        image: ModelFoto2,
    },
    {
        name: 'Бежевая шуба',
        isNew: true,
        prices: { ru: 4500, ua: 12.2 },
        sizes: ['XS', 'S', 'M'],
        colors: ['blue', 'yellow', 'green'],
        image: ModelFoto3,
    },
    {
        name: 'Бежевая шуба',
        isNew: true,
        prices: { ru: 4500, ua: 12.2 },
        sizes: ['XS', 'S', 'M'],
        colors: ['blue', 'yellow', 'green'],
        image: ModelFoto3,
    },
    {
        name: 'Синяя парка',
        isNew: false,
        prices: { ru: 700, ua: 12.2 },
        sizes: ['XXS', 'S', 'M', 'L'],
        colors: ['white', 'red', 'green'],
        image: ModelFoto4,
    },
];

const Products = () => (
    <ProductsContainer>
        {products.map((product) => (
            <Product
                prices={product.prices}
                image={product.image}
                name={product.name}
                sizes={product.sizes}
                colors={product.colors}
                isNew={product.isNew}
            />
        ))}
    </ProductsContainer>
);

export default Products;
