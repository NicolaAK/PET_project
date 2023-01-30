import AboutCompany from '@components/Header/components/AboutCompany';
import Logo from '@assets/icons/logo.svg';
import Dropdown from '@components/Dropdown';
import SocialMedia from '@components/Header/components/SocialMedia';
import React from 'react';
import Search from '@assets/icons/search.svg';
import Profile from '@assets/icons/profile.svg';
import Favourites from '@assets/icons/favourites.svg';
import Shop from '@assets/icons/shop.svg';
import { AboutsCompany, Language, MenuLogo, MenuContainerOpen, Money, Settings, SocialsMedia } from './style';

interface IArrow {
    value: string;
    label: string;
}
interface IHeader {
    isDark: boolean;
    language: string;
    setLanguage: (arg0: string) => void;
    languageArr: IArrow[];
    money: string;
    setMoney: (arg0: string) => void;
    moneyArr: IArrow[];
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
const MenuOpen = ({ isDark, money, setMoney, moneyArr, languageArr, setLanguage, language }: IHeader) => (
    <MenuContainerOpen>
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
                <Dropdown width={48} value={language} onChange={setLanguage} options={languageArr} />
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
    </MenuContainerOpen>
);
export default MenuOpen;
