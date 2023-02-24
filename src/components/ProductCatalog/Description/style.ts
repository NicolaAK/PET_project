import styled from 'styled-components';
interface IEllipse {
    color: string;
    isSelectColor?: boolean;
}
interface IAnimation {
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
    ${({ theme }) => theme.mixins.flexStart};
    column-gap: 7.5px;
    margin-bottom: 25px;
`;
export const EllipseColor = styled.button<IEllipse>`
    width: 21px;
    height: 21px;
    background-color: ${({ color }) => color};
    border-radius: 21px;
    border: 1px solid ${({ theme, color }) => (color === '#FFFFFF' ? theme.colors.blackPrimary(0.5) : 'transparent')};
    transform: scale(${({ isSelectColor }) => (!isSelectColor ? '1' : '1.1')});
`;
export const GridContainer = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 50px;
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
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.blackPrimary(0.3)}; ;
`;
export const StructureContainer = styled.div`
    margin-top: 20px;
`;
