import styled from 'styled-components';

export const CatalogContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
`;
export const CatalogContent = styled.div``;
export const Navigation = styled.div``;
export const Container = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr 1fr;
    grid-template-rows: 19px 1fr 1fr;
    gap: 30px 30px;
    grid-template-areas:
        'Menu Filter Filter'
        'Menu Products Products'
        'Menu Products Products';
`;
export const Menu = styled.div`
    grid-area: Menu;
    background: red;
`;
export const Filter = styled.div`
    grid-area: Filter;
    background: blue;
`;
export const Products = styled.div`
    grid-area: Products;
    background: rosybrown;
`;
