import React, { FC, useState } from 'react';
import { currency, labelSymbol } from '@components/Catalog/components/Products/Product';
import ArrowR from '@assets/icons/arrowR.svg';
import OrderProducts, { IProduct } from '@components/Profile/History/OrderProducts';
import Information, { IPersonalData } from '@components/Profile/History/Information';
import { Line } from '@components/Profile/style';
import {
    ArrowContainer,
    Container,
    ContainerOrderProducts,
    ContainerStatus,
    ContainerSum,
    Content,
    Text,
    Title,
} from './style';
interface IOrder {
    orderNumber: string;
    status: string;
    totalSum: { ru: number; ua: number };
    products: IProduct[];
    personalData: IPersonalData[];
}
const Orders: FC<IOrder> = ({ orderNumber, products, status, totalSum, personalData }) => {
    const [isOpenOrder, setIsOpenOrder] = useState(false);
    const toggleOpenOrder = () => setIsOpenOrder(!isOpenOrder);
    return (
        <Container key={orderNumber}>
            <Content onClick={toggleOpenOrder}>
                <Title>{orderNumber}</Title>
                <ContainerStatus>
                    <Title>Статус:</Title>
                    <Text>{status}</Text>
                </ContainerStatus>
                <ContainerSum>
                    <Title>Сумма заказа:</Title>
                    <Text>
                        {totalSum[currency]} {labelSymbol[currency]}
                    </Text>
                </ContainerSum>
                <ArrowContainer isOpenOrder={isOpenOrder}>
                    <ArrowR />
                </ArrowContainer>
            </Content>
            <ContainerOrderProducts isOpenOrder={isOpenOrder}>
                {products.map((product) => (
                    <OrderProducts
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        article={product.article}
                        countProduct={product.countProduct}
                        prices={product.prices}
                        size={product.size}
                        images={product.images}
                    />
                ))}
                {personalData.map((info) => (
                    <Information
                        key={info.mail}
                        surname={info.surname}
                        mail={info.mail}
                        phone={info.phone}
                        delivery={info.delivery}
                        payment={info.payment}
                    />
                ))}
            </ContainerOrderProducts>
            <Line />
        </Container>
    );
};

export default Orders;
