import styled from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    margin-top: 30px;
    @media ${({ theme }) => theme.breakpoints.xl} {
        padding: 0 20px;
    }
    @media ${({ theme }) => theme.breakpoints.md} {
        margin-top: 0px;
    }
`;
export const Content = styled.div`
    ${({ theme }) => theme.mixins.flexStart};
    column-gap: 113px;
    @media ${({ theme }) => theme.breakpoints.xl} {
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 40px 15px;
        grid-template-areas:
            '. .'
            '. .';
    }
    @media ${({ theme }) => theme.breakpoints.md} {
        margin-bottom: 30px;
    }
`;
export const Heading = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText20')};
    margin: 30px 0 30px 0;
`;
export const Contacts = styled.div``;
export const Icons = styled.div`
    margin-top: 20px;
    ${({ theme }) => theme.mixins.flexStart};
    column-gap: 15px;
`;
export const Title = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh20')};
`;
export const Text = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
    margin-top: 20px;
    @media ${({ theme }) => theme.breakpoints.sm} {
        ${({ theme }) => theme.helpers.getTypography('dText14')};
        margin-top: 10px;
    }
`;
