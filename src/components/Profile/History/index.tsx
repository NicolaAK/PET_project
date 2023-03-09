import React from 'react';
import Photo1 from '@assets/foto/mainModel1.png';
import Orders from '@components/Profile/History/Orders';
import { OrderContainer } from './style';

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
                surname: 'Николай Станиславчук',
                mail: 'ella.s97@gmail.com',
                phone: '+38(067)470 20 66',
                delivery: 'Доставка Новой Почтой',
                payment: 'Оплата при получении',
            },
        ],
    },
];
const History = () => (
    <OrderContainer>
        {orders.map((order) => (
            <Orders
                key={order.orderNumber}
                orderNumber={order.orderNumber}
                status={order.status}
                totalSum={order.totalSum}
                products={order.products}
                personalData={order.personalData}
            />
        ))}
    </OrderContainer>
);

export default History;
