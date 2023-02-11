import React from 'react';
import ModelFoto1 from '@assets/foto/catalog/Model_1.png';
import Heart from '@assets/icons/heart.svg';
import {
    NameProduct,
    Colors,
    Content,
    Size,
    Price,
    Photo,
    Favourites,
    Description,
    Container,
    Image,
    Icon,
} from './styled';
const Product = () => (
    <Container>
        <Content>
            <Photo>
                <Image src={ModelFoto1} alt="photoModel" />
                <Favourites>
                    <Icon>
                        <Heart />
                    </Icon>
                </Favourites>
            </Photo>
            <Description>
                <NameProduct>Белая куртка</NameProduct>
                <Price>2900 грн</Price>
                <Size>XXS XS S M L</Size>
                <Colors>белый</Colors>
            </Description>
        </Content>
    </Container>
);

export default Product;
