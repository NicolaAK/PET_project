import styled from 'styled-components';
export const SliderContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    .slick-slide {
        padding: 0;
    }
`;
export const SliderWrap = styled.div``;
export const SliderPhoto = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
`;
