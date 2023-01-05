import styled from 'styled-components';
import Typography from '../../Typography';

export const AboutCompanyWrapper = styled.button`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
`;

export const AboutCompanyTitle = styled(Typography).attrs({ variant: 'dTextXs' })`
    color: ${({ theme }) => theme.colors.mainOnSurface()};
`;
