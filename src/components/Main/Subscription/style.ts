import styled from 'styled-components';
import Typography from '@components/Typography';

export const SubscriptionContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    ${({ theme }) => theme.mixins.flexCenterCenter};
`;
export const SubscriptionContent = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    margin-top: 120px;
    width: 600px;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 20px 0px;
    grid-template-areas:
        '.'
        '.'
        '.'
        '.';
`;
export const Item = styled(Typography).attrs({ variant: 'dText36' })`
    text-align: center;
`;
export const Text = styled(Typography).attrs({ variant: 'dText16lh19' })`
    text-align: center;
`;
export const ButtonBox = styled(Typography).attrs({ variant: 'dText16lh19' })``;
