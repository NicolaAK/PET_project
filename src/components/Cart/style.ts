import styled from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    margin-top: 30px;
`;
export const Content = styled.div``;
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 2.4fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 20px;
    grid-template-areas: '. .';
`;
