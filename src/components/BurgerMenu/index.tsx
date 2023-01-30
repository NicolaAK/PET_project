import React from 'react';
import { StyledBurger } from './style';
interface IProps {
    open: boolean;
    setOpen: (b: boolean) => void;
}
const Burger = ({ open, setOpen }: IProps) => (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
    </StyledBurger>
);

export default Burger;
