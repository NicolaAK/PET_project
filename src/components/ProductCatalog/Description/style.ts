import styled from 'styled-components';

interface IAnimation {
    isOpenDetails?: boolean;
    isOpenStructure?: boolean;
}
interface ILine {
    isOpenDetails?: boolean;
    isOpenStructure?: boolean;
}
export const Description = styled.div`
    grid-area: card;
`;
export const Name = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText20')};
    margin-bottom: 5px;
`;
export const Price = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dTextBold20')};
    margin-bottom: 20px;
`;

export const Container = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
`;

export const Details = styled.div`
    padding-top: 20px;
    width: 100%;
    flex-direction: column;
`;
export const Item = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh20')};
    margin-bottom: 20px;
`;
export const DescriptionContainer = styled.div`
    cursor: pointer;
`;
export const Title = styled.div`
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
    padding-bottom: 10px;
`;
export const Text = styled.div`
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
    ${({ theme }) => theme.helpers.getTypography('dText14')};
    padding-bottom: 10px;
    line-height: 10px;
`;
export const ArrowContainer = styled.div<IAnimation>`
    transition: all 0.3s linear;
    rotate: ${({ isOpenDetails, isOpenStructure }) => (isOpenDetails || isOpenStructure ? '-90deg' : '90deg')};
`;

export const Line = styled.div`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.blackPrimary(0.7)}; ;
`;

export const OpenListDescription = styled.div<ILine>`
    height: 100%;
    max-height: ${({ isOpenDetails }) => (isOpenDetails ? '500px' : '0px')};
    opacity: ${({ isOpenDetails }) => (isOpenDetails ? '1' : '0')};
    overflow: hidden;
    transition: 0.8s;
    padding-top: 3px;
`;

export const DescriptionText = styled.div`
    margin: 20px 0;
    ${({ theme }) => theme.helpers.getTypography('dText14')};
`;
export const Article = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText12')};
    margin-bottom: 20px;
`;
