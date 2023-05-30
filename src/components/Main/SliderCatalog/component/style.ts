import styled from 'styled-components';

export const ArrowContainerRight = styled.div`
    position: relative;
    bottom: 54%;
    left: 94%;
    z-index: 1;
    width: 40px;
    height: 40px;
    @media ${({ theme }) => theme.breakpoints.md} {
        bottom: 75%;
        left: 90%;
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        bottom: 200px;
        left: 82%;
        width: 30px;
        height: 30px;
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        left: 86%;
    }
`;
export const ArrowContainerLeft = styled.div`
    position: relative;
    top: 55%;
    left: 20px;
    z-index: 1;
    width: 40px;
    height: 40px;
    @media ${({ theme }) => theme.breakpoints.sm} {
        top: 141px;
        left: 1%;
        width: 30px;
        height: 30px;
    }
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
export const ArrowIcon = styled.div`
    @media ${({ theme }) => theme.breakpoints.sm} {
        transform: scale(0.7);
    }
`;
