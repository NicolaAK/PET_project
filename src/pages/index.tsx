import React, { useState } from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from '@store/user/selectors';
import { useMediaHook } from '@theme/breakpoints';
import MobileMenu from '@components/MobileMenu';
import { PagesContainer } from './style';
import Routes from '../routes';

const Pages = () => {
    const [isOpenBurger, setIsOpenBurger] = useState(false);
    const { isMd } = useMediaHook();
    const location = useLocation();
    const isMainPage = location.pathname === `/`;
    const isAuth = useSelector(getIsAuth);
    const isMobileMenu = !isMd || !isOpenBurger;

    return (
        <PagesContainer>
            <Header $isDark={!isMainPage} isOpenBurger={isOpenBurger} setIsOpenBurger={setIsOpenBurger} />
            {isMobileMenu ? <Routes isAuth={isAuth} /> : <MobileMenu />}
            <Footer />
        </PagesContainer>
    );
};

export default Pages;
