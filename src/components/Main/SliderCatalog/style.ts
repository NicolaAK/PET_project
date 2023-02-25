import styled from 'styled-components';
import Typography from '@components/Typography';
export const SliderContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    .slick-slide {
        padding: 0;
        height: 450px;
    }
    .slick-slider {
        height: 450px;
    }
`;
export const SliderWrap = styled.div``;
export const SliderBottomBox = styled.button`
    position: relative;
    bottom: 40px;
    background: ${({ theme }) => theme.colors.mainPrimary(0.75)};
    backdrop-filter: blur(3px);
    width: 274px;
    height: 40px;
    ${({ theme }) => theme.mixins.flexCenterCenter}
`;
export const SliderPhoto = styled.div``;
export const SliderText = styled(Typography).attrs({ variant: 'dText20' })`
    color: ${({ theme }) => theme.colors.white()};
`;
