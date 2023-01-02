import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Menu } from '../../assets/icons/menu.svg';
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
import Input from '../Input/Input';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import ButtonMenu from './components/ButtonMenu';
import { ReactComponent as Cart } from '../../assets/icons/cart.svg';
import { ReactComponent as Heart } from '../../assets/icons/heart.svg';
import { ReactComponent as Box } from '../../assets/icons/box.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrowDown.svg';
import avatar from '../../assets/images/avatar.png';

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
