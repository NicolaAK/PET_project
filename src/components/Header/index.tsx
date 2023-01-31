import React, { FC, useState } from 'react';
import { HeaderContent, HeaderContainer, MenuContainer, BurgerContainer } from '@components/Header/styled';
import Burger from '@components/BurgerMenu';
import MenuClose from '@components/Header/components/MenuClose';
import MenuOpen from '@components/Header/components/MenuOpen';

interface IHeader {
    isDark: boolean;
}

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

const Header: FC<IHeader> = ({ isDark }) => {
    const [money, setMoney] = useState(moneyArr[0].value);
    const [language, setLanguage] = useState(languageArr[0].value);
    const [openHeader, setOpenHeader] = useState(false);
    const handleBurgerOpen = () => setOpenHeader(!openHeader);
    return (
        <HeaderContainer isDark={isDark}>
            <HeaderContent isDark={isDark}>
                <BurgerContainer>
                    <Burger open={openHeader} onClick={handleBurgerOpen} />
                </BurgerContainer>
                <MenuContainer>
                    <MenuClose open={openHeader} isDark={isDark} />
                    <MenuOpen
                        open={openHeader}
                        isDark={isDark}
                        money={money}
                        setMoney={setMoney}
                        moneyArr={moneyArr}
                        languageArr={languageArr}
                        language={language}
                        setLanguage={setLanguage}
                    />
                </MenuContainer>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;
