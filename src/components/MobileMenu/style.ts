import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: absolute;
    width: 100%;
`;
export const Content = styled.div`
    margin: 0 20px;
`;
export const Catalog = styled.div``;
export const Line = styled.div`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.blackPrimary(0.5)};
`;
export const LinkText = styled(Link)`
    ${({ theme }) => theme.helpers.getTypography('dHeader16')}
    ${({ theme }) => theme.mixins.flexCenterCenter};
    text-decoration: none;
    margin: 20px 0;
`;
