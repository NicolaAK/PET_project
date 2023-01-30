import styled from 'styled-components';
import Typography from '@components/Typography';

type THeaderContainer = {
    isDark: boolean;
};
export const Bar = styled(Typography).attrs({ variant: 'dHeader18' })<THeaderContainer>`
    color: ${({ theme, isDark }) => (isDark ? theme.colors.blackPrimary() : theme.colors.white())};
    z-index: 2;
    &:hover {
        color: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    }
`;
export const BarContainer = styled.button`
    color: ${({ theme }) => theme.colors.white()};
`;
export const MenuTitle = styled.div`
    position: absolute;
    transform: translate(360px, 30px);
    ${({ theme }) => theme.mixins.flexCenterCenter};
    column-gap: 25px;
    z-index: 2;
`;
