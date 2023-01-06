import React from 'react';
import product from '@assets/images/product.png';
import {
    MainContainer,
    MainContent,
    Delivery,
    DeliveryText,
    DeliveryBG,
    DeliveryContainer,
} from '@components/Main/style';
import SpecialCards from '@components/Main/SpecialCards/SpecialCards';

const Main = () => (
    <MainContainer>
        <DeliveryContainer>
            <Delivery>
                <DeliveryBG src={product} alt="product" />
                <DeliveryText>Доставка бесплатно от 1000 ₽</DeliveryText>
            </Delivery>
        </DeliveryContainer>
        <MainContent>
            <SpecialCards />
        </MainContent>
    </MainContainer>
);

export default Main;
