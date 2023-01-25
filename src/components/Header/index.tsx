import React, { FC } from 'react';
import {
    HeaderContent,
    HeaderContainer,
    AboutsCompany,
    SocialsMedia,
    LogoContainer,
    Settings,
    MenuContainer,
    Language,
} from '@components/Header/styled';
import AboutCompany from '@components/Header/components/AboutCompany';
// import Language from '@components/Header/components/Language/Language';
import Money from '@components/Header/components/Money/Money';
import SocialMedia from '@components/Header/components/SocialMedia';
import Menu from '@assets/icons/menu.svg';
import Logo from '@assets/icons/logo.svg';
import Search from '@assets/icons/search.svg';
import Profile from '@assets/icons/profile.svg';
import Favourites from '@assets/icons/favourites.svg';
import Shop from '@assets/icons/shop.svg';
import Dropdown from '@components/Dropdown';

interface IHeader {
    isDark: boolean;
}

const iconsProfile = [
    {
        id: 1,
        icon: <Search />,
    },
    {
        id: 2,
        icon: <Profile />,
    },
    {
        id: 3,
        icon: <Favourites />,
    },
    {
        id: 4,
        icon: <Shop />,
    },
];

const aboutCompany = [{ label: 'NEW' }, { label: 'КАТАЛОГ' }, { label: 'О НАС' }];

const language = [
    { value: 'RU', label: 'RU' },
    { value: 'EN', label: 'EN' },
    { value: 'UA', label: 'UA' },
];

const Header: FC<IHeader> = ({ isDark }) => (
    <HeaderContainer isDark={isDark}>
        <HeaderContent>
            <MenuContainer>
                <Menu />
            </MenuContainer>
            <AboutsCompany isDark={isDark}>
                {aboutCompany.map((about) => (
                    <AboutCompany key={about.label} label={about.label} />
                ))}
            </AboutsCompany>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <Settings isDark={isDark}>
                <Language>
                    <Dropdown options={language} />
                </Language>
                {/* <Language /> */}
                <Money />
            </Settings>
            <SocialsMedia>
                {iconsProfile.map((i) => (
                    <SocialMedia key={i.id} icon={i.icon} />
                ))}
            </SocialsMedia>
        </HeaderContent>
    </HeaderContainer>
);

export default Header;
