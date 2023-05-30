import AboutCompany from '@components/Header/components/AboutCompany';
import Logo from '@assets/icons/logo.svg';
import Dropdown from '@components/Header/components/Dropdown';
import SocialMedia from '@components/Header/components/SocialMedia';
import React, { Dispatch, SetStateAction } from 'react';
import SearchIcon from '@assets/icons/search.svg';
import Profile from '@assets/icons/profile.svg';
import User from '@assets/foto/profilePhoto/user.svg';
import { Link } from 'react-router-dom';
import { generateRoute } from '@utils/helpers';
import Registration from '@components/Header/components/Registration';
import { useMediaHook } from '@theme/breakpoints';
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
interface ICompany {
    link: string;
    label: string;
}
interface IProfile {
    id: number;
    icon: React.ReactNode;
    link: string;
}
interface IHeader {
    $isDark: boolean;
    open: boolean;
    language: string;
    setLanguage: (arg0: string) => void;
    languageArr: IArrow[];
    aboutCompany: ICompany[];
    iconsProfile: IProfile[];
    isAuth: boolean;
    toggleOpenImageFullScreen: () => void;
    openModal: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuOpen = ({
    $isDark,
    languageArr,
    setLanguage,
    language,
    open,
    aboutCompany,
    iconsProfile,
    isAuth,
    toggleOpenImageFullScreen,
    setModalOpen,
    openModal,
}: IHeader) => {
    const { isSm } = useMediaHook();

    return (
        <>
            <MenuContainerOpen open={open}>
                {!isSm && (
                    <AboutsCompany $isDark={$isDark}>
                        {aboutCompany.map((about) => (
                            <AboutCompany key={about.label} label={about.label} link={about.link} />
                        ))}
                    </AboutsCompany>
                )}
                <MenuLogo>
                    <Link to={generateRoute(ROUTES.DASHBOARD)}>
                        <Logo />
                    </Link>
                </MenuLogo>
                {!isSm && (
                    <>
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
                    </>
                )}
            </MenuContainerOpen>
            {openModal && <Registration onChange={toggleOpenImageFullScreen} setModalOpen={setModalOpen} />}
        </>
    );
};

export default MenuOpen;
