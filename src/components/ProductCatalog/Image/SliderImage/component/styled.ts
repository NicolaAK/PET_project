import styled from 'styled-components';

export const ArrowContainerRight = styled.div`
    position: absolute;
    z-index: 1;
    top: 446px;
    right: 0;
    width: 40px;
    height: 40px;
`;
export const ArrowContainerLeft = styled.div`
    position: absolute;
    z-index: 1;
    top: 446px;
    left: 0;
    width: 40px;
    height: 40px;
`;
export const ArrowBox = styled.button`
    transition: ${({ theme }) => theme.decorations.transition};
    background: ${({ theme }) => theme.colors.mainPrimary()};
    ${({ theme }) => theme.mixins.flexCenterCenter};
    width: 100%;
    height: 100%;
    &:hover {
        transform: scale(1.1);
    }
`;
