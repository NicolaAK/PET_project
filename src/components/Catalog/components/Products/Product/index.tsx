import React, { useState } from 'react';
import Heart from '@assets/icons/heart.svg';
import { useNavigate } from 'react-router-dom';
import WhiteFavouritesButtonActive from '@assets/icons/favouritesButtonActiveWhite.svg';
import { IProduct } from '@store/product/types';
import { generateRoute } from '@utils/helpers';
import {
    NameProduct,
    Content,
    Sizes,
    Size,
    Price,
    Photo,
    Favourites,
    Description,
    Container,
    Image,
    Icon,
    New,
} from './style';
import { ROUTES } from '../../../../../routes/constants';

interface IProps {
    product: IProduct;
    heightImage: number;
    widthImage: number;
}

export const currency = 'ru';
export const labelSymbol = {
    ru: 'руб',
    // ua: 'грн',
};
const Product = ({ product, heightImage, widthImage }: IProps) => {
    const navigate = useNavigate();
    const navId = () => navigate(generateRoute(`${ROUTES.CATALOG}/${product.idCategory}/${product.id}`));

    const [isActiveFavouritesButton, setIsActiveFavouritesButton] = useState(false);
    const toggleActiveFavouritesButton = () => setIsActiveFavouritesButton(!isActiveFavouritesButton);

    return (
        <Container>
            <Content>
                <Favourites>
                    <Icon onClick={toggleActiveFavouritesButton}>
                        {isActiveFavouritesButton ? <WhiteFavouritesButtonActive /> : <Heart />}
                    </Icon>
                </Favourites>
                <Photo heightImage={heightImage}>
                    <Image widthImage={widthImage} src={product.photo} alt="photoModel" onClick={navId} />
                </Photo>
                <Description>
                    <NameProduct onClick={navId}>{product.name}</NameProduct>
                    {product.isNew && <New>new</New>}
                    <Price>
                        {product.price} {labelSymbol[currency]}
                    </Price>
                    <Sizes>
                        {product.sizes?.map((size) => (
                            <Size key={size}>{size}</Size>
                        ))}
                    </Sizes>
                </Description>
            </Content>
        </Container>
    );
};

export default Product;
