import styled from 'styled-components';
import Typography from '@components/Typography';

type THeaderContainer = {
    isDark?: boolean;
};

export const Bar = styled(Typography).attrs({ variant: 'dHeader18' })<THeaderContainer>`
    color: ${({ theme, isDark }) => (isDark ? theme.colors.blackPrimary() : theme.colors.white())};
    z-index: 2;
    &:hover {
        color: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    }
`;
export const MenuTitle = styled.div`
    ${({ theme }) => theme.mixins.flexStart};
    column-gap: 25px;
    z-index: 2;
`;
