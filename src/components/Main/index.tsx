import React from 'react';
import { MainContent, MainContainer, CategoryContainer, CategoryTitle } from '@components/Main/style';
import HeaderBox from '@components/Main/HeaderBox';
import SliderBox from '@components/Main/SliderCatalog';
import Subscription from '@components/Main/Subscription';
import { generateGithubPagesRoutes } from '../../routes';
import { ROUTES } from '../../routes/constants';

const Main = () => (
    <MainContainer>
        <MainContent>
            <HeaderBox />
            <CategoryContainer>
                <CategoryTitle to={generateGithubPagesRoutes(ROUTES.CATALOG)}>Категории</CategoryTitle>
                <SliderBox />
            </CategoryContainer>
            <Subscription />
        </MainContent>
    </MainContainer>
);

export default Main;
