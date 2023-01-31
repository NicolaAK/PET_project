import React from 'react';
import { Bar, MenuTitle, MenuContainerClose, Text } from './style';

const hamburgerTitles = [{ title: 'ОПЛАТА И ДОСТАВКА' }, { title: 'УСЛОВИЯ ВОЗВРАТА' }, { title: 'КОНТАКТЫ' }];

interface IProps {
    isDark: boolean;
    open: boolean;
}
const MenuClose = ({ isDark, open }: IProps) => (
    <MenuContainerClose open={open}>
        <MenuTitle>
            {hamburgerTitles.map((hamburger) => (
                <Bar>
                    <Text isDark={isDark} key={hamburger.title}>
                        {hamburger.title}
                    </Text>
                </Bar>
            ))}
        </MenuTitle>
    </MenuContainerClose>
);
export default MenuClose;
