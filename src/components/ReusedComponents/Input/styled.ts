import styled, { DefaultTheme } from 'styled-components';
import Typography from '@components/Typography';

const getBorder = (isError: boolean, theme: DefaultTheme, isHover?: boolean) => {
    if (isError) {
        return theme.colors.error();
    }
    if (isHover) {
        theme.colors.mainPrimary();
    }

    return theme.colors.blackPrimary();
};

export const InputContainer = styled.div``;

interface IInputContent {
    isError: boolean;
}

export const InputContent = styled.input<IInputContent>`
    transition: ${({ theme }) => theme.decorations.transition};
    border: 0.5px solid ${({ theme, isError }) => getBorder(isError, theme)};
    width: ${(props) => props.width}px;
    height: 50px;
    text-align: center;
    outline: none;
    &:focus,
    &:hover {
        box-shadow: ${({ theme }) => theme.decorations.boxShadow.base};
        border: 0.5px solid ${({ theme, isError }) => getBorder(isError, theme, true)};
    }
`;

export const ErrorText = styled(Typography).attrs({ variant: 'dHeader16' })`
    color: ${({ theme }) => theme.colors.error()};
    margin-top: 2px;
`;
