import styled from 'styled-components';

type THeaderContainer = {
    $isDark: boolean;
};

export const HeaderContainer = styled.div<THeaderContainer>`
    ${({ theme }) => theme.mixins.mainGrid};
    background-color: ${({ theme, $isDark }) => ($isDark ? theme.colors.white() : 'inherit')};
    @media ${({ theme }) => theme.breakpoints.xs} {
        ${({ theme }) => theme.mixins.mainGridMobile};
    }
`;
export const HeaderContent = styled.div<THeaderContainer>`
    svg path {
        fill: ${({ theme, $isDark }) => ($isDark ? theme.colors.mainPrimary() : theme.colors.white())};
    }
    height: 85px;
    z-index: 2;
    display: grid;
    grid-template-columns: 32px 1fr;
    align-items: center;
`;
export const BurgerContainer = styled.div`
    z-index: 2;
`;
export const MenuContainer = styled.div`
    padding-left: 100px;
    @media ${({ theme }) => theme.breakpoints.sm} {
        padding-left: 20px;
    }
`;
