import styled from 'styled-components';
interface IEllipse {
    color: string;
    radius?: number;
}
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
    margin-bottom: 20px;
`;
export const Price = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dTextBold16')};
    margin-bottom: 23px;
`;
export const Colors = styled.div`
    ${({ theme }) => theme.mixins.flexEnd};
    column-gap: 7.5px;
`;
export const EllipseColor = styled.input<IEllipse>`
    width: ${({ radius }) => radius}px;
    height: ${({ radius }) => radius}px;
    background-color: ${({ color }) => color};
    border-radius: 21px;
    border: 1px solid ${({ theme, color }) => (color === '#FFFFFF' ? theme.colors.blackPrimary(0.5) : 'transparent')};
    transition: ${({ theme }) => theme.decorations.transition};
    transform: scale(1);
    :checked {
        transform: scale(1.3);
    }
`;
export const GridContainer = styled.div`
    margin-top: 20px;
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 50px;
    gap: 20px 20px;
    grid-template-areas:
        'select select'
        'button1 button2';
`;
export const GridSelect = styled.div`
    z-index: 3;
    grid-area: select;
`;
export const GridButton1 = styled.div`
    grid-area: button1;
`;
export const GridButton2 = styled.div`
    grid-area: button2;
`;
export const Details = styled.div`
    padding-top: 20px;
    width: 100%;
    flex-direction: column;
`;
export const Item = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
    margin-bottom: 20px;
`;
export const DescriptionContainer = styled.div``;
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
export const StructureContainer = styled.div`
    margin-top: 20px;
`;
export const OpenListDescription = styled.div<ILine>`
    height: 100%;
    max-height: ${({ isOpenDetails }) => (isOpenDetails ? '190px' : '0px')};
    opacity: ${({ isOpenDetails }) => (isOpenDetails ? '1' : '0')};
    overflow: hidden;
    transition: 0.8s;
    padding-top: 3px;
`;
export const OpenListStructure = styled.div<ILine>`
    height: 100%;
    max-height: ${({ isOpenStructure }) => (isOpenStructure ? '190px' : '0px')};
    opacity: ${({ isOpenStructure }) => (isOpenStructure ? '1' : '0')};
    overflow: hidden;
    transition: 0.8s;
    padding-top: 3px;
`;
export const Label = styled.label``;
