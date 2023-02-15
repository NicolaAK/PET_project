import styled from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    margin-top: 30px;
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
`;
export const Body = styled.div`
    ${({ theme }) => theme.mixins.flexStartCenter};
    column-gap: 30px;
    margin: 10px 0 385px 0;
`;
export const Item = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    flex-direction: column;
    width: 165px;
`;
export const Icon = styled.div`
    padding-bottom: 10px;
`;
export const Text = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16lh20')}
    text-align: center;
`;
