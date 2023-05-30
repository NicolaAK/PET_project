import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div``;
export const MainContent = styled.div`
    @media ${({ theme }) => theme.breakpoints.xl} {
        margin: 0 20px;
    }
`;
export const CategoryContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
`;
export const CategoryTitle = styled(Link)`
    color: ${({ theme }) => theme.colors.blackPrimary()};
    ${({ theme }) => theme.helpers.getTypography('dText36')};
    transition: ${({ theme }) => theme.decorations.transition};
    text-decoration-line: none;
    :hover {
        color: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        ${({ theme }) => theme.helpers.getTypography('dText24')};
        margin-left: 10px;
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        margin-left: 0px;
    }
`;
