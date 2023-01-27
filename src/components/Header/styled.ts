import styled from 'styled-components';
import Typography from '@components/Typography';

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

export const Language = styled.div`
    position: relative;
    z-index: 2;
`;
export const Money = styled.div`
    position: relative;
    z-index: 2;
`;
export const MenuClose = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
    padding: 25px 0 20px 0;
    z-index: 2;
`;
export const MenuButton = styled.button``;
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
export const MenuLogo = styled.button`
    z-index: 2;
`;
export const CrossContainer = styled.button`
    padding-right: 70px;
`;
