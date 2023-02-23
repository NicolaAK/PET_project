import React, { FC, ReactNode } from 'react';
import { ButtonContainer, ButtonText, ButtonTextIcon, Icon } from '@components/ReusedComponents/Button/styled';
import FavouritesButton from '@assets/icons/favouritesButton.svg';
import Spinner from '@components/ReusedComponents/Button/Loader';
import FavouritesButtonActive from '@assets/icons/favouritesButtonActive.svg';

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    color?: 'primary' | 'favourites';
    width?: number;
    icon?: ReactNode;
    isLoading?: boolean;
    value?: boolean;
    onChange?: () => void;
};
export const Button: FC<ButtonProps> = ({
    onClick,
    color = 'primary',
    children,
    width,
    icon = <FavouritesButton />,
    isLoading,
    value,
    onChange,
}) => {
    const renderContent = () => {
        if (isLoading) {
            return <Spinner />;
        }

        if (color === 'favourites') {
            return (
                <ButtonTextIcon onClick={onChange}>
                    <Icon onClick={onChange}>{value ? <FavouritesButtonActive /> : icon}</Icon>
                    {children}
                </ButtonTextIcon>
            );
        }

        return <ButtonText>{children}</ButtonText>;
    };

    return (
        <ButtonContainer onClick={onClick} color={color} width={width}>
            {renderContent()}
        </ButtonContainer>
    );
};
