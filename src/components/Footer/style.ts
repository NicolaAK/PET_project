import styled from 'styled-components';
import bgFooter from '@assets/images/bgFooter.png';
import Typography from '../Typography';

export const FooterContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.footerOnBackground()};
    height: 126px;
    &:before {
        content: '';
        display: block;
        background: url(${bgFooter});
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0.3;
        z-index: 1;
    }
`;

export const FooterContent = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    ${({ theme }) => theme.mixins.flexCenter};
    padding-top: 24px;
    z-index: 2;
`;

export const AboutsCompany = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    grid-column-gap: 40px;
    padding-left: 40px;
    z-index: 2;
`;

export const SocialsMedia = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    grid-column-gap: 20px;
    padding-left: 135px;
    z-index: 2;
`;

export const NumberCompany = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    grid-column-gap: 10px;
    padding-left: 46px;
    z-index: 2;
`;
export const Number = styled(Typography).attrs({ variant: 'dTextS' })`
    z-index: 2;
`;
