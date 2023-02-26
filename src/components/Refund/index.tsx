import React from 'react';
import Icon1 from '@assets/icons/refund/1.svg';
import Icon2 from '@assets/icons/refund/2.svg';
import Icon3 from '@assets/icons/refund/3.svg';
import Icon4 from '@assets/icons/refund/4.svg';
import Icon5 from '@assets/icons/refund/5.svg';
import Icon6 from '@assets/icons/refund/6.svg';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import { generateGithubPagesRoutes } from '@utils/helpers';
import { Content, Container, HeaderText, Subtitle, Body, Item, Icon, Text } from './style';

const refunds = [
    {
        icon: <Icon1 />,
        text: 'если заказ не был использован и сохранил товарный вид(в том числе не нарушены бирки, ярлыки, упаковочные материалы)',
    },
    {
        icon: <Icon2 />,
        text: 'возврат и обмен осуществляется в течение двух дней с момента получения заказа',
    },
    {
        icon: <Icon3 />,
        text: 'возврат и обмен товара возможен только при отправке по Украине',
    },
    {
        icon: <Icon4 />,
        text: 'бланк возврата присутствует в каждой посылке',
    },
    {
        icon: <Icon5 />,
        text: 'все расходы по обмену и возврату товара несет покупатель',
    },
    {
        icon: <Icon6 />,
        text: 'после получения возврата мы делаем перевод денежных средств на карту клиента',
    },
];
const URL = [
    { link: 'Главная', path: generateGithubPagesRoutes('') },
    { link: 'Обмен и воврат', path: '' },
];
const Refund = () => (
    <Container>
        <Breadcrumbs URL={URL} />
        <Content>
            <HeaderText>Обмен и воврат</HeaderText>
            <Subtitle>Если вам не подошел заказ, мы с удовольствием вам его обменяем или примем возврат</Subtitle>
            <Subtitle>Обмен и возврат возможен в случае:</Subtitle>
            <Body>
                {refunds.map((refund) => (
                    <Item>
                        <Icon>{refund.icon}</Icon>
                        <Text>{refund.text}</Text>
                    </Item>
                ))}
            </Body>
        </Content>
    </Container>
);

export default Refund;
