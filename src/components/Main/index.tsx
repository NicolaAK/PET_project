import React from 'react';
import { MainContent, MainContainer, CategoryContainer, CategoryTitle } from '@components/Main/styled';
import HeaderBox from '@components/Main/HeaderBox';
import SliderBox from '@components/Main/SliderCatalog';
const Main = () => (
    <MainContainer>
        <MainContent>
            <HeaderBox />
            <CategoryContainer>
                <CategoryTitle>Категории</CategoryTitle>
                <SliderBox />
            </CategoryContainer>
        </MainContent>
    </MainContainer>
);

export default Main;
