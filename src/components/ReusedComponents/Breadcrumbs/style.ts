import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')}
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 11px;
`;
export const LinkMain = styled(Link)`
    margin-right: 11px;
    text-decoration-line: none;
    transition: ${({ theme }) => theme.decorations.transition};
    :hover {
        color: ${({ theme }) => theme.colors.mainPrimary()};
    }
`;
