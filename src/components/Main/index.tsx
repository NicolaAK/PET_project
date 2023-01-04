import React from 'react';
import product from '@assets/images/product.png';
import {
    MainContainer,
    MainContent,
    Delivery,
    PromoContainer,
    Promo,
    PromoTitle,
    PromoContent,
    AllPromo,
    DeliveryText,
    DeliveryBG,
    DeliveryContainer,
} from '@components/Main/style';

const Main = () => (
    <MainContainer>
        <DeliveryContainer>
            <MainContent>
                <Delivery>
                    <DeliveryBG src={product} alt="product" />
                    <DeliveryText>Доставка бесплатно от 1000 ₽</DeliveryText>
                </Delivery>
            </MainContent>
        </DeliveryContainer>
        <MainContent>
            <PromoContainer>
                <PromoContent>
                    <PromoTitle>
                        <Promo>Акции</Promo>
                        <AllPromo>Все акции</AllPromo>
                    </PromoTitle>
                </PromoContent>
            </PromoContainer>
        </MainContent>
    </MainContainer>
);

export default Main;
