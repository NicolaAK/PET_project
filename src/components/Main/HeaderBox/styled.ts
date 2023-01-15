import styled from 'styled-components';

export const BoxContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    position: relative;
    bottom: 85px;
    z-index: 1;
`;
export const BoxTitle = styled.div``;
export const NewCollection = styled.div``;
export const WatchProducts = styled.div``;
export const BoxFotos = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    z-index: 1;
`;
