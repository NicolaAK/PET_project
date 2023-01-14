import React from 'react';
import {
    FooterContent,
    FooterContainer,
    AboutsCompany,
    SocialsMedia,
    LogoContainer,
    Settings,
} from '@components/Header/styled';
import AboutCompany from '@components/Header/components/AboutCompany';
import Language from '@components/Header/components/Language/Language';
import Money from '@components/Header/components/Money/Money';
import SocialMedia from '@components/Header/components/SocialMedia';
import Menu from '@assets/icons/menu.svg';
import Logo from '@assets/icons/logo.svg';
import Search from '@assets/icons/search.svg';
import Profile from '@assets/icons/profile.svg';
import Favourites from '@assets/icons/favourites.svg';
import Shop from '@assets/icons/shop.svg';

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
const Header = () => (
    <FooterContainer>
        <FooterContent>
            <Menu />
            <AboutsCompany>
                {aboutCompany.map((about) => (
                    <AboutCompany key={about.label} label={about.label} />
                ))}
            </AboutsCompany>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <Settings>
                <Language />
                <Money />
            </Settings>
            <SocialsMedia>
                {iconsProfile.map((i) => (
                    <SocialMedia key={i.id} icon={i.icon} />
                ))}
            </SocialsMedia>
        </FooterContent>
    </FooterContainer>
);

export default Header;
