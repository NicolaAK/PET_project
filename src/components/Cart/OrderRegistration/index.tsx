import React from 'react';
import RHFInput from '@components/RHF/RHFInput';
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
