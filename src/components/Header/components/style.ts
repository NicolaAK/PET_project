import styled from 'styled-components';
import Typography from '@components/Typography';
import { Link } from 'react-router-dom';

export const AboutCompanyWrapper = styled.button`
    ${({ theme }) => theme.mixins.flexCenter}
`;
export const Icon = styled(Link)`
    ${({ theme }) => theme.mixins.flexCenter};
    transition: ${({ theme }) => theme.decorations.transition};
    &:hover {
        scale: 110%;
        filter: invert(0.42) sepia(1);
    }
`;
export const AboutCompanyTitle = styled(Typography).attrs({ variant: 'dHeader18' })`
    transition: ${({ theme }) => theme.decorations.transition};
    &:hover {
        color: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    }
`;
export const LinkText = styled(Link)`
    text-decoration-line: none;
`;
