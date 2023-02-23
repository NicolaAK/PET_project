import React, { useState } from 'react';
import Photo1 from '@assets/foto/mainModel1.png';
import Photo2 from '@assets/foto/mainModel2.png';
import Photo3 from '@assets/foto/mainModel3.png';
import { LinkMain, Navigation } from '@components/Catalog/styled';
import ArrowR from '@assets/icons/arrowR.svg';
import Select from '@components/ReusedComponents/InputSelect';
import { Button } from '@components/ReusedComponents/Button';
import { colorsSchema, currency, labelSymbol } from '@components/Catalog/components/Products/Product';
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
    GridContainer,
    GridButton2,
    GridButton1,
    GridSelect,
    Details,
    Title,
    Item,
    ArrowContainer,
    DescriptionContainer,
    Line,
    Text,
    StructureContainer,
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
    description: [
        'Классическое пальто итальянского бренда Heresis',
        'Оригинальная модель в шерсти аналогичного класса стоит 135 000 руб',
        'Классическое пальто итальянского бренда Heresis',
    ],
    structure: [
        'Состав: 50% Шерсть, 50% Полиэстер',
        'Подкладка: 100% Полиэстер',
        'Утеплитель: 90% Пух, 10% Перо',
        '',
        '- Не стирать',
        '- Гладить при температуре утюга до 110°C',
        '- Не отбеливать',
        '- Сухая чистка (химчистка)',
        '- Барабанная сушка запрещена',
    ],
};
const ProductCatalog = () => {
    const [mainImage, setMainImage] = useState(product.images[0]);
    const [isSelectColor, setIsSelectColor] = useState(false);
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const [isOpenStructure, setIsOpenStructure] = useState(false);
    const changeColor = () => setIsSelectColor(!isSelectColor);

    const [isActiveFavouritesButton, setIsActiveFavouritesButton] = useState(false);
    const toggleActiveFavouritesButton = () => setIsActiveFavouritesButton(!isActiveFavouritesButton);
    const toggleOpenDetails = () => setIsOpenDetails(!isOpenDetails);
    const toggleOpenStructure = () => setIsOpenStructure(!isOpenStructure);

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
                    <GridContainer>
                        <GridSelect>
                            <Select options={product.sizes} />
                        </GridSelect>
                        <GridButton1>
                            <Button>В КОРЗИНУ</Button>
                        </GridButton1>
                        <GridButton2>
                            <Button
                                value={isActiveFavouritesButton}
                                onChange={toggleActiveFavouritesButton}
                                color="favourites"
                            >
                                В ИЗБРАННОЕ
                            </Button>
                        </GridButton2>
                    </GridContainer>
                    <Details>
                        <Item>Подробности</Item>
                        <DescriptionContainer onClick={toggleOpenDetails}>
                            <Title>
                                Обмеры и описание
                                <ArrowContainer isOpenDetails={isOpenDetails}>
                                    <ArrowR />
                                </ArrowContainer>
                            </Title>
                            {isOpenDetails && product.description.map((text) => <Text>{text}</Text>)}
                            <Line />
                        </DescriptionContainer>
                        <StructureContainer onClick={toggleOpenStructure}>
                            <Title>
                                Состав и уход
                                <ArrowContainer isOpenStructure={isOpenStructure}>
                                    <ArrowR />
                                </ArrowContainer>
                            </Title>
                            {isOpenStructure && product.structure.map((text) => <Text>{text}</Text>)}
                            <Line />
                        </StructureContainer>
                    </Details>
                </ProductDescription>
            </Content>
        </Container>
    );
};

export default ProductCatalog;
