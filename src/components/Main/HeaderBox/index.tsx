import React from 'react';
import { WatchProducts, NewCollection, BoxTitle, BoxContainer, BoxFotos } from '@components/Main/HeaderBox/styled';
import Line from '@assets/icons/line.svg';
import mainModel1 from '@assets/foto/mainModel1.png';
import mainModel2 from '@assets/foto/mainModel2.png';
import mainModel3 from '@assets/foto/mainModel3.png';

const fotos = [
    {
        id: 1,
        foto: <img src={mainModel1} alt="fotoModel" />,
    },
    {
        id: 2,
        foto: <img src={mainModel2} alt="fotoModel" />,
    },
    {
        id: 3,
        foto: <img src={mainModel3} alt="fotoModel" />,
    },
];
const HeaderBox = () => (
    <BoxContainer>
        <BoxFotos>
            {fotos.map((i) => (
                <div key={i.id}>{i.foto}</div>
            ))}
        </BoxFotos>
        <BoxTitle>
            <NewCollection>Новая коллекция</NewCollection>
            <Line />
            <WatchProducts>Смотреть Новинки</WatchProducts>
        </BoxTitle>
    </BoxContainer>
);

export default HeaderBox;
