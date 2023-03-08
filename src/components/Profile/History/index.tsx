import React, { useState } from 'react';
import Photo1 from '@assets/foto/mainModel1.png';
import ArrowR from '@assets/icons/arrowR.svg';
import { Line } from '@components/Profile/style';
import { currency, labelSymbol } from '@components/Catalog/components/Products/Product';
import OrderProducts from '@components/Profile/History/OrderProducts';
import Information from '@components/Profile/History/Information';
import {
    ArrowContainer,
    ContainerSum,
    ContainerStatus,
    Container,
    Text,
    Title,
    Content,
    ContainerOrderProducts,
    OrderContainer,
} from './style';

const orders = [
    {
        orderNumber: '№ 718 от 28.09.21',
        status: 'Отменён',
        totalSum: { ru: 28561, ua: 13682 },
        products: [
            {
                id: 1,
                name: 'Белая куртка',
                article: 'арт. 1589956',
                countProduct: 2,
                prices: { ru: 2350, ua: 12.2 },
                size: 'L',
                color: 'blue',
                images: Photo1,
            },
            {
                id: 2,
                name: 'Белая куртка',
                article: 'арт. 1589956',
                countProduct: 4,
                prices: { ru: 2350, ua: 12.2 },
                size: 'M',
                color: 'white',
                images: Photo1,
            },
        ],
        personalData: [
            {
                surname: 'Елизаветта Станиславчук',
                mail: 'ella.s97@gmail.com',
                phone: '+38(067)470 20 66',
                delivery: 'Доставка Новой Почтой',
                payment: 'Оплата при получении',
            },
        ],
    },
    {
        orderNumber: '№ 357 от 03.12.21',
        status: 'Выполнен',
        totalSum: { ru: 7561, ua: 13682 },
        products: [
            {
                id: 4,
                name: 'Синяя парка',
                article: 'арт. 1589956',
                countProduct: 1,
                prices: { ru: 2350, ua: 12.2 },
                size: 'L',
                color: 'red',
                images: Photo1,
            },
        ],
        personalData: [
            {
                surname: 'Елизаветта Станиславчук',
                mail: 'ella.s97@gmail.com',
                phone: '+38(067)470 20 66',
                delivery: 'Доставка Новой Почтой',
                payment: 'Оплата при получении',
            },
        ],
    },
];
const History = () => {
    const [isOpenOrder, setIsOpenOrder] = useState(false);
    const toggleOpenOrder = () => setIsOpenOrder(!isOpenOrder);
    return (
        <OrderContainer>
            {orders.map((order) => (
                <Container key={order.orderNumber}>
                    <Content onClick={toggleOpenOrder}>
                        <Title>{order.orderNumber}</Title>
                        <ContainerStatus>
                            <Title>Статус:</Title>
                            <Text>{order.status}</Text>
                        </ContainerStatus>
                        <ContainerSum>
                            <Title>Сумма заказа:</Title>
                            <Text>
                                {order.totalSum[currency]} {labelSymbol[currency]}
                            </Text>
                        </ContainerSum>
                        <ArrowContainer isOpenOrder={isOpenOrder}>
                            <ArrowR />
                        </ArrowContainer>
                    </Content>
                    <ContainerOrderProducts isOpenOrder={isOpenOrder}>
                        {order.products.map((product) => (
                            <OrderProducts
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                article={product.article}
                                countProduct={product.countProduct}
                                prices={product.prices}
                                size={product.size}
                                color={product.color}
                                images={product.images}
                            />
                        ))}
                        {order.personalData.map((info) => (
                            <Information
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
            ))}
        </OrderContainer>
    );
};

export default History;
