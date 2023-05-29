import styled from 'styled-components';

interface IProps {
    visible: boolean;
}
export const PagesContainer = styled.div``;
export const VisibleDesktop = styled.div<IProps>`
    transition: all 0.7s ease;
    opacity: ${({ visible }) => (visible ? '0' : '1')};
    transform: ${({ visible }) => (visible ? 'translateX(-100%)' : 'translateX(0)')};
    visibility: ${({ visible }) => (visible ? 'hidden' : 'visible')};
`;
