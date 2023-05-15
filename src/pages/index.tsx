import React from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from '@store/user/selectors';
import { PagesContainer } from './style';
import Routes from '../routes';

const Pages = () => {
    const location = useLocation();
    const isMainPage = location.pathname === `/`;
    const isAuth = useSelector(getIsAuth);
    return (
        <PagesContainer>
            <Header $isDark={!isMainPage} />
            <Routes isAuth={isAuth} />
            <Footer />
        </PagesContainer>
    );
};

export default Pages;
