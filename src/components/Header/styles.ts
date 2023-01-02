import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.mainSurface()};
    box-shadow: ${({ theme }) => theme.decorations.boxShadow.default.s};
    padding: 10px 20px;
`;

export const HeaderContent = styled.header`
    ${({ theme }) => theme.mixins.mainGrid};
`;

export const NewTest = styled.p`
    color: ${({ theme }) => theme.colors.paletteError()};
`;
