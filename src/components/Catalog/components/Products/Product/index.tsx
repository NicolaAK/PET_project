import React from 'react';
import Heart from '@assets/icons/heart.svg';
import theme from '@theme/index';
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
    EllipseColor,
    New,
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
    const colorsSchema: Record<string, string> = {
        white: theme.colors.white(),
        blue: theme.colors.elipseViolet(),
        yellow: theme.colors.elipsePastel(),
        green: theme.colors.green(),
        red: theme.colors.error(),
        black: theme.colors.blackPrimary(),
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
                            <Size key={size}>{size}</Size>
                        ))}
                    </Sizes>
                    <Colors>
                        {colors?.map((color) => (
                            <EllipseColor key={color} color={colorsSchema[color]} />
                        ))}
                    </Colors>
                </Description>
            </Content>
        </Container>
    );
};

export default Product;
