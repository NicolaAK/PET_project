import React, { useState } from 'react';
import Photo1 from '@assets/foto/mainModel1.png';
import { currency, labelSymbol } from '@components/Catalog/components/Products/Product';
import Product from '@components/Cart/Product';
import { Container, YourOrder, Money, Total, Text } from './style';

const products = [
    {
        id: 1,
        name: 'Белая куртка',
        article: 'арт. 1589956',
        countProduct: 1,
        prices: { ru: 2350, ua: 12.2 },
        sizes: [
            {
                value: 1,
                label: 'XXS',
            },
            {
                value: 2,
                label: 'XS',
            },
            {
                value: 3,
                label: 'S',
            },
            {
                value: 4,
                label: 'M',
            },
            {
                value: 5,
                label: 'L',
            },
        ],
        color: 'blue',
        images: [Photo1],
    },
    {
        id: 2,
        name: 'Белая куртка',
        article: 'арт. 1589958',
        countProduct: 2,
        prices: { ru: 5000, ua: 12.2 },
        sizes: [
            {
                value: 1,
                label: 'XXS',
            },
            {
                value: 2,
                label: 'XS',
            },
            {
                value: 3,
                label: 'S',
            },
            {
                value: 4,
                label: 'M',
            },
            {
                value: 5,
                label: 'L',
            },
        ],
        color: 'yellow',
        images: Photo1,
    },
    {
        id: 3,
        name: 'Белая куртка',
        article: 'арт. 1589958',
        countProduct: 3,
        prices: { ru: 2000, ua: 12.2 },
        sizes: [
            {
                value: 1,
                label: 'XXS',
            },
            {
                value: 2,
                label: 'XS',
            },
            {
                value: 3,
                label: 'S',
            },
            {
                value: 4,
                label: 'M',
            },
            {
                value: 5,
                label: 'L',
            },
        ],
        color: 'white',
        images: Photo1,
    },
];
const Order = () => {
    const [productCart, setProductCart] = useState(products);
    const toggleDeleteArr = (id: number) => {
        setProductCart(productCart.filter((arr) => arr.id !== id));
    };
    const sumAll = productCart.reduce((sum, current) => sum + current.prices[currency] * current.countProduct, 0);
    const handleCountProductChange = (id: number, count: number) => {
        setProductCart(
            productCart.map((productItem) =>
                productItem?.id === id ? { ...productItem, countProduct: count } : productItem,
            ),
        );
    };

    return (
        <Container>
            <YourOrder>Ваш заказ</YourOrder>
            {productCart.map((product) => (
                <Product onCountChange={handleCountProductChange} product={product} onProduceDelete={toggleDeleteArr} />
            ))}
            <Total>
                <Text>К оплате:</Text>
                <Money>
                    {sumAll} {labelSymbol[currency]}
                </Money>
            </Total>
        </Container>
    );
};
export default Order;
