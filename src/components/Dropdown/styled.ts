import styled from 'styled-components';

export const DropDownContainer = styled('div')``;

export const DropDownHeader = styled('button')`
    margin-bottom: 0.8em;
    padding: 0.4em 2em 0.4em 1em;
`;

export const DropDownList = styled('ul')`
    width: 1px;
    &:first-child {
        padding-top: 0.8em;
    }
`;

export const ListItem = styled('button')`
    list-style: none;
    margin: 0.8em;
`;
