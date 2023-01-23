import React, { useState } from 'react';
import { MainContent, MainContainer, CategoryContainer, CategoryTitle } from '@components/Main/styled';
import HeaderBox from '@components/Main/HeaderBox';
import SliderBox from '@components/Main/SliderCatalog';
import Subscription from '@components/Main/Subscription';

const Main = () => (
    <MainContainer>
        <MainContent>
            <HeaderBox />
            <CategoryContainer>
                <CategoryTitle>Категории</CategoryTitle>
                <SliderBox />
            </CategoryContainer>
            <Subscription />
        </MainContent>
    </MainContainer>
);

export default Main;
