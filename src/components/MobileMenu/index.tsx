import React, { FC } from 'react';
import Dropdown from '@components/Header/components/Dropdown';
import Instagram from '@assets/icons/instagram.svg';
import Telegram from '@assets/icons/telegram.svg';
import Profile from '@assets/icons/profile.svg';
import User from '@assets/foto/profilePhoto/user.svg';
import { generateRoute } from '@utils/helpers';
import {
    LinkText,
    Container,
    Content,
    Line,
    Catalog,
    Language,
    Text,
    AboutsContainer,
    Icons,
    Title,
    Auth,
    Guest,
    IconUser,
    ProfileIcons,
    ProfileContainer,
} from './style';
import { ROUTES } from '../../routes/constants';

interface IArrow {
    value: string;
    label: string;
}

interface ICompany {
    label: string;
    link: string;
}
interface ITitles {
    title: string;
    link: string;
}
interface IProfile {
    id: number;
    icon: React.ReactNode;
    link: string;
}
interface IProps {
    hamburgerTitles: ITitles[];
    aboutCompany: ICompany[];
    handleBurgerOpen: () => void;
    language: string;
    languageArr: IArrow[];
    setLanguage: (arg0: string) => void;
    isAuth: boolean;
    toggleOpenImageFullScreen: () => void;
    iconsProfile: IProfile[];
}
const MobileMenu: FC<IProps> = ({
    hamburgerTitles,
    aboutCompany,
    handleBurgerOpen,
    languageArr,
    language,
    setLanguage,
    isAuth,
    toggleOpenImageFullScreen,
    iconsProfile,
}) => (
    <Container>
        <Content>
            <Line />
            <ProfileContainer>
                {isAuth &&
                    iconsProfile.map((icon) => (
                        <ProfileIcons onClick={handleBurgerOpen} key={icon.id} to={icon.link}>
                            {icon.icon}
                        </ProfileIcons>
                    ))}
                <Language>
                    <Dropdown width={48} value={language} onChange={setLanguage} options={languageArr} />
                </Language>
            </ProfileContainer>
            <Line />
            {!isAuth ? (
                <Guest onClick={toggleOpenImageFullScreen}>
                    <IconUser>
                        <Profile />
                    </IconUser>
                    <Title>ВОЙТИ</Title>
                </Guest>
            ) : (
                <Auth onClick={handleBurgerOpen} to={generateRoute(ROUTES.PROFILE)}>
                    <IconUser>
                        <User />
                    </IconUser>
                    <Title>ЛИЧНЫЙ КАБИНЕТ</Title>
                </Auth>
            )}
            <Line />
            {aboutCompany.map((item) => (
                <Catalog key={item.label}>
                    <LinkText onClick={handleBurgerOpen} to={item.link}>
                        {item.label}
                    </LinkText>
                    <Line />
                </Catalog>
            ))}
            {hamburgerTitles.map((item) => (
                <Catalog key={item.title}>
                    <LinkText onClick={handleBurgerOpen} to={item.link}>
                        {item.title}
                    </LinkText>
                    <Line />
                </Catalog>
            ))}
            <AboutsContainer>
                <Icons>
                    <Instagram />
                    <Telegram />
                </Icons>
                <Text>+7 913 557 15 79</Text>
                <Text>kolyankalachev@mail.ru</Text>
            </AboutsContainer>
        </Content>
    </Container>
);

export default MobileMenu;
