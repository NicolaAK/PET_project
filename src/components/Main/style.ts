import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div``;
export const MainContent = styled.div``;
export const CategoryContainer = styled.div``;
export const CategoryTitle = styled(Link)`
    color: ${({ theme }) => theme.colors.blackPrimary()};
    ${({ theme }) => theme.helpers.getTypography('dText36')};
    transition: ${({ theme }) => theme.decorations.transition};
    text-decoration-line: none;
    :hover {
        color: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    }
`;
