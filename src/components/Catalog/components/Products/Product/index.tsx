import React from 'react';
import Heart from '@assets/icons/heart.svg';
import {
    NameProduct,
    Colors,
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
    White,
    Blue,
    Yellow,
    New,
    Red,
    Green,
    Black,
} from './styled';

interface IProduct {
    name: string;
    isNew?: boolean;
    prices: { ru: number; ua: number };
    sizes?: string[];
    colors?: string[];
    image: string;
}
const Product = ({ image, isNew, name, sizes, colors, prices }: IProduct) => {
    const currency = 'ru';
    const labelSymbol = {
        ru: 'руб',
        ua: 'грн',
    };
    return (
        <Container>
            <Content>
                <Favourites>
                    <Icon>
                        <Heart />
                    </Icon>
                </Favourites>
                <Photo>
                    <Image src={image} alt="photoModel" />
                </Photo>
                <Description>
                    <NameProduct>{name}</NameProduct>
                    {isNew && <New>new</New>}
                    <Price>
                        {prices[currency]} {labelSymbol[currency]}
                    </Price>
                    <Sizes>
                        {sizes?.map((size) => (
                            <Size>{size}</Size>
                        ))}
                    </Sizes>
                    <Colors>
                        {colors?.map((color) => {
                            switch (color) {
                                case 'white':
                                    return <White />;
                                case 'blue':
                                    return <Blue />;
                                case 'yellow':
                                    return <Yellow />;
                                case 'green':
                                    return <Green />;
                                case 'red':
                                    return <Red />;
                                case 'black':
                                    return <Black />;
                                default:
                                    return <White />;
                            }
                        })}
                    </Colors>
                </Description>
            </Content>
        </Container>
    );
};

export default Product;
