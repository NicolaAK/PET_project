import React, { useState } from 'react';
import { colorsSchema, currency, labelSymbol } from '@components/Catalog/components/Products/Product';
import Select from '@components/ReusedComponents/InputSelect';
import { Button } from '@components/ReusedComponents/Button';
import ArrowR from '@assets/icons/arrowR.svg';
import {
    ArrowContainer,
    Colors,
    DescriptionContainer,
    Details,
    EllipseColor,
    GridButton1,
    GridButton2,
    GridContainer,
    GridSelect,
    Item,
    Line,
    Name,
    Price,
    Description,
    StructureContainer,
    Text,
    Title,
    OpenListDescription,
    OpenListStructure,
} from './style';

interface IProduct {
    name: string;
    prices: { ru: number; ua: number };
    sizes: string[];
    colors: string[];
    description: string[];
    structure: string[];
}
const ProductDescription = ({ description, colors, prices, sizes, name, structure }: IProduct) => {
    const [selectColor, setSelectColor] = useState<string>();
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const [isOpenStructure, setIsOpenStructure] = useState(false);

    const [isActiveFavouritesButton, setIsActiveFavouritesButton] = useState(false);

    const toggleActiveFavouritesButton = () => setIsActiveFavouritesButton(!isActiveFavouritesButton);
    const toggleOpenDetails = () => setIsOpenDetails(!isOpenDetails);
    const toggleOpenStructure = () => setIsOpenStructure(!isOpenStructure);

    return (
        <Description>
            <Name>{name}</Name>
            <Price>
                {prices[currency]} {labelSymbol[currency]}
            </Price>
            <Colors>
                {colors?.map((color) => (
                    <EllipseColor
                        key={color}
                        color={colorsSchema[color]}
                        isSelectColor={selectColor === color}
                        onClick={() => setSelectColor(color)}
                    />
                ))}
            </Colors>
            <GridContainer>
                <GridSelect>
                    <Select options={sizes} />
                </GridSelect>
                <GridButton1>
                    <Button>В КОРЗИНУ</Button>
                </GridButton1>
                <GridButton2>
                    <Button value={isActiveFavouritesButton} onChange={toggleActiveFavouritesButton} color="favourites">
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
                    <OpenListDescription isOpenDetails={isOpenDetails}>
                        {description.map((text) => (
                            <Text key={text.length}>{text}</Text>
                        ))}
                    </OpenListDescription>
                    <Line />
                </DescriptionContainer>
                <StructureContainer onClick={toggleOpenStructure}>
                    <Title>
                        Состав и уход
                        <ArrowContainer isOpenStructure={isOpenStructure}>
                            <ArrowR />
                        </ArrowContainer>
                    </Title>
                    <OpenListStructure isOpenStructure={isOpenStructure}>
                        {structure.map((text) => (
                            <Text key={text.length}>{text}</Text>
                        ))}
                    </OpenListStructure>
                    <Line />
                </StructureContainer>
            </Details>
        </Description>
    );
};

export default ProductDescription;
