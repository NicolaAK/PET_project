import React from 'react';
import { MainContent, MainContainer, CategoryContainer, CategoryTitle } from '@components/Main/styled';
import HeaderBox from '@components/Main/HeaderBox';
import SliderBox from '@components/Main/SliderCatalog';
import Subscription from '@components/Main/Subscription';
import Dropdown from '@components/Dropdown';

const Main = () => (
    <MainContainer>
        <MainContent>
            <HeaderBox />
            <CategoryContainer>
                <CategoryTitle>Категории</CategoryTitle>
                <SliderBox />
            </CategoryContainer>
            <Subscription />
            <Dropdown />
        </MainContent>
    </MainContainer>
);

export default Main;
