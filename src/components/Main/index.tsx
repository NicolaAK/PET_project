import React from 'react';
import { MainContent, MainContainer } from '@components/Main/styled';
import HeaderBox from '@components/Main/HeaderBox';
import SliderBox from '@components/Main/SliderCatalog';
const Main = () => (
    <MainContainer>
        <MainContent>
            <HeaderBox />
            <SliderBox />
        </MainContent>
    </MainContainer>
);

export default Main;
