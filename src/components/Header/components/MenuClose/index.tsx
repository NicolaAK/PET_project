import React from 'react';
import { Bar, MenuTitle } from './style';

const hamburgerTitles = [{ title: 'ОПЛАТА И ДОСТАВКА' }, { title: 'УСЛОВИЯ ВОЗВРАТА' }, { title: 'КОНТАКТЫ' }];

interface IProps {
    isDark: boolean;
}
const MenuClose = ({ isDark }: IProps) => (
    <MenuTitle>
        {hamburgerTitles.map((hamburger) => (
            <Bar isDark={isDark} key={hamburger.title}>
                {hamburger.title}
            </Bar>
        ))}
    </MenuTitle>
);
export default MenuClose;
