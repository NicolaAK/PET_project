import React from 'react';
import { MainContent, MainContainer, CategoryContainer, CategoryTitle } from '@components/Main/styled';
import HeaderBox from '@components/Main/HeaderBox';
import SliderBox from '@components/Main/SliderCatalog';
import { Button } from '@components/Button';
const Main = () => (
    <MainContainer>
        <MainContent>
            <HeaderBox />
            <CategoryContainer>
                <CategoryTitle>Категории</CategoryTitle>
                <SliderBox />
            </CategoryContainer>
            <Button color="primary">отправить</Button>
            <Button color="favourites">отправить</Button>
        </MainContent>
    </MainContainer>
);

export default Main;
