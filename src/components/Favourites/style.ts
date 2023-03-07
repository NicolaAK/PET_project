import styled from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    margin-top: 30px;
`;
export const Content = styled.div``;
export const Title = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText20')};
    margin: 30px 0 30px 0;
`;
export const ContainerProduct = styled.div`
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
    flex-wrap: wrap;
    gap: 15px;
`;
