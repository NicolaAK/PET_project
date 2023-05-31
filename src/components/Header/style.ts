import styled from 'styled-components';

type THeaderContainer = {
    $isDark: boolean;
};

interface IOpen {
    open: boolean;
}
export const Menu = styled.div``;
export const ContainerMobile = styled.div<IOpen>`
    transition: all 0.7s ease;
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(-100%)' : 'translateX(0)')};
    visibility: ${({ open }) => (open ? 'hidden' : 'visible')};
    z-index: 5;
`;
export const HeaderContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    @media ${({ theme }) => theme.breakpoints.xl} {
        padding: 0 20px;
    }
`;
export const HeaderContent = styled.div<THeaderContainer>`
    background-color: ${({ theme, $isDark }) => ($isDark ? theme.colors.white() : 'inherit')};
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

    @media ${({ theme }) => theme.breakpoints.ld} {
        padding-left: 50px;
    }
    @media ${({ theme }) => theme.breakpoints.md} {
        padding-left: 20px;
    }
`;
