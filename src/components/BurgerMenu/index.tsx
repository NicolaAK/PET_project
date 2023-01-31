import React from 'react';
import { StyledBurger, Line } from './style';
interface IProps {
    open: boolean;
    onClick: () => void;
}
const Burger = ({ open, onClick }: IProps) => (
    <StyledBurger open={open} onClick={onClick}>
        <Line open={open} />
        <Line open={open} />
        <Line open={open} />
    </StyledBurger>
);

export default Burger;
