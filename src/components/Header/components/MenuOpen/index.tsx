import AboutCompany from '@components/Header/components/AboutCompany';
import Logo from '@assets/icons/logo.svg';
import Dropdown from '@components/Header/components/Dropdown';
import SocialMedia from '@components/Header/components/SocialMedia';
import React from 'react';
import Search from '@assets/icons/search.svg';
import Profile from '@assets/icons/profile.svg';
import Favourites from '@assets/icons/favourites.svg';
import Shop from '@assets/icons/shop.svg';
import { Link } from 'react-router-dom';
import { generateRoute } from '@utils/helpers';
import { AboutsCompany, Language, MenuLogo, MenuContainerOpen, Settings, SocialsMedia } from './style';
import { ROUTES } from '../../../../routes/constants';

interface IArrow {
    value: string;
    label: string;
}
interface IHeader {
    $isDark: boolean;
    open: boolean;
    language: string;
    setLanguage: (arg0: string) => void;
    languageArr: IArrow[];
    // money: string;
    // setMoney: (arg0: string) => void;
    // moneyArr: IArrow[];
}

const iconsProfile = [
    {
        id: 1,
        icon: <Search />,
        link: generateRoute(''),
    },
    {
        id: 2,
        icon: <Profile />,
        link: generateRoute(ROUTES.PROFILE),
    },
    {
        id: 3,
        icon: <Favourites />,
        link: generateRoute(ROUTES.FAVOURITES),
    },
    {
        id: 4,
        icon: <Shop />,
        link: generateRoute(ROUTES.CART),
    },
];
const aboutCompany = [
    { label: 'NEW', link: 'category' },
    { label: 'КАТАЛОГ', link: generateRoute(ROUTES.CATALOG) },
    { label: 'О НАС', link: generateRoute(ROUTES.ABOUTS) },
];
const MenuOpen = ({ $isDark, languageArr, setLanguage, language, open }: IHeader) => (
    <MenuContainerOpen open={open}>
        <AboutsCompany $isDark={$isDark}>
            {aboutCompany.map((about) => (
                <AboutCompany key={about.label} label={about.label} link={about.link} />
            ))}
        </AboutsCompany>
        <MenuLogo>
            <Link to={generateRoute(ROUTES.DASHBOARD)}>
                <Logo />
            </Link>
        </MenuLogo>
        <Settings $isDark={$isDark}>
            <Language>
                <Dropdown width={48} value={language} onChange={setLanguage} options={languageArr} />
            </Language>
            {/* <Money> */}
            {/*    <Dropdown width={56} value={money} onChange={setMoney} options={moneyArr} /> */}
            {/* </Money> */}
        </Settings>
        <SocialsMedia>
            {iconsProfile.map((icon) => (
                <SocialMedia key={icon.id} icon={icon.icon} link={icon.link} />
            ))}
        </SocialsMedia>
    </MenuContainerOpen>
);
export default MenuOpen;
