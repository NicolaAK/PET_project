import styled from 'styled-components';

export const ArrowContainerRight = styled.div`
    position: relative;
    bottom: 54%;
    left: 94%;
    z-index: 1;
    width: 40px;
    height: 40px;
    @media ${({ theme }) => theme.breakpoints.xs} {
        bottom: 200px;
        left: 85%;
        width: 30px;
        height: 30px;
    }
`;
export const ArrowContainerLeft = styled.div`
    position: relative;
    top: 55%;
    left: 20px;
    z-index: 1;
    width: 40px;
    height: 40px;
    @media ${({ theme }) => theme.breakpoints.xs} {
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
    @media ${({ theme }) => theme.breakpoints.xs} {
        transform: scale(0.7);
    }
`;
