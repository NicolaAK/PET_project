import styled from 'styled-components';

export const Container = styled.div``;
export const Group = styled.div`
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
    margin-top: 20px;
`;
export const Title = styled.div`
    display: flex;
    column-gap: 5px;
`;
export const Text = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16w')};
`;
