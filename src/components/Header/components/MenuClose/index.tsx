import React from 'react';
import { Bar, BarContainer, MenuTitle } from './style';

const hamburgerTitles = [{ title: 'ОПЛАТА И ДОСТАВКА' }, { title: 'УСЛОВИЯ ВОЗВРАТА' }, { title: 'КОНТАКТЫ' }];

interface IProps {
    isDark: boolean;
}
const MenuClose = ({ isDark }: IProps) => (
    <MenuTitle>
        {hamburgerTitles.map((hamburger) => (
            <BarContainer>
                <Bar isDark={isDark} key={hamburger.title}>
                    {hamburger.title}
                </Bar>
            </BarContainer>
        ))}
    </MenuTitle>
);
export default MenuClose;
