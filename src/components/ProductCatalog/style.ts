import styled from 'styled-components';
interface IEllipse {
    color: string;
    isSelectColor?: boolean;
}
interface IAnimation {
    isOpenDetails?: boolean;
    isOpenStructure?: boolean;
}
export const Container = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    margin-top: 30px;
`;
export const Content = styled.div`
    ${({ theme }) => theme.mixins.flexStart};
    margin-top: 30px;
`;
export const ImageOther = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ImageOtherContainer = styled.div`
    margin-bottom: 10px;
    overflow: hidden;
    width: 100px;
    height: 100px;
`;
export const ImageSmall = styled.img`
    width: 100%;
    height: auto;
    transition: 0.7s;
    :hover {
        transform: scale(1.045);
    }
`;
export const ImageMain = styled.div`
    margin-left: 10px;
    width: 450px;
    height: 540px;
    overflow: hidden;
`;
export const ImageBig = styled.img`
    transition: 0.7s;
    :hover {
        transform: scale(1.03);
    }
`;
export const ProductDescription = styled.div`
    margin-left: 50px;
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
    grid-template-columns: 255px 255px;
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
    width: 530px;
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
