import styled from 'styled-components';

export const SubscriptionContainer = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
`;
export const SubscriptionContent = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    margin-top: 120px;
    width: 600px;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 20px 0px;
    grid-template-areas:
        '.'
        '.'
        '.'
        '.';
    @media ${({ theme }) => theme.breakpoints.xs} {
        margin-top: 0;
        gap: 15px 0px;
    }
`;
export const Item = styled.a`
    ${({ theme }) => theme.helpers.getTypography('dText36')};
    text-align: center;
    @media ${({ theme }) => theme.breakpoints.xs} {
        margin-top: 0;
        ${({ theme }) => theme.helpers.getTypography('dText24')};
    }
`;
export const Text = styled.a`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
    text-align: center;
    @media ${({ theme }) => theme.breakpoints.xs} {
        ${({ theme }) => theme.helpers.getTypography('dText14')};
    }
`;
export const ButtonBox = styled.a`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')};
`;
