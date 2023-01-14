import styled from 'styled-components';
import Typography from '@components/Typography';

export const AboutCompanyWrapper = styled.button`
    ${({ theme }) => theme.mixins.flexCenter}
`;
export const AboutCompanyTitle = styled(Typography).attrs({ variant: 'dHeader18' })`
color: ${({ theme }) => theme.colors.blackPrimary()}}`;
