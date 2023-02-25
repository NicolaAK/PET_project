import React from 'react';
import {
    WatchProducts,
    NewCollection,
    BoxTitle,
    BoxContainer,
    BoxPhoto,
    PhotoModel3,
    PhotoModel1,
    PhotoModel2,
    WatchProductsContainer,
    ArrowContainer,
} from '@components/Main/HeaderBox/style';
import Line from '@assets/icons/line.svg';
import ArrowLight from '@assets/icons/arrowRight.svg';
import MainModel1 from '@assets/foto/mainModel1.png';
import MainModel2 from '@assets/foto/mainModel2.png';
import MainModel3 from '@assets/foto/mainModel3.png';
import { generateGithubPagesRoutes } from '../../../routes';
import { ROUTES } from '../../../routes/constants';

const HeaderBox = () => (
    <BoxContainer>
        <BoxPhoto>
            <PhotoModel1>
                <img src={MainModel1} alt="photoModel" />
            </PhotoModel1>
            <PhotoModel2>
                <img src={MainModel2} alt="photoModel" />
                <BoxTitle>
                    <NewCollection>Новая коллекция</NewCollection>
                    <Line />
                    <WatchProductsContainer>
                        <WatchProducts to={generateGithubPagesRoutes(ROUTES.CATALOG)}>СМОТРЕТЬ НОВИНКИ</WatchProducts>
                        <ArrowContainer>
                            <ArrowLight />
                        </ArrowContainer>
                    </WatchProductsContainer>
                </BoxTitle>
            </PhotoModel2>
            <PhotoModel3>
                <img src={MainModel3} alt="photoModel" />
            </PhotoModel3>
        </BoxPhoto>
    </BoxContainer>
);

export default HeaderBox;
