import styled from 'styled-components';
import Typography from '@components/Typography';

export const LanguageContainer = styled.div`
    flex-direction: row;
`;
export const LanguageContent = styled.button`
    ${({ theme }) => theme.mixins.flexCenter};
    justify-content: center;
    column-gap: 9px;
`;

export const LanguageTitle = styled(Typography).attrs({ variant: 'dHeader18' })`
        color: ${({ theme }) => theme.colors.blackPrimary()}}`;
