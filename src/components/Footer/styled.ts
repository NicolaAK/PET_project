import styled from 'styled-components';
import Typography from '@components/Typography';

export const FooterContainer = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    margin: 100px auto;
`;
export const FooterContent = styled.div`
    ${({ theme }) => theme.mixins.flexStartCenter};
    column-gap: 47px;
`;
export const ContainerText = styled.div``;
export const Text = styled(Typography).attrs({ variant: 'dFooter16w' })`
    margin-bottom: 10px;
`;
export const CompanyContainer = styled.div`
    width: 250px;
`;
export const CompanyTitle = styled(Typography).attrs({ variant: 'dFooter20' })`
    margin-bottom: 20px;
`;
export const ContainerIcons = styled.div`
    ${({ theme }) => theme.mixins.flexStart};
    column-gap: 13px;
    margin-bottom: 7px;
`;
export const Icon = styled.button``;
