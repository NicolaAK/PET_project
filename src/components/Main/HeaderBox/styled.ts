import styled from 'styled-components';
import Typography from '@components/Typography';

export const BoxContainer = styled.div`
    position: relative;
    bottom: 85px;
`;

export const BoxTitle = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    position: absolute;
    flex-direction: column;
    width: 100%;
    top: 400px;
    left: 0px;
    color: ${({ theme }) => theme.colors.white()};
`;
export const PhotoModel1 = styled.image`
    margin: 0 -5px;
`;
export const PhotoModel2 = styled.image``;
export const PhotoModel3 = styled.image`
    margin: 0 -5px;
`;
export const NewCollection = styled(Typography).attrs({ variant: 'dHeader46' })`
    margin-bottom: 20px;
`;
export const WatchProducts = styled(Typography).attrs({ variant: 'dHeader16' })``;
export const WatchProductsContainer = styled.button`
    flex-direction: row;
    margin-top: 20px;
    ${({ theme }) => theme.mixins.flexCenter};
    justify-content: center;
    column-gap: 7px;
`;
export const ArrowContainer = styled.div``;
export const BoxPhoto = styled.div`
    ${({ theme }) => theme.mixins.flexCenterCenter};
`;
