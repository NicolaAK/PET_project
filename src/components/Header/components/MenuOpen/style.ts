import styled from 'styled-components';
import { Link } from 'react-router-dom';

type TAnimation = {
    open: boolean;
};

type THeaderContainer = {
    $isDark: boolean;
};
export const MenuContainerOpen = styled.div<TAnimation>`
    position: relative;
    transition: all 0.4s ease-in-out;
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(2%)' : 'translateX(0)')};
    visibility: ${({ open }) => (open ? 'hidden' : 'visible')};
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
    z-index: 2;
`;
export const AboutsCompany = styled.div<THeaderContainer>`
  ${({ theme }) => theme.mixins.flexCenter};
  column-gap: 25px;
  z-index: 2;
  color: ${({ theme, $isDark }) => ($isDark ? theme.colors.blackPrimary() : theme.colors.white())}};
`;

export const MenuLogo = styled.button`
    z-index: 2;
    transition: ${({ theme }) => theme.decorations.transition};
    &:hover {
        filter: invert(0.42) sepia(1);
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        margin: 0 auto;
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        scale: 75%;
        margin: 0 auto;
    }
`;
export const Settings = styled.div<THeaderContainer>`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 24px;
    z-index: 2;
    color: ${({ theme, $isDark }) => ($isDark ? theme.colors.blackPrimary() : theme.colors.white())}};
`;
export const Language = styled.div`
    position: relative;
    z-index: 2;
`;
export const SocialsMedia = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 32px;
    z-index: 2;
`;
export const Search = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    transition: ${({ theme }) => theme.decorations.transition};
    &:hover {
        scale: 110%;
        filter: invert(0.42) sepia(1);
    }
    z-index: 2;
    cursor: pointer;
`;
export const ProfileLink = styled(Link)`
    ${({ theme }) => theme.mixins.flexCenter};
    z-index: 2;
    width: 30px;
    height: 30px;
    transition: ${({ theme }) => theme.decorations.transition};
    &:hover {
        scale: 110%;
        filter: invert(0.42) sepia(1);
    }
`;
export const ProfileContainer = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    transition: ${({ theme }) => theme.decorations.transition};
    &:hover {
        scale: 110%;
        filter: invert(0.42) sepia(1);
    }
    cursor: pointer;
`;
