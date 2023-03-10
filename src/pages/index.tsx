import React from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { useLocation } from 'react-router-dom';
import { PagesContainer } from './style';
import Routes from '../routes';

const Pages = () => {
    const location = useLocation();
    const isMainPage = location.pathname === `/`;

    return (
        <PagesContainer>
            <Header $isDark={!isMainPage} />
            <Routes />
            <Footer />
        </PagesContainer>
    );
};

export default Pages;
