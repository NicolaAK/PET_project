import styled from 'styled-components';
import Typography from '@components/Typography';
export const SliderContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid}
`;
export const SliderWrap = styled.div``;
export const SliderBottonBox = styled.button`
    position: relative;
    bottom: 40px;
    background: ${({ theme }) => theme.colors.mainPrimaryOpacity75()};
    backdrop-filter: blur(3px);
    width: 274px;
    height: 40px;
    ${({ theme }) => theme.mixins.flexCenterCenter}
`;
export const SliderPhoto = styled.div``;
export const SliderText = styled(Typography).attrs({ variant: 'dText20' })`
    color: ${({ theme }) => theme.colors.white()};
`;

// ARROW
export const ArrowContainerRight = styled.div`
    position: relative;
    bottom: 280px;
    left: 1080px;
    z-index: 1;
`;
export const ArrowContainerLeft = styled.div`
    position: relative;
    top: 248px;
    left: 20px;
    z-index: 1;
`;
export const ArrowBox = styled.button`
    background: ${({ theme }) => theme.colors.mainPrimary()};
    ${({ theme }) => theme.mixins.flexCenterCenter};
    width: 40px;
    height: 40px;
`;
