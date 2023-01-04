import styled from 'styled-components';

import Typography from '../Typography';
export const MainContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background()};
    margin-top: 4px;
`;

export const MainContent = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
`;

export const Delivery = styled.div`
    ${({ theme }) => theme.mixins.flexCenter}
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
