import React, { FC, useState } from 'react';
import {
    HeaderContent,
    HeaderContainer,
    MenuContainer,
    BurgerContainer,
    Menu,
    ContainerMobile,
} from '@components/Header/style';
import Burger from '@components/Header/components/BurgerMenu';
import MenuClose from '@components/Header/components/MenuClose';
import MenuOpen from '@components/Header/components/MenuOpen';
import MobileMenu from '@components/MobileMenu';
import { generateRoute } from '@utils/helpers';
import Favourites from '@assets/icons/favourites.svg';
import Shop from '@assets/icons/shop.svg';
import { useSelector } from 'react-redux';
import { getIsAuth } from '@store/user/selectors';
import { ROUTES } from '../../routes/constants';

interface IHeader {
    $isDark: boolean;
    isOpenBurger: boolean;
    setIsOpenBurger: (value: boolean) => void;
    isMobileMenu: boolean;
    isDesktopMenu: boolean;
}

const languageArr = [
    { value: 'RU', label: 'RU' },
    { value: 'EN', label: 'EN' },
    { value: 'UA', label: 'UA' },
];

const hamburgerTitles = [
    { title: 'ОПЛАТА И ДОСТАВКА', link: generateRoute(ROUTES.PAYMENT) },
    { title: 'УСЛОВИЯ ВОЗВРАТА', link: generateRoute(ROUTES.REFUND) },
    { title: 'КОНТАКТЫ', link: generateRoute(ROUTES.ABOUTS) },
];

const iconsProfile = [
    {
        id: 2,
        icon: <Favourites />,
        link: generateRoute(ROUTES.FAVOURITES),
    },
    {
        id: 3,
        icon: <Shop />,
        link: generateRoute(ROUTES.CART),
    },
];

const aboutCompany = [
    { label: 'КАТАЛОГ', link: generateRoute(ROUTES.CATALOG) },
    { label: 'О НАС', link: generateRoute(ROUTES.ABOUTS) },
];

const Header: FC<IHeader> = ({ $isDark, setIsOpenBurger, isOpenBurger, isMobileMenu, isDesktopMenu }) => {
    const [openModal, setModalOpen] = useState(false);
    const [language, setLanguage] = useState(languageArr[0].value);
    const toggleOpenImageFullScreen = () => setModalOpen(!openModal);
    const isAuth = useSelector(getIsAuth);
    const handleBurgerOpen = () => setIsOpenBurger(!isOpenBurger);

    return (
        <Menu>
            <HeaderContainer>
                <HeaderContent $isDark={$isDark}>
                    <BurgerContainer>
                        <Burger $isDark={$isDark} open={isOpenBurger} onClick={handleBurgerOpen} />
                    </BurgerContainer>
                    <MenuContainer>
                        <MenuClose open={isDesktopMenu} $isDark={$isDark} hamburgerTitles={hamburgerTitles} />
                        <MenuOpen
                            iconsProfile={iconsProfile}
                            aboutCompany={aboutCompany}
                            open={isDesktopMenu}
                            $isDark={$isDark}
                            languageArr={languageArr}
                            language={language}
                            setLanguage={setLanguage}
                            isAuth={isAuth}
                            toggleOpenImageFullScreen={toggleOpenImageFullScreen}
                            openModal={openModal}
                            setModalOpen={setModalOpen}
                        />
                    </MenuContainer>
                </HeaderContent>
            </HeaderContainer>
            <ContainerMobile open={isMobileMenu}>
                <MobileMenu
                    hamburgerTitles={hamburgerTitles}
                    aboutCompany={aboutCompany}
                    handleBurgerOpen={handleBurgerOpen}
                    languageArr={languageArr}
                    language={language}
                    setLanguage={setLanguage}
                    isAuth={isAuth}
                    toggleOpenImageFullScreen={toggleOpenImageFullScreen}
                />
            </ContainerMobile>
        </Menu>
    );
};

export default Header;
