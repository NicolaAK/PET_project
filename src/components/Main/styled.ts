import styled from 'styled-components';
import Typography from '@components/Typography';

export const MainContainer = styled.div``;
export const MainContent = styled.div``;
export const CategoryContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid}
`;
export const CategoryTitle = styled(Typography).attrs({ variant: 'dText36' })`
    color: ${({ theme }) => theme.colors.blackPrimary()};
`;
