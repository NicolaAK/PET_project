import styled from 'styled-components';
export const SliderContainer = styled.div`
    .slick-slide {
        height: 100vh !important;
    }

    .slick-track {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: nowrap !important;
        align-items: stretch !important;
    }
    .slick-slide {
        padding: 0;
    }
`;
export const SliderWrap = styled.div``;
export const SliderPhoto = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
`;
export const Image = styled.div`
    height: 100vh;

    img {
        height: 100vh;
    }
`;
