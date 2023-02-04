import styled from 'styled-components';
import Typography from '@components/Typography';
import { Link } from 'react-router-dom';

export const CatalogContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    margin-top: 30px;
`;
export const CatalogContent = styled.div``;
export const Navigation = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')}
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 11px;
`;
export const Heading = styled.div`
    grid-area: Heading;
`;
export const Text = styled(Typography).attrs({ variant: 'dText20' })``;
export const Container = styled.div`
    margin-top: 30px;
    display: grid;
    gap: 30px;
    grid-auto-columns: 150px auto;
    grid-auto-rows: 25px auto;
    grid-template-areas:
        'Heading Filter'
        'Menu Products';
`;
export const LinkMain = styled(Link)`
    text-decoration-line: none;
    transition: ${({ theme }) => theme.decorations.transition};
    :hover {
        color: ${({ theme }) => theme.colors.mainPrimary()};
    }
`;
