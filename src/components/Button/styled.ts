import styled, { css } from 'styled-components';
import Typography from '@components/Typography';
import { ButtonProps } from '.';

const COLOR = {
    primary: css`
        background: ${({ theme }) => theme.colors.mainPrimary()};
    `,
    favourites: css`
        background: ${({ theme }) => theme.colors.buttonWhite()};
    `,
};
export const ButtonContainer = styled.button<ButtonProps>`
    padding: 10px 15px;
    cursor: pointer;
    border: none;

    ${(props) => props.color && COLOR[props.color]}
`;
export const ButtonText = styled(Typography).attrs({ variant: 'dText16lh19' })``;
