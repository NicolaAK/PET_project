import React, { useState } from 'react';
import Photo1 from '@assets/foto/mainModel1.png';
import Photo2 from '@assets/foto/mainModel2.png';
import Photo3 from '@assets/foto/mainModel3.png';
import { LinkMain, Navigation } from '@components/Catalog/styled';
import ArrowR from '@assets/icons/arrowR.svg';
import Heart from '@assets/icons/heartOrange.svg';
import theme from '@theme/index';
import Select from '@components/ReusedComponents/InputSelect';
import { Button } from '@components/ReusedComponents/Button';
import {
    Content,
    Container,
    ImageOther,
    ImageSmall,
    ImageBig,
    ImageMain,
    ImageOtherContainer,
    Name,
    ProductDescription,
    Price,
    Colors,
    EllipseColor,
} from './style';
import { generateGithubPagesRoutes } from '../../routes';

const product = {
    id: 1,
    category: 'Пальто',
    name: 'Белая куртка',
    isNew: true,
    prices: { ru: 2000, ua: 12.2 },
    sizes: ['XXS', 'XS', 'S', 'M', 'L'],
    colors: ['white', 'blue', 'yellow', 'black', 'red', 'green'],
    images: [Photo1, Photo2, Photo3, Photo3, Photo1],
};
const ProductCatalog = () => {
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
    const [mainImage, setMainImage] = useState(product.images[0]);
    const [isSelectColor, setIsSelectColor] = useState(false);
    const changeColor = () => setIsSelectColor(!isSelectColor);
    return (
        <Container>
            <Navigation>
                <LinkMain to={generateGithubPagesRoutes('')}>Главная</LinkMain>
                <ArrowR />
                Каталог
                <ArrowR />
                {product.category}
                <ArrowR />
                {product.name}
            </Navigation>
            <Content>
                <ImageOther>
                    {product.images.map((image) => (
                        <ImageOtherContainer>
                            <ImageSmall key={Math.random()} src={image} onClick={() => setMainImage(image)} />
                        </ImageOtherContainer>
                    ))}
                </ImageOther>
                <ImageMain>
                    <ImageBig src={mainImage} />
                </ImageMain>
                <ProductDescription>
                    <Name>{product.name}</Name>
                    <Price>
                        {product.prices[currency]} {labelSymbol[currency]}
                    </Price>
                    <Colors>
                        {product.colors?.map((color) => (
                            <EllipseColor
                                key={color}
                                color={colorsSchema[color]}
                                isSelectColor={isSelectColor}
                                onClick={changeColor}
                            />
                        ))}
                    </Colors>
                    <Select options={product.sizes} />
                    <Button width={255}>В КОРЗИНУ</Button>
                    <Button width={255} icon={<Heart />} color="favourites">
                        В ИЗБРАННОЕ
                    </Button>
                </ProductDescription>
            </Content>
        </Container>
    );
};

export default ProductCatalog;
