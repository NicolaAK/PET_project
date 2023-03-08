import styled from 'styled-components';

interface IAnimation {
    active?: boolean;
}
export const Container = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    margin-top: 30px;
`;
export const Content = styled.div`
    margin-top: 30px;
`;
export const Tab = styled.button<IAnimation>`
    ${({ theme }) => theme.helpers.getTypography('dText16lh19')}
    padding: 15px 50px;
    transition: ${({ theme }) => theme.decorations.transition};
    ${({ active }) =>
        active &&
        `
    background: #E0BEA2;
    color: white;
  `}
    :hover {
        color: ${({ theme, active }) => (active ? theme.colors.white() : theme.colors.buttonPrimaryClick())};
    }
`;
export const ButtonGroup = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter}
`;
export const Line = styled.div`
    height: 1px;
    background: ${({ theme }) => theme.colors.blackPrimary(0.35)};
`;
