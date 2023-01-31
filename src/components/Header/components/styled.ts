import styled from 'styled-components';
import Typography from '@components/Typography';

export const AboutCompanyWrapper = styled.button`
    ${({ theme }) => theme.mixins.flexCenter}
`;
export const Icon = styled.button`
    ${({ theme }) => theme.mixins.flexCenter};
    transition: ${({ theme }) => theme.decorations.transition};
    &:hover {
        filter: invert(0.4) sepia(1);
        scale: 110%;
    }
`;
export const AboutCompanyTitle = styled(Typography).attrs({ variant: 'dHeader18' })`
    transition: ${({ theme }) => theme.decorations.transition};
    &:hover {
        color: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    }
`;
