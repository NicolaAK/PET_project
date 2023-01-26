import styled from 'styled-components';
import Typography from '@components/Typography';
import { IProps } from './index';
export const DropDownContainer = styled(Typography).attrs({ variant: 'dHeader18' })`
    flex-direction: row;
`;

export const DropDownHeader = styled.button`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    column-gap: 9px;
`;

export const DropDownList = styled.ul`
    position: absolute;
    ${({ theme }) => theme.mixins.flexCenterCenter};
    flex-wrap: wrap;
`;

export const ListItem = styled.button<IProps>`
    width: ${(props) => props.width}px;
    border-top: 1px solid #e0bea2;
    list-style: none;
    padding: 3px 0;
    &:hover {
        color: ${({ theme }) => theme.colors.buttonPrimaryClick()};
    }
`;
export const ArrowContainer = styled.button`
    padding-bottom: 5px;
    rotate: 180deg;
`;
