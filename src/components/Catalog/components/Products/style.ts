import styled from 'styled-components';

export const ProductsContainer = styled.div`
    grid-area: Products;
    ${({ theme }) => theme.mixins.flexStart};
    flex-wrap: wrap;
    gap: 15px;
`;
