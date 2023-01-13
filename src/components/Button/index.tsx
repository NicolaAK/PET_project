import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { TTypography } from '@theme/typography';

export enum buttonSize {
    L = 'L',
    S = 'S',
    XS = 'XS',
}

interface IButtonProps {
    icon?: ReactNode;
    size?: buttonSize;
}

const generalStyles: Record<
    buttonSize,
    {
        font: keyof TTypography;
        padding: {
            default: string;
            icon: string;
        };
        minWidth: string;
    }
> = {
    [buttonSize.L]: {
        font: 'dTextL',
        minWidth: '140px',
        padding: {
            default: '18px 16px',
            icon: '14px 16px',
        },
    },
    [buttonSize.S]: {
        font: 'dTextS',
        minWidth: '100px',
        padding: {
            default: '8px 8px',
            icon: '8px 8px',
        },
    },
    [buttonSize.XS]: {
        minWidth: '80px',
        font: 'dTextXs',
        padding: {
            default: '4px 8px',
            icon: '4px 8px',
        },
    },
};

const Button: FC<IButtonProps> = ({ children, icon, size = buttonSize.L }) => {
    console.log('sdfsdf');
    return (
        <ButtonContainer size={size} isIcon={!!icon}>
            {icon}
            <ButtonText>{children}</ButtonText>
        </ButtonContainer>
    );
};

const ButtonText = styled.p``;

type TButtonContainerProps = {
    size: buttonSize;
    isIcon: boolean;
};

const ButtonContainer = styled.button<TButtonContainerProps>`
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};

    background-color: red;
    min-width: ${({ size }) => generalStyles[size].minWidth};
    padding: ${({ size, isIcon }) => (isIcon ? generalStyles[size].padding.icon : generalStyles[size].padding.default)};
    border-radius: ${({ theme }) => theme.decorations.borderRadius.base}px;
    ${({ theme, size }) => theme.helpers.getTypography(generalStyles[size].font)}
`;

export default Button;
