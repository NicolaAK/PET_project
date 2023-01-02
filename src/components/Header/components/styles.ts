import styled from 'styled-components';
import Typography from '../../Typography';

export const ButtonMenuWrapper = styled.button`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
`;

export const ButtonMenuTitle = styled(Typography).attrs({ variant: 'dTextXs' })`
    color: ${({ theme }) => theme.colors.mainOnSurface()};
`;
