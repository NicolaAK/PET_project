import React from 'react';
import {
    WatchProducts,
    NewCollection,
    BoxTitle,
    BoxContainer,
    BoxFotos,
    FotoModel3,
    FotoModel1,
    FotoModel2,
    WatchProductsContainer,
    ArrowContainer,
} from '@components/Main/HeaderBox/styled';
import Line from '@assets/icons/line.svg';
import ArrowLight from '@assets/icons/arrowRight.svg';
import mainModel1 from '@assets/foto/mainModel1.png';
import mainModel2 from '@assets/foto/mainModel2.png';
import mainModel3 from '@assets/foto/mainModel3.png';

const HeaderBox = () => (
    <BoxContainer>
        <BoxFotos>
            <FotoModel1>
                <img src={mainModel1} alt="fotoModel" />,
            </FotoModel1>
            <FotoModel2>
                <img src={mainModel2} alt="fotoModel" />,
                <BoxTitle>
                    <NewCollection>Новая коллекция</NewCollection>
                    <Line />
                    <WatchProductsContainer>
                        <WatchProducts>СМОТРЕТЬ НОВИНКИ</WatchProducts>
                        <ArrowContainer>
                            <ArrowLight />
                        </ArrowContainer>
                    </WatchProductsContainer>
                </BoxTitle>
            </FotoModel2>
            <FotoModel3>
                <img src={mainModel3} alt="fotoModel" />,
            </FotoModel3>
        </BoxFotos>
    </BoxContainer>
);

export default HeaderBox;
