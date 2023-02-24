import styled from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    margin-top: 30px;
`;
export const Content = styled.div`
    margin-top: 30px;
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 40px;
    grid-template-areas: 'image card';
`;
