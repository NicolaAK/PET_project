import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    margin-top: 89px;
`;
export const Content = styled.div``;
export const Text = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
    flex-direction: column;
`;

export const TextLink = styled(Link)`
    ${({ theme }) => theme.mixins.flexStart};
    margin-bottom: 20px;
`;
export const GridOrder = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px 20px;
    grid-template-areas:
        '. .'
        '. .';
    margin: 30px 0 15px 0;
`;
export const TextInfo = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
`;
export const Title = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dTextBold16')};
    text-align: end;
`;
export const Conditions = styled.div`
    margin-top: 15px;
    ${({ theme }) => theme.helpers.getTypography('dText14')};
    text-align: start;
`;
