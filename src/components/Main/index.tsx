import React from 'react';

import {
    MainContainer,
    MainContent,
    Delivery,
    PromoContainer,
    Promo,
    PromoTitle,
    PromoContent,
    AllPromo,
} from '@components/Main/style';

const Main = () => (
    <MainContainer>
        <MainContent>
            <Delivery />
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
