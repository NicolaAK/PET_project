import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.mainSurface()};
    box-shadow: ${({ theme }) => theme.decorations.boxShadow.default.s};
`;

export const HeaderContent = styled.header`
    ${({ theme }) => theme.mixins.mainGrid};
`;
