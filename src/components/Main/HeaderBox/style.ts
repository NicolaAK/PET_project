import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BoxContainer = styled.div`
    position: relative;
    bottom: 85px;
`;
export const BoxPhoto = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 480px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'PhotoModel1 PhotoModel2 PhotoModel3';
    @media ${({ theme }) => theme.breakpoints.xxl} {
        grid-template-columns: 1fr 1fr 1fr;
    }
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
    grid-area: PhotoModel1;
    display: grid;
    justify-content: end;
    img {
        width: 100%;
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        display: none;
    } ;
`;
export const PhotoModel2 = styled.div`
    grid-area: PhotoModel2;
    display: grid;
    justify-content: center;
    img {
        width: 100%;
    }
`;
export const PhotoModel3 = styled.div`
    grid-area: PhotoModel3;
    img {
        height: 900px;
    }
    @media ${({ theme }) => theme.breakpoints.xxl} {
        img {
            width: 100%;
            height: auto;
        }
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        display: none;
    } ;
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
