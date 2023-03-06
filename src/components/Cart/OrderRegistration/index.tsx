import React, { FC } from 'react';
import RHFInput from '@components/RHF/RHFInput';
import RHFRadio from '@components/RHF/RHFRadio';
import { Button } from '@components/ReusedComponents/Button';
import { ErrorText } from '@components/ReusedComponents/Input/style';
import { ADD_ORDER_REGISTRATION_CART } from '@components/Cart/OrderRegistration/validations';
import {
    HeadTitle,
    Container,
    Content,
    Subtitle,
    GridPersonalData,
    GridAddress,
    ContainerDelivery,
    ContainerPayment,
    ContentPayment,
    ContentDelivery,
    Conditions,
} from './style';

const personalData = [
    { name: ADD_ORDER_REGISTRATION_CART.NAME, placeholder: 'Ваше имя*' },
    { name: ADD_ORDER_REGISTRATION_CART.SURNAME, placeholder: 'Ваша фамилия*' },
    { name: ADD_ORDER_REGISTRATION_CART.EMAIL, placeholder: 'Ваш e-mail*' },
    { name: ADD_ORDER_REGISTRATION_CART.PHONE, placeholder: 'Ваш телефон*' },
];
const address = [
    { name: ADD_ORDER_REGISTRATION_CART.CITY, placeholder: 'Город*' },
    { name: ADD_ORDER_REGISTRATION_CART.POSTOFFICE, placeholder: 'Отделение почты*' },
];
const delivery = [
    { value: 'pickup', label: 'Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)' },
    { value: 'russianPost', label: 'Украпочта / 1-3 недели / 30$' },
    { value: 'newMail', label: 'Новая Почта' },
    { value: 'DHL', label: 'DHL / 3-7 дней / 60$' },
];
const payment = [
    { value: 'prepayment', label: 'Полная предоплата через Приват 24' },
    { value: 'Visa/MasterCard', label: 'Денежным переводом  Visa/MasterCard' },
    { value: 'cashMail', label: 'Наложенным платежом в отделении Новой Почты' },
];
interface IForm {
    errors?: any;
}
const OrderRegistration: FC<IForm> = ({ errors }) => (
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
            <ContainerDelivery>
                <ContentDelivery>
                    <Subtitle>По России:</Subtitle>
                    <Subtitle>Международная доставка:</Subtitle>
                    {delivery.map((item) => (
                        <RHFRadio
                            key={item.value}
                            name={ADD_ORDER_REGISTRATION_CART.DELIVERY}
                            value={item.value}
                            label={item.label}
                        />
                    ))}
                </ContentDelivery>
                {errors?.[ADD_ORDER_REGISTRATION_CART.PAYMENT] && (
                    <ErrorText>{errors[ADD_ORDER_REGISTRATION_CART.DELIVERY]?.message}</ErrorText>
                )}
            </ContainerDelivery>
            <Subtitle>Адрес доставки:</Subtitle>
            <GridAddress>
                {address.map((data) => (
                    <RHFInput key={data.name} name={data.name} placeholder={data.placeholder} />
                ))}
            </GridAddress>
            <Subtitle>Вы можете оплатить покупку одним из ниже перечисленных способов:</Subtitle>
            <ContainerPayment>
                <ContentPayment>
                    {payment.map((item) => (
                        <RHFRadio
                            key={item.value}
                            name={ADD_ORDER_REGISTRATION_CART.PAYMENT}
                            value={item.value}
                            label={item.label}
                        />
                    ))}
                </ContentPayment>
                {errors?.[ADD_ORDER_REGISTRATION_CART.PAYMENT] && (
                    <ErrorText>{errors[ADD_ORDER_REGISTRATION_CART.DELIVERY]?.message}</ErrorText>
                )}
            </ContainerPayment>
            <Button>ОФОРМИТЬ ЗАКАЗ</Button>
            <Conditions>
                Нажимая на кнопку «оплатить заказ», я принимаю условия публичной оферты и политики конфиденциальности
            </Conditions>
        </Content>
    </Container>
);
export default OrderRegistration;
