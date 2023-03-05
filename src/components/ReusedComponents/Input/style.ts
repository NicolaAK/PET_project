import styled, { DefaultTheme } from 'styled-components';
import Typography from '@components/Typography';

const getBorder = (isError: boolean, theme: DefaultTheme, isHover?: boolean) => {
    if (isError) {
        return theme.colors.error(0.5);
    }
    if (isHover) {
        theme.colors.mainPrimary(0.5);
    }

    return theme.colors.blackPrimary(0.5);
};

export const InputContainer = styled.div``;

interface IInputContent {
    isError: boolean;
    textAlign?: string;
}

export const InputContent = styled.input<IInputContent>`
    transition: ${({ theme }) => theme.decorations.transition};
    border: 1px solid ${({ theme, isError }) => getBorder(isError, theme)};
    width: 100%;
    height: 50px;
    text-align: ${({ textAlign }) => textAlign};
    outline: none;
    padding-left: ${({ textAlign }) => (textAlign ? 0 : 20)}px;
    &:focus,
    &:hover {
        box-shadow: ${({ theme }) => theme.decorations.boxShadow.base};
        border: 0.5px solid ${({ theme, isError }) => getBorder(isError, theme, true)};
    }
`;

export const ErrorText = styled(Typography).attrs({ variant: 'dHeader16' })`
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.error()};
`;
