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
    { name: 'delivery', value: 'pickup', label: 'Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)' },
    { name: 'delivery', value: 'russianPost', label: 'Украпочта / 1-3 недели / 30$' },
    { name: 'delivery', value: 'newMail', label: 'Новая Почта' },
    { name: 'delivery', value: 'DHL', label: 'DHL / 3-7 дней / 60$' },
];
const payment = [
    { name: 'payment', value: 'prepayment', label: 'Полная предоплата через Приват 24' },
    { name: 'payment', value: 'Visa/MasterCard', label: 'Денежным переводом  Visa/MasterCard' },
    { name: 'payment', value: 'cashMail', label: 'Наложенным платежом в отделении Новой Почты' },
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
                        <RHFRadio key={item.value} name={item.name} value={item.value} label={item.label} />
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
                        <RHFRadio key={item.value} name={item.name} value={item.value} label={item.label} />
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
