import styled from 'styled-components';

type THeaderContainer = {
    isDark: boolean;
};
export const HeaderContainer = styled.div<THeaderContainer>`
    background-color: ${({ theme, isDark }) => (isDark ? theme.colors.white() : 'inherit')};
    svg path {
        fill: ${({ theme, isDark }) => (isDark ? theme.colors.mainPrimary() : theme.colors.white())};
    }
    height: 85px;
    z-index: 2;
`;
export const HeaderContent = styled.div``;

export const MenuContainer = styled.div`
    z-index: 2;
`;
