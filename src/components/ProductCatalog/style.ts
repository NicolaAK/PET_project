import styled from 'styled-components';
interface IEllipse {
    color: string;
    isSelectColor?: boolean;
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
    width: 100%;
    height: auto;
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
