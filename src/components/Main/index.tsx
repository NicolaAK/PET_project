import React from 'react';
import { MainContent, MainContainer, CategoryContainer, CategoryTitle } from '@components/Main/style';
import HeaderBox from '@components/Main/HeaderBox';
import SliderBox from '@components/Main/SliderCatalog';
import Subscription from '@components/Main/Subscription';
import { generateRoute } from '@utils/helpers';
import { ROUTES } from '../../routes/constants';

const Main = () => (
    <MainContainer>
        <HeaderBox />
        <MainContent>
            <CategoryContainer>
                <CategoryTitle to={generateRoute(ROUTES.CATALOG)}>Категории</CategoryTitle>
                <SliderBox />
            </CategoryContainer>
            <Subscription />
        </MainContent>
    </MainContainer>
);

export default Main;
