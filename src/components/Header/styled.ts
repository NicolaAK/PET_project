import styled from 'styled-components';

export const FooterContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.white()};
    height: 85px;
`;
export const FooterContent = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
    padding: 25px 0 20px 0;
`;
export const AboutsCompany = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 25px;
`;

export const SocialsMedia = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 32px;
`;
export const LogoContainer = styled.button``;
export const Settings = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 24px;
`;
