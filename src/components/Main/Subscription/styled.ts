import styled from 'styled-components';
import Typography from '@components/Typography';

export const SubscriptionContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    ${({ theme }) => theme.mixins.flexCenterCenter};
`;
export const SubscriptionContent = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    flex-direction: column;
    margin-top: 120px;
    width: 600px;
`;
export const Item = styled(Typography).attrs({ variant: 'dText36' })`
    padding-bottom: 50px;
`;
export const Text = styled(Typography).attrs({ variant: 'dText16lh19' })`
    text-align: center;
`;
export const ButtonBox = styled(Typography).attrs({ variant: 'dText16lh19' })`
    padding-bottom: 20px;
`;
