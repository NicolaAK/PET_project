import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
export const PhotoModel1 = styled.div`
    margin: 0 -5px;
`;
export const PhotoModel2 = styled.div``;
export const PhotoModel3 = styled.div`
    margin: 0 -5px;
`;
export const NewCollection = styled.div`
    ${({ theme }) => theme.helpers.getTypography('dHeader46')}
    margin-bottom: 20px;
`;
export const WatchProducts = styled(Link)`
    ${({ theme }) => theme.helpers.getTypography('dHeader16')};
    text-decoration-line: none;
`;
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
