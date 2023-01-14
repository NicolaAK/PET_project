import styled from 'styled-components';
import Typography from '@components/Typography';

export const MoneyContainer = styled.div`
    flex-direction: row;
`;
export const MoneyContent = styled.button`
    ${({ theme }) => theme.mixins.flexCenter};
    justify-content: center;
    column-gap: 9px;
`;

export const MoneyTitle = styled(Typography).attrs({ variant: 'dHeader18' })`
        color: ${({ theme }) => theme.colors.blackPrimary()}}`;
