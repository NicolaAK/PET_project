import styled from 'styled-components';
import Typography from '@components/Typography';

export const Card = styled.div`
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
`;

export const SpecialCardsContainer = styled.div``;
export const SpecialCardsContant = styled.div``;
export const SpecialCardsTitle = styled(Typography).attrs({ variant: 'dHeaderM' })`
    color: ${({ theme }) => theme.colors.mainOnSurface()};
    margin-bottom: 40px;
`;
