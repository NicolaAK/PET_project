import styled from 'styled-components';

interface IAnimation {
    isOpenDetails?: boolean;
}
export const Container = styled.div`
    margin: 50px 20px;
`;
export const Content = styled.div``;
export const BoxInfo = styled.div`
    margin-bottom: 20px;
    cursor: pointer;
`;
export const VisiblePart = styled.div`
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
`;

export const Box = styled.div`
    visibility: hidden;
`;
export const Title = styled.div<IAnimation>`
    transition: all 0.3s linear;
    color: ${({ isOpenDetails, theme }) =>
        isOpenDetails ? theme.colors.buttonPrimaryClick() : theme.colors.blackPrimary()};
    ${({ theme }) => theme.helpers.getTypography('dFooter18')};
`;
export const Text = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dFooter16w')};
    margin-bottom: 5px;
`;
export const Icons = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    gap: 10px;
    margin-bottom: 5px;
`;
export const Icon = styled.div``;
export const ArrowContainer = styled.div<IAnimation>`
    margin-right: 10px;
    transition: all 0.3s linear;
    rotate: ${({ isOpenDetails }) => (isOpenDetails ? '-90deg' : '90deg')};
`;
export const OpenDescription = styled.div<IAnimation>`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    flex-direction: column;
    height: auto;
    max-height: ${({ isOpenDetails }) => (isOpenDetails ? '500px' : '0px')};
    opacity: ${({ isOpenDetails }) => (isOpenDetails ? '1' : '0')};
    overflow: hidden;
    transition: 0.8s;
    padding-top: 3px;
`;
export const Line = styled.div`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.blackPrimary(0.5)}; ;
`;
