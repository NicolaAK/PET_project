import styled from 'styled-components';

export const FilterContainer = styled.div`
    grid-area: Filter;
    ${({ theme }) => theme.mixins.flexCenter}
    column-gap: 34px;
    @media ${({ theme }) => theme.breakpoints.md} {
        column-gap: 20px;
        ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
        height: 50px;
    }
`;
export const ButtonContainer = styled.div<{
    isActiveButtonReset: boolean;
}>`
    visibility: ${({ isActiveButtonReset }) => (isActiveButtonReset ? 'visible' : 'hidden')};
    width: 150px;
    scale: 0.8;
    @media ${({ theme }) => theme.breakpoints.md} {
        width: 120px;
        scale: 1;
    }
`;
