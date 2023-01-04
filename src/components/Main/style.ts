import styled from 'styled-components';
import bgPromo from '@assets/images/bgPromo.png';

import Typography from '../Typography';
export const MainContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background()};
    margin-top: 4px;
`;

export const MainContent = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
`;

export const DeliveryContainer = styled.div`
    position: relative;

    &:before {
        content: '';
        display: block;
        background: url(${bgPromo});
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0.3;
        z-index: 1;
    }
`;

export const Delivery = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    z-index: 2;
`;

export const DeliveryBG = styled.img`
    height: 200px;
`;

export const DeliveryText = styled(Typography).attrs({ variant: 'dHeaderL' })``;

export const PromoContainer = styled.div`
    margin-top: 76px;
`;

export const PromoContent = styled.div``;

export const PromoTitle = styled.div`
    display: flex;
`;

export const Promo = styled(Typography).attrs({ variant: 'dHeaderM' })``;

export const AllPromo = styled.text``;
