import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: absolute;
    width: 100%;
`;
export const Content = styled.div`
    margin: 0 20px;
`;
export const Catalog = styled.div``;
export const Line = styled.div`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.blackPrimary(0.5)};
`;
export const LinkText = styled(Link)`
    ${({ theme }) => theme.helpers.getTypography('dHeader16')}
    ${({ theme }) => theme.mixins.flexCenterCenter};
    text-decoration: none;
    margin: 20px 0;
`;
export const Language = styled.div`
    position: relative;
    width: 5px;
    ${({ theme }) => theme.mixins.flexCenterCenter};
    column-gap: 24px;
    margin: 20px auto;
`;
export const AboutsContainer = styled.div`
    margin-top: 70px;
    ${({ theme }) => theme.mixins.flexCenterCenter};
    flex-direction: column;
    gap: 6px;
`;
export const Icons = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    column-gap: 14px;
`;
export const Text = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dHeader14')}
`;
export const Title = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dHeader16')};
`;
export const Auth = styled(Link)`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    column-gap: 10px;
    text-decoration: none;
    margin: 10px 0;
`;
export const Guest = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    column-gap: 10px;
    margin: 15px 0;
`;
export const IconUser = styled.div`
    scale: 0.8;
`;
