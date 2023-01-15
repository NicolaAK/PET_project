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
export const HeaderContent = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
    padding: 25px 0 20px 0;
    z-index: 2;
`;
export const AboutsCompany = styled.div<THeaderContainer>`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 25px;
    z-index: 2;
    color: ${({ theme, isDark }) => (isDark ? theme.colors.blackPrimary() : theme.colors.white())}};

`;

export const SocialsMedia = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 32px;
    z-index: 2;
`;
export const LogoContainer = styled.button`
    z-index: 2;
`;
export const Settings = styled.div<THeaderContainer>`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 24px;
    z-index: 2;
    color: ${({ theme, isDark }) => (isDark ? theme.colors.blackPrimary() : theme.colors.white())}};
`;
export const MenuContainer = styled.div`
    z-index: 2;
`;
