import React from 'react';
import { currency, labelSymbol } from '@components/Catalog/components/Products/Product';
import Product from '@components/Cart/Product';
import { useFormContext } from 'react-hook-form';
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
    const { watch } = useFormContext();
    const sumAllWatch = watch('allSum');

    return (
        <Container>
            <YourOrder>Ваш заказ</YourOrder>
            {fields.map((item, index: number) => (
                <Product key={item.id} product={item} remove={remove} index={index} />
            ))}
            <Total>
                <Text>К оплате:</Text>
                <Money>
                    {sumAllWatch}
                    {labelSymbol[currency]}
                </Money>
            </Total>
        </Container>
    );
};
export default Order;
