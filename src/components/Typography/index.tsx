import React, { FC, ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import typography, { TTypographyItem } from '../../theme/typography';

export type TTypographyVariant = keyof typeof typography;

interface ITypographyProps {
    center?: boolean;
    variant: TTypographyVariant;
    underline?: boolean;
    className?: string;
    color?: string;
    children: ReactNode;
}

const Typography: FC<ITypographyProps> = ({ center, className, variant, underline, children, color }) => (
    <TypographyText variant={variant} center={center} className={className} underline={underline} color={color}>
        {children}
    </TypographyText>
);

export default Typography;

const mapTypeToTheme = (theme: DefaultTheme, variant: TTypographyVariant): TTypographyItem => theme.typography[variant];

const TypographyText = styled.p<ITypographyProps>`
    line-height: ${({ theme, variant }) => mapTypeToTheme(theme, variant).lineHeight}px;
    font-size: ${({ theme, variant }) => mapTypeToTheme(theme, variant).fontSize}px;
    font-weight: ${({ theme, variant }) => mapTypeToTheme(theme, variant).fontWeight || 400};
    text-transform: ${({ theme, variant }) => mapTypeToTheme(theme, variant).textTransform || 'none'};
    text-align: ${({ center }) => (center ? 'center' : 'left')};
    text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
    color: ${({ color }) => color};
`;
