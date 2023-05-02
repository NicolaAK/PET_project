import styled from 'styled-components';

export const FilterContainer = styled.div`
    grid-area: Filter;
    ${({ theme }) => theme.mixins.flexCenter}
    column-gap: 34px;
`;
export const ButtonContainer = styled.div`
    width: 150px;
    scale: 0.8;
`;
