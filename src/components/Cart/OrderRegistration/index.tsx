import React from 'react';
import RHFInput from '@components/RHF/RHFInput';
import RHFRadio from '@components/RHF/RHFRadio';
import { HeadTitle, Container, Content, Subtitle, GridPersonalData, GridAddress } from './style';

const personalData = [
    { name: 'name', placeholder: 'Ваше имя*' },
    { name: 'surname', placeholder: 'Ваша фамилия*' },
    { name: 'email', placeholder: 'Ваш e-mail*' },
    { name: 'phone', placeholder: 'Ваш телефон*' },
];
const address = [
    { name: 'city', placeholder: 'Город*' },
    { name: 'postOffice', placeholder: 'Отделение почты*' },
];
const delivery = [
    { id: 'pickup', name: 'delivery', value: 1, label: 'Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)' },
    { id: 'newMail', name: 'delivery', value: 2, label: 'Новая Почта' },
    { id: 'russianPost', name: 'delivery', value: 3, label: 'Украпочта / 1-3 недели / 30$' },
];
const OrderRegistration = () => (
    <Container>
        <Content>
            <HeadTitle>Оформление заказа</HeadTitle>
            <Subtitle>Персональные данные:</Subtitle>
            <GridPersonalData>
                {personalData.map((data) => (
                    <RHFInput key={data.name} name={data.name} placeholder={data.placeholder} />
                ))}
            </GridPersonalData>
            <Subtitle>Способ доставки:</Subtitle>
            <RHFRadio name="delivery" option={delivery} />
            <Subtitle>Адрес доставки:</Subtitle>
            <GridAddress>
                {address.map((data) => (
                    <RHFInput key={data.name} name={data.name} placeholder={data.placeholder} />
                ))}
            </GridAddress>
            <Subtitle>Вы можете оплатить покупку одним из ниже перечисленных способов:</Subtitle>
        </Content>
    </Container>
);
export default OrderRegistration;
