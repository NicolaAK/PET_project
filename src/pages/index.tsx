import React, { useState } from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from '@store/user/selectors';
import { useMediaHook } from '@theme/breakpoints';
import { PagesContainer, VisibleDesktop } from './style';
import Routes from '../routes';

const Pages = () => {
    const [isOpenBurger, setIsOpenBurger] = useState(false);
    const { isSm } = useMediaHook();
    const isDesktopMenu = isOpenBurger && !isSm;
    const isMobileMenu = !isSm || !isOpenBurger;
    const location = useLocation();
    const isMainPage = location.pathname === `/`;
    const isAuth = useSelector(getIsAuth);

    return (
        <PagesContainer>
            <Header
                $isDark={!isMainPage || !isMobileMenu}
                isOpenBurger={isOpenBurger}
                setIsOpenBurger={setIsOpenBurger}
                isDesktopMenu={isDesktopMenu}
                isMobileMenu={isMobileMenu}
            />
            <VisibleDesktop visible={!isMobileMenu}>
                <Routes isAuth={isAuth} />
                <Footer />
            </VisibleDesktop>
        </PagesContainer>
    );
};

export default Pages;
