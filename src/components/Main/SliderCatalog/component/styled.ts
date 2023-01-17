import styled from 'styled-components';

export const ArrowContainerRight = styled.div`
    position: relative;
    bottom: 280px;
    left: 1080px;
    z-index: 1;
`;
export const ArrowContainerLeft = styled.div`
    position: relative;
    top: 248px;
    left: 20px;
    z-index: 1;
`;
export const ArrowBox = styled.button`
    background: ${({ theme }) => theme.colors.mainPrimary()};
    ${({ theme }) => theme.mixins.flexCenterCenter};
    width: 40px;
    height: 40px;
`;
