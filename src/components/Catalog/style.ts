import styled from 'styled-components';
import Typography from '@components/Typography';

export const CatalogContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    margin-top: 30px;
`;
export const CatalogContent = styled.div``;

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
