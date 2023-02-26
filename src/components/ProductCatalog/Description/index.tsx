import React, { useState } from 'react';
import { currency, labelSymbol } from '@components/Catalog/components/Products/Product';
import { IOptions } from '@components/ReusedComponents/InputSelect';
import ArrowR from '@assets/icons/arrowR.svg';
import FormAddCart from '@components/ProductCatalog/FormAddCart/FormAddCart';
import {
    ArrowContainer,
    DescriptionContainer,
    Details,
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
    sizes: IOptions[];
    colors: string[];
    description: string[];
    structure: string[];
}
const ProductDescription = ({ description, colors, prices, sizes, name, structure }: IProduct) => {
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const [isOpenStructure, setIsOpenStructure] = useState(false);

    const toggleOpenDetails = () => setIsOpenDetails(!isOpenDetails);
    const toggleOpenStructure = () => setIsOpenStructure(!isOpenStructure);

    return (
        <Description>
            <Name>{name}</Name>
            <Price>
                {prices[currency]} {labelSymbol[currency]}
            </Price>
            <FormAddCart colors={colors} sizes={sizes} />
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
