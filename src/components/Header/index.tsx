import React, { FC, useState } from 'react';
import { HeaderContent, HeaderContainer, MenuContainer, BurgerContainer } from '@components/Header/style';
import Burger from '@components/Header/components/BurgerMenu';
import MenuClose from '@components/Header/components/MenuClose';
import MenuOpen from '@components/Header/components/MenuOpen';

interface IHeader {
    $isDark: boolean;
    isOpenBurger: boolean;
    setIsOpenBurger: (value: boolean) => void;
}

const languageArr = [
    { value: 'RU', label: 'RU' },
    { value: 'EN', label: 'EN' },
    { value: 'UA', label: 'UA' },
];

const Header: FC<IHeader> = ({ $isDark, setIsOpenBurger, isOpenBurger }) => {
    const [language, setLanguage] = useState(languageArr[0].value);
    const handleBurgerOpen = () => setIsOpenBurger(!isOpenBurger);
    return (
        <HeaderContainer $isDark={$isDark}>
            <HeaderContent $isDark={$isDark}>
                <BurgerContainer>
                    <Burger $isDark={$isDark} open={isOpenBurger} onClick={handleBurgerOpen} />
                </BurgerContainer>
                <MenuContainer>
                    <MenuClose open={isOpenBurger} $isDark={$isDark} />
                    <MenuOpen
                        open={isOpenBurger}
                        $isDark={$isDark}
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
