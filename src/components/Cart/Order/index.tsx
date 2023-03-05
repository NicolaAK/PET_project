import React from 'react';
import { currency, labelSymbol } from '@components/Catalog/components/Products/Product';
import Product from '@components/Cart/Product';
import { Container, YourOrder, Money, Total, Text } from './style';

interface ISizes {
    value: number;
    label: string;
}
interface IProduct {
    id: number;
    name: string;
    article: string;
    countProduct: number;
    prices: { ru: number; ua: number };
    sizes: ISizes[];
    color: string;
    images: string[];
}
interface IForm {
    fields: IProduct[];
    remove: () => void;
}
const Order = ({ fields, remove }: IForm) => {
    const sumAll = fields.reduce(
        (sum: number, current: any) => sum + current.prices[currency] * current.countProduct,
        0,
    );
    // const handleCountProductChange = (id: number, count: number) => {
    //     setProductCart(
    //         productCart.map((productItem) =>
    //             productItem?.id === id ? { ...productItem, countProduct: count } : productItem,
    //         ),
    //     );
    // };
    console.log(fields);
    return (
        <Container>
            <YourOrder>Ваш заказ</YourOrder>
            {fields.map((item, index: number) => (
                <Product key={item.id} product={item} remove={remove} index={index} />
            ))}
            <Total>
                <Text>К оплате:</Text>
                <Money>
                    {sumAll}
                    {labelSymbol[currency]}
                </Money>
            </Total>
        </Container>
    );
};
export default Order;
