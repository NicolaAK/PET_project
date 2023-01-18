import React, { FC, ReactNode } from 'react';
import { ButtonContainer, ButtonText, ButtonTextIcon, Icon } from '@components/Button/styled';
import FavouritesButton from '@assets/icons/favouritesButton.svg';

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    color?: 'primary' | 'favourites';
    width?: number;
    icon?: ReactNode;
};
export const Button: FC<ButtonProps> = ({
    onClick,
    color = 'primary',
    children,
    width,
    icon = <FavouritesButton />,
}) => (
    <ButtonContainer onClick={onClick} color={color} width={width}>
        {color === 'favourites' ? (
            <ButtonTextIcon>
                <Icon>{icon}</Icon>
                {children}
            </ButtonTextIcon>
        ) : (
            <ButtonText>{children}</ButtonText>
        )}
    </ButtonContainer>
);
