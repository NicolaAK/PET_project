import styled from 'styled-components';

export const ProductsContainer = styled.div`
    grid-area: Products;
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
    flex-wrap: wrap;
    gap: 10px;
`;
