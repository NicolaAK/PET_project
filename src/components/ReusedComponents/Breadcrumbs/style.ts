import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Navigation = styled.nav``;
export const NavUl = styled.ul`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 11px;
`;
export const List = styled.li``;
export const Content = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 11px;
`;
export const EndCrumb = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
`;
export const LinkText = styled(Link)`
    text-decoration-line: none;
    transition: ${({ theme }) => theme.decorations.transition};
    :hover {
        color: ${({ theme }) => theme.colors.mainPrimary()};
    }
`;
