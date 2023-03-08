import styled from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    margin-top: 30px;
`;
export const Content = styled.div`
    ${({ theme }) => theme.mixins.flexStart};
    column-gap: 113px;
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
`;
