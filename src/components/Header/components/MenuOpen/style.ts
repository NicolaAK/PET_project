import styled from 'styled-components';

type THeaderContainer = {
    isDark: boolean;
};
export const MenuContainerOpen = styled.div`
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
    z-index: 2;
`;
export const AboutsCompany = styled.div<THeaderContainer>`
  ${({ theme }) => theme.mixins.flexCenter};
  column-gap: 25px;
  z-index: 2;
  color: ${({ theme, isDark }) => (isDark ? theme.colors.blackPrimary() : theme.colors.white())}};
`;

export const MenuLogo = styled.button`
    z-index: 2;
`;
export const Settings = styled.div<THeaderContainer>`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 24px;
    z-index: 2;
    color: ${({ theme, isDark }) => (isDark ? theme.colors.blackPrimary() : theme.colors.white())}};
`;

export const Language = styled.div`
    position: relative;
    z-index: 2;
`;
export const Money = styled.div`
    position: relative;
    z-index: 2;
`;

export const SocialsMedia = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 32px;
    z-index: 2;
`;
