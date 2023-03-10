import React from 'react';
import { Button } from '@components/ReusedComponents/Button';
import { generateRoute } from '@utils/helpers';
import { useFormContext } from 'react-hook-form';
import { currency, labelSymbol } from '@components/Catalog/components/Products/Product';
import { Content, Container, TextLink, Text, GridOrder, TextInfo, Title, Conditions } from './style';
import { ROUTES } from '../../../routes/constants';

const hamburgerTitles = [
    { title: 'УСЛОВИЯ ДОСТАВКИ', link: generateRoute(ROUTES.PAYMENT) },
    { title: 'УСЛОВИЯ ОБМЕНА И ВОЗВРАТА', link: generateRoute(ROUTES.REFUND) },
    { title: 'ИНФОРМАЦИЯ ОБ ОПЛАТЕ', link: generateRoute(ROUTES.PAYMENT) },
];

const MakingOrder = () => {
    const { watch } = useFormContext();
    const sumAll = watch('allSum');
    return (
        <Container>
            <Content>
                <Text>
                    {hamburgerTitles.map((title) => (
                        <TextLink key={title.title} to={title.link}>
                            {title.title}
                        </TextLink>
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
