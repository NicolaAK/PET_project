import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 50px;
    margin: 0 auto;
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')}
    border: 1px solid ${({ theme }) => theme.colors.blackPrimary(0.5)};
    transition: ${({ theme }) => theme.decorations.transition};
    :hover {
        box-shadow: ${({ theme }) => theme.decorations.boxShadow.base};
    }
`;
export const Content = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 10px;
    margin: 14px 20px 13px 20px;
`;
export const Minus = styled.button``;
export const Count = styled.div`
    margin-bottom: 5px;
`;
export const Plus = styled.button``;
