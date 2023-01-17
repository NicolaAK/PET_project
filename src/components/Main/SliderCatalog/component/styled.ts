import styled from 'styled-components';

export const ArrowContainerRight = styled.div`
    position: relative;
    bottom: 245px;
    left: 1065px;
    z-index: 1;
    width: 40px;
    height: 40px;
`;
export const ArrowContainerLeft = styled.div`
    position: relative;
    top: 248px;
    left: 20px;
    z-index: 1;
    width: 40px;
    height: 40px;
`;
export const ArrowBox = styled.button`
    background: ${({ theme }) => theme.colors.mainPrimary()};
    ${({ theme }) => theme.mixins.flexCenterCenter};
    width: 100%;
    height: 100%;
`;
