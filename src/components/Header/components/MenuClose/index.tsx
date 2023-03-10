import React from 'react';
import { generateRoute } from '@utils/helpers';
import { Bar, MenuTitle, MenuContainerClose, Text } from './style';
import { ROUTES } from '../../../../routes/constants';

const hamburgerTitles = [
    { title: 'ОПЛАТА И ДОСТАВКА', link: generateRoute(ROUTES.PAYMENT) },
    { title: 'УСЛОВИЯ ВОЗВРАТА', link: generateRoute(ROUTES.REFUND) },
    { title: 'КОНТАКТЫ', link: generateRoute(ROUTES.ABOUTS) },
];

interface IProps {
    $isDark: boolean;
    open: boolean;
}
const MenuClose = ({ $isDark, open }: IProps) => (
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
