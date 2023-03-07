import React from 'react';
import { Button } from '@components/ReusedComponents/Button';
import { generateGithubPagesRoutes } from '@utils/helpers';
import { useFormContext } from 'react-hook-form';
import { currency, labelSymbol } from '@components/Catalog/components/Products/Product';
import { Content, Container, TextLink, Text, GridOrder, TextInfo, Title, Conditions } from './style';
import { ROUTES } from '../../../routes/constants';

const hamburgerTitles = [
    { title: 'УСЛОВИЯ ДОСТАВКИ', link: generateGithubPagesRoutes(ROUTES.PAYMENT) },
    { title: 'УСЛОВИЯ ОБМЕНА И ВОЗВРАТА', link: generateGithubPagesRoutes(ROUTES.REFUND) },
    { title: 'ИНФОРМАЦИЯ ОБ ОПЛАТЕ', link: generateGithubPagesRoutes(ROUTES.PAYMENT) },
];

const MakingOrder = () => {
    const { watch } = useFormContext();
    const sumAll = watch('allSum');
    return (
        <Container>
            <Content>
                <Text>
                    {hamburgerTitles.map((title) => (
                        <TextLink to={title.link}>{title.title}</TextLink>
                    ))}
                </Text>
                <GridOrder>
                    <TextInfo>ДОСТАВКА:</TextInfo>
                    <Title>По тарифам перевозчика</Title>
                    <Text>ИТОГО:</Text>
                    <Title>
                        {sumAll} {labelSymbol[currency]}
                    </Title>
                </GridOrder>
                <Button>ОФОРМИТЬ ЗАКАЗ</Button>
                <Conditions>
                    Нажимая на кнопку «оплатить заказ», я принимаю условия публичной оферты и политики
                    конфиденциальности
                </Conditions>
            </Content>
        </Container>
    );
};

export default MakingOrder;
