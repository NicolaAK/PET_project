import React from 'react';
import { Bar, MenuTitle, MenuContainerClose, Text } from './style';

interface IHamburgerTitles {
    title: string;
    link: string;
}

interface IProps {
    $isDark: boolean;
    open: boolean;
    hamburgerTitles: IHamburgerTitles[];
}
const MenuClose = ({ $isDark, open, hamburgerTitles }: IProps) => (
    <MenuContainerClose open={open}>
        <MenuTitle>
            {hamburgerTitles.map((hamburger) => (
                <Bar key={hamburger.title}>
                    <Text to={hamburger.link} $isDark={$isDark}>
                        {hamburger.title}
                    </Text>
                </Bar>
            ))}
        </MenuTitle>
    </MenuContainerClose>
);
export default MenuClose;
