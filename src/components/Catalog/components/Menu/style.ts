import styled from 'styled-components';
import Typography from '@components/Typography';

export const MenuContainer = styled.div`
    grid-area: Menu;
`;
export const MenuContent = styled.div``;

export const CategoryContainer = styled.button``;
export const CategoryBtn = styled.div``;
export const Text = styled(Typography).attrs({ variant: 'dText16lh19' })`
    padding: 10px 0;
    :hover {
        color: ${({ theme }) => theme.colors.mainPrimary()};
    }
`;
