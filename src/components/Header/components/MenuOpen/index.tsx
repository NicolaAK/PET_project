import AboutCompany from '@components/Header/components/AboutCompany';
import Logo from '@assets/icons/logo.svg';
import Dropdown from '@components/Header/components/Dropdown';
import SocialMedia from '@components/Header/components/SocialMedia';
import React, { useState } from 'react';
import SearchIcon from '@assets/icons/search.svg';
import Profile from '@assets/icons/profile.svg';
import Favourites from '@assets/icons/favourites.svg';
import Shop from '@assets/icons/shop.svg';
import User from '@assets/foto/profilePhoto/user.svg';
import { Link } from 'react-router-dom';
import { generateRoute } from '@utils/helpers';
import { useSelector } from 'react-redux';
import { getIsAuth } from '@store/user/selectors';
import { useAppDispatch } from '@store';
import { setAuth } from '@store/user';
import Registration from '@components/Header/components/Registration';
import {
    AboutsCompany,
    Language,
    MenuLogo,
    MenuContainerOpen,
    Settings,
    SocialsMedia,
    Search,
    ProfileLink,
    ProfileContainer,
} from './style';
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
}

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
    { label: 'NEW', link: 'category' },
    { label: 'КАТАЛОГ', link: generateRoute(ROUTES.CATALOG) },
    { label: 'О НАС', link: generateRoute(ROUTES.ABOUTS) },
];
const MenuOpen = ({ $isDark, languageArr, setLanguage, language, open }: IHeader) => {
    const [openModal, setModalOpen] = useState(false);
    const toggleOpenImageFullScreen = () => setModalOpen(!openModal);
    const dispatch = useAppDispatch();

    const isAuth = useSelector(getIsAuth);
    const toggleRegistrationClick = () => {
        dispatch(setAuth(true));
        setModalOpen(false);
    };
    return (
        <>
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
                </Settings>
                <SocialsMedia>
                    <Search>
                        <SearchIcon />
                    </Search>
                    {!isAuth ? (
                        <ProfileContainer onClick={toggleOpenImageFullScreen}>
                            <Profile />
                        </ProfileContainer>
                    ) : (
                        <>
                            {iconsProfile.map((icon) => (
                                <SocialMedia key={icon.id} icon={icon.icon} link={icon.link} />
                            ))}
                            <ProfileLink to={generateRoute(ROUTES.PROFILE)}>
                                <User />
                            </ProfileLink>
                        </>
                    )}
                </SocialsMedia>
            </MenuContainerOpen>
            {openModal && <Registration onChange={toggleOpenImageFullScreen} isAuth={toggleRegistrationClick} />}
        </>
    );
};

export default MenuOpen;
