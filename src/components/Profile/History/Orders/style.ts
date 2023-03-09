import styled from 'styled-components';
interface IAnimation {
    isOpenOrder?: boolean;
}
export const Container = styled.div`
    margin-top: 20px;
`;
export const Content = styled.div`
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
    height: 58px;
`;
export const ContainerStatus = styled.div``;
export const Title = styled.p`
    width: 200px;
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
`;
export const Text = styled.p`
    margin-top: 5px;
    ${({ theme }) => theme.helpers.getTypography('dTextBold16')};
`;
export const ContainerSum = styled.div``;
export const ArrowContainer = styled.div<IAnimation>`
    transition: all 0.3s linear;
    rotate: ${({ isOpenOrder }) => (isOpenOrder ? '-90deg' : '90deg')};
`;
export const ContainerOrderProducts = styled.div<IAnimation>`
    height: 100%;
    max-height: ${({ isOpenOrder }) => (isOpenOrder ? '1000px' : '0px')};
    opacity: ${({ isOpenOrder }) => (isOpenOrder ? '1' : '0')};
    overflow: hidden;
    transition: 0.8s;
    margin-bottom: 20px;
`;
