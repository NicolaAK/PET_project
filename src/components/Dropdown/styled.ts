import styled from 'styled-components';
import Typography from '@components/Typography';
import { IProps } from './index';
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

export const DropDownList = styled.ul`
    position: absolute;
    flex-wrap: wrap;
`;

export const ListItem = styled.button<IProps>`
    width: ${(props) => props.width}px;
    border-top: 1px solid #e0bea2;
    list-style: none;
    padding: 3px 0;
    align-items: center;
`;
export const ArrowContainer = styled.div`
    padding-bottom: 5px;
    rotate: 180deg;
`;
