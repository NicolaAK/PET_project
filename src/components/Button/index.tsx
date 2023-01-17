import React, { FC } from 'react';
import { ButtonContainer, ButtonText } from '@components/Button/styled';

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    color?: 'primary' | 'favourites';
};
export const Button: FC<ButtonProps> = ({ onClick, color = 'primary', children }) => (
    <ButtonContainer onClick={onClick} color={color}>
        <ButtonText>{children}</ButtonText>
    </ButtonContainer>
);
