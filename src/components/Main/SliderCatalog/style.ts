import styled from 'styled-components';

export const SliderContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    display: block;
    align-items: center;
    .slick-slide {
        padding: 0;
        height: 450px;
    }
    .slick-slider {
        height: 450px;
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        .slick-slide {
            padding: 0;
            height: 100%;
        }
        .slick-slider {
            height: 100%;
        }
    }
`;
export const SliderWrap = styled.div``;
export const SliderBottomBox = styled.button`
    position: relative;
    bottom: 39px;
    background: ${({ theme }) => theme.colors.mainPrimary(0.75)};
    backdrop-filter: blur(3px);
    width: 274px;
    height: 40px;
    ${({ theme }) => theme.mixins.flexCenterCenter};
    @media ${({ theme }) => theme.breakpoints.sm} {
        width: 165px;
    }
`;
export const SliderPhoto = styled.div`
    @media ${({ theme }) => theme.breakpoints.sm} {
        img {
            width: 165px;
        }
    }
`;
export const SliderText = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText20')};
    color: ${({ theme }) => theme.colors.white()};
    @media ${({ theme }) => theme.breakpoints.sm} {
        ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
    }
`;
