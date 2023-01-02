import React from 'react';
import Menu from '@assets/icons/menu.svg';
import Logo from '@assets/icons/logo.svg';
import SearchIcon from '@assets/icons/search.svg';
import Cart from '@assets/icons/cart.svg';
import Heart from '@assets/icons/heart.svg';
import Box from '@assets/icons/box.svg';
import ArrowDown from '@assets/icons/arrowDown.svg';
import avatar from '@assets/images/avatar.png';
import Input from '@components/Input';
import ButtonMenu from './components/ButtonMenu';
import {
    ButtonCatalog,
    ButtonsMenu,
    CatalogContainer,
    CatalogTitle,
    HeaderContainer,
    HeaderContent,
    InputContainer,
    ProfileAvatar,
    ProfileName,
    ProfileWrapper,
} from './styles';

const menuButtons = [
    {
        label: 'Избранное',
        icon: <Heart />,
    },
    {
        label: 'Заказы',
        icon: <Box />,
    },
    {
        label: 'Корзина',
        icon: <Cart />,
    },
];

const Header = () => (
    <HeaderContainer>
        <HeaderContent>
            <Logo />
            <CatalogContainer>
                <ButtonCatalog>
                    <Menu />
                    <CatalogTitle>Каталог</CatalogTitle>
                </ButtonCatalog>
                <InputContainer>
                    <Input placeholder="Найти товар" icon={<SearchIcon />} />
                </InputContainer>
            </CatalogContainer>
            <ButtonsMenu>
                {menuButtons.map((button) => (
                    <ButtonMenu key={button.label} label={button.label} icon={button.icon} />
                ))}
            </ButtonsMenu>
            <ProfileWrapper>
                <ProfileAvatar src={avatar} alt="avatar" />
                <ProfileName>Алексей</ProfileName>
                <ArrowDown />
            </ProfileWrapper>
        </HeaderContent>
    </HeaderContainer>
);

export default Header;
