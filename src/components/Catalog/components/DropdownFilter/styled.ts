import styled from 'styled-components';
import { IProps } from './index';

interface IAnimation {
    isOpenDropdown: boolean;
}

export const DropDownContainer = styled.div``;
export const Text = styled.div<{ isActive: boolean }>`
    ${({ theme }) => theme.helpers.getTypography('dText16w')};
    ${({ theme }) => theme.mixins.flexCenterCenter};
    transition: ${({ theme }) => theme.decorations.transition};
    &:hover {
        color: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    }
`;
export const Placeholder = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dText16w')}
    ${({ theme }) => theme.mixins.flexCenterCenter};
    transition: ${({ theme }) => theme.decorations.transition};
    &:hover {
        color: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    }
`;

export const DropDownHeader = styled.button`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    column-gap: 9px;
`;

export const DropDownList = styled.ul<IAnimation>`
    position: absolute;
    display: flex;
    flex-direction: column;
    transition: all 0.3s linear;
    opacity: ${({ isOpenDropdown }) => (isOpenDropdown ? '1' : '0')};
    transform: ${({ isOpenDropdown }) => (isOpenDropdown ? 'translateY(0)' : 'translateY(10%)')};
    visibility: ${({ isOpenDropdown }) => (isOpenDropdown ? 'visible' : 'hidden')};
`;

export const ListItem = styled.button<IProps>`
    width: ${(props) => props.width}px;
    border-top: 1px solid #e0bea2;
    background-color: ${({ theme }) => theme.colors.white()};
    list-style: none;
    padding: 3px 0;
    align-items: center;
`;
export const ArrowContainer = styled.div<IAnimation>`
    margin-bottom: ${({ isOpenDropdown }) => (isOpenDropdown ? '0' : '-3px')};
    transition: all 0.3s linear;
    rotate: ${({ isOpenDropdown }) => (isOpenDropdown ? '-90deg' : '90deg')};
`;
