import styled from 'styled-components';
import Typography from '@components/Typography';
export const CardContainer = styled.div<{ bg: string }>`
    background-color: ${(props) => props.bg};
    box-shadow: ${({ theme }) => theme.decorations.boxShadow.primary.xxs};
    width: 584px;
    height: 200px;
`;
export const CardContent = styled.div`
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween}
`;
export const CardTitle = styled.div`
    color: ${({ theme }) => theme.colors.mainOnSurface()};
    width: 258px;
    margin-left: 40px;
`;
export const CardHeadTitle = styled(Typography).attrs({ variant: 'dHeaderS' })``;
export const CardDescribeTitle = styled(Typography).attrs({ variant: 'dTextS' })`
    margin-top: 6px;
`;
export const CardImage = styled.div`
    padding-right: 30px;
    padding-top: 7px;
`;
