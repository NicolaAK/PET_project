import React from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { useLocation } from 'react-router-dom';
import { PagesContainer } from './styles';
import Routes from '../routes';
import { ROUTES } from '../routes/constants';
const Pages = () => {
    const location = useLocation();
    const isMainPage = !(location.pathname === `/${ROUTES.YANKI}/` || location.pathname === `/${ROUTES.YANKI}`);
    return (
        <PagesContainer>
            <Header $isDark={isMainPage} />
            <Routes />
            <Footer />
        </PagesContainer>
    );
};

export default Pages;
