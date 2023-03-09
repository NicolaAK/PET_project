import styled from 'styled-components';

export const Title = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
    margin: 20px 0 20px 0;
`;
export const GroupOne = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 20px;
    grid-template-areas: '. . . .';
`;
export const GroupTwo = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 20px;
    grid-template-areas: '. .';
    margin-bottom: 20px;
`;
export const Container = styled.div``;
