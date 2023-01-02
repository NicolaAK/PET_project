import styled from 'styled-components';
import Typography from '../Typography';

export const HeaderContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.mainSurface()};
    box-shadow: ${({ theme }) => theme.decorations.boxShadow.default.s};
    padding: 10px 0;
`;

export const HeaderContent = styled.header`
    ${({ theme }) => theme.mixins.mainGrid};
    ${({ theme }) => theme.mixins.flexCenter};
    grid-column-gap: 40px;
`;

export const CatalogContainer = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    grid-column-gap: 16px;
`;

export const ButtonCatalog = styled.button`
    ${({ theme }) => theme.mixins.flexCenter};
    grid-column-gap: 8px;
    color: ${({ theme }) => theme.colors.mainSurface()};
    background-color: ${({ theme }) => theme.colors.mainSecondary()};
    border-radius: ${({ theme }) => theme.decorations.borderRadius.base}px;

    padding: 8px;
    svg {
        stroke: ${({ theme }) => theme.colors.mainSurface()};
    }
`;

export const CatalogTitle = styled(Typography).attrs({ variant: 'dTextS' })`
    width: 92px;
    text-align: center;
`;

export const ButtonsMenu = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    grid-column-gap: 24px;
`;

export const ProfileWrapper = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    grid-column-gap: 10px;
`;

export const ProfileAvatar = styled.img`
    border-radius: 50%;
`;

export const ProfileName = styled(Typography).attrs({ variant: 'dTextS' })`
    color: ${({ theme }) => theme.colors.mainOnSurface()};
`;

export const InputContainer = styled.div`
    width: 375px;
`;
