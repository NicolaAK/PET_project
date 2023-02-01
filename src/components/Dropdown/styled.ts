import styled from 'styled-components';
import Typography from '@components/Typography';
import { IProps } from './index';

interface IAnimation {
    value: boolean;
}
export const DropDownContainer = styled.div``;
export const Text = styled(Typography).attrs({ variant: 'dHeader18' })`
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
    flex-wrap: wrap;
    transition: all 0.3s linear;
    opacity: ${({ value }) => (value ? '1' : '0')};
    transform: ${({ value }) => (value ? 'translateY(0)' : 'translateY(10%)')};
    visibility: ${({ value }) => (value ? 'visible' : 'hidden')};
`;

export const ListItem = styled.button<IProps>`
    width: ${(props) => props.width}px;
    border-top: 1px solid #e0bea2;
    list-style: none;
    padding: 3px 0;
    align-items: center;
`;
export const ArrowContainer = styled.div<IAnimation>`
    padding-bottom: ${({ value }) => (value ? '0' : '3px')};
    transition: all 0.3s linear;
    rotate: ${({ value }) => (value ? '-180deg' : '0')};
`;
