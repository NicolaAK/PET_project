import React from 'react';
import StepBuy1 from '@assets/icons/stepBuy1.svg';
import StepBuy2 from '@assets/icons/stepBuy2.svg';
import StepBuy3 from '@assets/icons/stepBuy3.svg';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import { generateGithubPagesRoutes } from '../../routes';
import {
    Content,
    Container,
    HeaderText,
    BodyText,
    Conditions,
    Subtitle,
    Title,
    StepBuy,
    Step,
    Icon,
    BodyStep,
} from './style';

const paymentTexts = [
    {
        subtitle: 'Вы можете оплатить покупку одним из ниже перечисленных способов:',
        textOne: '• наложенным платежом в отделении Новой Почты',
        textTwo: '• денежным переводом  Visa/MasterCard',
        textThree: '• полная предоплата через Приват 24',
    },
    {
        subtitle: 'Мы готовы предложить несколько вариантов доставки:',
        textOne: '• отправка по всей Украине в отделение Новой Почты(1-2 дня)',
        textTwo: '• международные сервисы доставки для жителей зарубежья: Укрпочта( 1-3 недели ,DHL(3-7 дней)',
        textThree: '• Срок доставки: 1–2 дня с момента  заказа',
    },
];
const steps = [
    { icon: <StepBuy1 />, text: 'Выбрать в корзине способ оплаты "LIQPAY";' },
    { icon: <StepBuy2 />, text: 'Подтвердить заказ;' },
    {
        icon: <StepBuy3 />,
        text: 'После этого Вас перенаправит на сайт LIQPAY, где вы выбираете удобный для вас способ оплаты: через Приват24, или с помощью карты Mastercard/VISA со всего мира.',
    },
];
const URL = [
    { link: 'Главная', path: generateGithubPagesRoutes('') },
    { link: 'Оплата и доставка', path: '' },
];

const Payment = () => (
    <Container>
        <Breadcrumbs URL={URL} />
        <Content>
            <HeaderText>Оплата и доставка</HeaderText>
            <BodyText>
                {paymentTexts.map((text) => (
                    <Conditions key={text.subtitle}>
                        <Subtitle>{text.subtitle}</Subtitle>
                        <Title>{text.textOne}</Title>
                        <Title>{text.textTwo}</Title>
                        <Title>{text.textThree}</Title>
                    </Conditions>
                ))}
            </BodyText>
            <StepBuy>
                <Subtitle>Процесс оформления заказа с помощью LIQPAY:</Subtitle>
                <BodyStep>
                    {steps.map((step) => (
                        <Step key={step.text}>
                            <Icon>{step.icon}</Icon>
                            <Title>{step.text}</Title>
                        </Step>
                    ))}
                </BodyStep>
            </StepBuy>
        </Content>
    </Container>
);

export default Payment;
