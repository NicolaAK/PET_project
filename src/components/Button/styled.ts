import styled, { css } from 'styled-components';
import Typography from '@components/Typography';
import { ButtonProps } from '.';

const COLOR = {
    primary: css`
        background: ${({ theme }) => theme.colors.mainPrimary()};
        color: ${({ theme }) => theme.colors.white()};
    `,
    favourites: css`
        background: ${({ theme }) => theme.colors.white()};
        color: ${({ theme }) => theme.colors.blackPrimary()};
        border: 0.5px solid ${({ theme }) => theme.colors.blackPrimary()};
    `,
};
const ACTIVE = {
    primary: css`
        background: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    `,
    favourites: css``,
};
export const ButtonContainer = styled.button<ButtonProps>`
    ${({ theme }) => theme.mixins.flexCenterCenter}
    transition: ${({ theme }) => theme.decorations.transition};
    cursor: pointer;
    height: 50px;
    width: ${(props) => props.width}px;
    ${(props) => props.color && COLOR[props.color]}
    column-gap: 9px;
    &:hover {
        box-shadow: ${({ theme }) => theme.decorations.boxShadow.base};
    }
    &:active {
        box-shadow: ${({ theme }) => theme.decorations.boxShadow.inset};
        ${(props) => props.color && ACTIVE[props.color]}
    }
`;
export const ButtonText = styled(Typography).attrs({ variant: 'dText16lh19' })``;
export const ButtonTextIcon = styled(Typography).attrs({ variant: 'dText16lh19' })`
    ${({ theme }) => theme.mixins.flexCenter};
    align-items: center;
`;
export const Icon = styled.div`
    padding: 3px 11px 0 0;
`;
