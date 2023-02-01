import React from 'react';
import { StyledBurger, Line } from './style';
interface IProps {
    isDark: boolean;
    open: boolean;
    onClick: () => void;
}
const Burger = ({ open, onClick, isDark }: IProps) => (
    <StyledBurger open={open} onClick={onClick}>
        <Line open={open} isDark={isDark} />
        <Line open={open} isDark={isDark} />
        <Line open={open} isDark={isDark} />
    </StyledBurger>
);

export default Burger;
