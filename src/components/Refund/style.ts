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
    padding-top: 30px;
`;
export const HeaderText = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText20')}
    padding-bottom: 20px;
`;
export const Subtitle = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh20')}
    padding-bottom: 10px;
    @media ${({ theme }) => theme.breakpoints.md} {
        ${({ theme }) => theme.helpers.getTypography('dText14')}
    }
`;
export const Body = styled.div`
    ${({ theme }) => theme.mixins.flexStartCenter};
    column-gap: 30px;
    margin: 10px 0 auto 0;
    @media ${({ theme }) => theme.breakpoints.ld} {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: 1fr;
        gap: 30px 100px;
    }
    @media ${({ theme }) => theme.breakpoints.md} {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: 1fr;
        gap: 30px 50px;
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        ${({ theme }) => theme.mixins.flexCenterCenter};
        flex-direction: column;
    }
`;
export const Item = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    flex-direction: column;
    width: 165px;
    @media ${({ theme }) => theme.breakpoints.md} {
        width: 100%;
        margin-bottom: 15px;
    }
`;
export const Icon = styled.div`
    padding-bottom: 10px;
    @media ${({ theme }) => theme.breakpoints.md} {
        scale: 0.9;
    }
`;
export const Text = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh20')}
    text-align: center;
    @media ${({ theme }) => theme.breakpoints.md} {
        ${({ theme }) => theme.helpers.getTypography('dText14')}
    }
`;
