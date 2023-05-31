import styled from 'styled-components';
import Typography from '@components/Typography';

export const CatalogContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    margin-top: 30px;
    @media ${({ theme }) => theme.breakpoints.xl} {
        padding: 0 20px;
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        margin-top: 0px;
    }
`;
export const CatalogContent = styled.div``;

export const Heading = styled.div`
    grid-area: Heading;
    @media ${({ theme }) => theme.breakpoints.sm} {
        display: none;
    }
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
    @media ${({ theme }) => theme.breakpoints.md} {
        grid-auto-columns: 25% 68vw;
        gap: 30px 0;
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        margin-top: 0px;
        grid-auto-columns: 90vw;
        grid-auto-rows: auto;
        gap: 0px;
        grid-template-areas:
            'Heading'
            'Menu'
            'Filter'
            'Products';
    }
`;
