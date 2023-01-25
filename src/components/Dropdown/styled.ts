import styled from 'styled-components';
import Typography from '@components/Typography';

export const DropDownContainer = styled(Typography).attrs({ variant: 'dHeader18' })`
    flex-direction: row;
`;

export const DropDownHeader = styled.button`
    ${({ theme }) => theme.mixins.flexCenterCenter};
    column-gap: 9px;
`;

export const DropDownList = styled.ul`
    position: absolute;
    width: 1px;
`;

export const ListItem = styled.button`
    border-top: 1px solid #e0bea2;
    list-style: none;
    padding: 3px 0;
`;
