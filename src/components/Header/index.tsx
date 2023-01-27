import React, { FC, useState } from 'react';
import {
    HeaderContent,
    HeaderContainer,
    AboutsCompany,
    SocialsMedia,
    LogoContainer,
    Settings,
    MenuContainer,
    Language,
    Money,
    MenuClose,
    Bar,
    MenuTitle,
    MenuLogo,
    CrossContainer,
    BarContainer,
} from '@components/Header/styled';
import AboutCompany from '@components/Header/components/AboutCompany';
import SocialMedia from '@components/Header/components/SocialMedia';
import Search from '@assets/icons/search.svg';
import Profile from '@assets/icons/profile.svg';
import Favourites from '@assets/icons/favourites.svg';
import Shop from '@assets/icons/shop.svg';
import Dropdown from '@components/Dropdown';
import Menu from '@assets/icons/menu.svg';
import Cross from '@assets/icons/cross.svg';
import Logo from '@assets/icons/logo.svg';

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
const moneyArr = [
    { value: 'RUB', label: 'RUB' },
    { value: 'USD', label: 'USD' },
    { value: 'UAH', label: 'UAH' },
];
const languageArr = [
    { value: 'RU', label: 'RU' },
    { value: 'EN', label: 'EN' },
    { value: 'UA', label: 'UA' },
];
const hamburgerTitles = [{ title: 'ОПЛАТА И ДОСТАВКА' }, { title: 'УСЛОВИЯ ВОЗВРАТА' }, { title: 'КОНТАКТЫ' }];
const Header: FC<IHeader> = ({ isDark }) => {
    const [money, setMoney] = useState(moneyArr[0].value);
    const [language, setLanguage] = useState(languageArr[0].value);
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
        setIsOpen(!isOpen);
    };
    return (
        <HeaderContainer isDark={isDark}>
            <HeaderContent>
                <MenuContainer>
                    {isOpen ? (
                        <MenuTitle>
                            <CrossContainer onClick={clickHandler}>
                                <Cross />
                            </CrossContainer>
                            {hamburgerTitles.map((hamburger) => (
                                <BarContainer>
                                    <Bar isDark={isDark} key={hamburger.title}>
                                        {hamburger.title}
                                    </Bar>{' '}
                                </BarContainer>
                            ))}
                        </MenuTitle>
                    ) : (
                        <MenuClose>
                            <LogoContainer onClick={clickHandler}>
                                <Menu />
                            </LogoContainer>
                            <AboutsCompany isDark={isDark}>
                                {aboutCompany.map((about) => (
                                    <AboutCompany key={about.label} label={about.label} />
                                ))}
                            </AboutsCompany>
                            <MenuLogo>
                                <Logo />
                            </MenuLogo>
                            <Settings isDark={isDark}>
                                <Language>
                                    <Dropdown
                                        width={48}
                                        value={language}
                                        onChange={setLanguage}
                                        options={languageArr}
                                    />
                                </Language>
                                <Money>
                                    <Dropdown width={56} value={money} onChange={setMoney} options={moneyArr} />
                                </Money>
                            </Settings>
                            <SocialsMedia>
                                {iconsProfile.map((i) => (
                                    <SocialMedia key={i.id} icon={i.icon} />
                                ))}
                            </SocialsMedia>
                        </MenuClose>
                    )}
                </MenuContainer>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;
