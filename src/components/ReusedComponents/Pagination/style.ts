import styled from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    margin-top: 50px;
    gap: 10px;
`;
export const ActivePage = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 2px;
    border: solid ${({ theme }) => theme.colors.mainPrimary()} 2px;
    ${({ theme }) => theme.helpers.getTypography('dTextBold16')}
    ${({ theme }) => theme.mixins.flexCenterCenter};
    color: ${({ theme }) => theme.colors.white()};
    padding-bottom: 2px;
    background-color: ${({ theme }) => theme.colors.mainPrimary()};
`;
export const NotActivePage = styled.div`
    cursor: pointer;
    ${({ theme }) => theme.mixins.flexCenterCenter};
    padding-bottom: 2px;
    height: 30px;
    width: 30px;
    border-radius: 2px;
    border: solid ${({ theme }) => theme.colors.mainPrimary()} 2px;
    ${({ theme }) => theme.helpers.getTypography('dText16lh20')}
    transition: ${({ theme }) => theme.decorations.transition};
    :hover {
        color: ${({ theme }) => theme.colors.mainPrimary()};
    }
`;
export const PrevPage = styled.div`
    svg path {
        fill: ${({ theme }) => theme.colors.mainPrimary()};
    }
    cursor: pointer;
    ${({ theme }) => theme.mixins.flexCenterCenter};
`;
export const NextPage = styled.div`
    svg path {
        fill: ${({ theme }) => theme.colors.mainPrimary()};
    }
    cursor: pointer;
    ${({ theme }) => theme.mixins.flexCenterCenter};
`;
