import styled from 'styled-components';

export const Container = styled.div`
    grid-area: image;
    display: flex;
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
    width: 100%;
    height: 540px;
    overflow: hidden;
`;
export const ImageBig = styled.img`
    transition: 0.7s;
    :hover {
        transform: scale(1.03);
    }
`;
export const ModalWindow = styled.div`
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    ${({ theme }) => theme.mixins.flexCenterCenter}
`;

export const ModalBackground = styled.div`
    background-color: ${({ theme }) => theme.colors.blackPrimary(0.75)};
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const SliderContainer = styled.button`
    z-index: 1000;
    width: 100%;
`;
export const ExitContainer = styled.button`
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: 1001;
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.colors.mainPrimary()};
    transition: ${({ theme }) => theme.decorations.transition};
    :hover {
        scale: 1.1;
    }
`;
export const Exit = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText20')};
    color: ${({ theme }) => theme.colors.white()};
    z-index: 4;
    scale: 1.3;
`;
