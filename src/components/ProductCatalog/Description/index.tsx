import React, { FC, useState } from 'react';
import { currency, labelSymbol } from '@components/Catalog/components/Products/Product';
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
    Text,
    Title,
    OpenListDescription,
    DescriptionText,
    Article,
} from './style';

interface IProductComponents {
    name: string;
    price: number;
    sizes: string[];
    description?: string;
    compound?: string;
    lengthClothes?: string;
    lengthSleeve?: string;
    modelParameters?: string;
    sizeOnTheModel?: string;
    growthModel?: string;
    season?: string;
    article?: string;
}
interface IProduct {
    product: IProductComponents;
}
const ProductDescription: FC<IProduct> = ({ product }) => {
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const {
        compound,
        article,
        name,
        price,
        description,
        lengthSleeve,
        modelParameters,
        sizeOnTheModel,
        growthModel,
        season,
        sizes,
    } = product;
    const toggleOpenDetails = () => setIsOpenDetails(!isOpenDetails);

    return (
        <Description>
            <Name>{name}</Name>
            <Article>Артикл: {article}</Article>
            <Price>
                {price} {labelSymbol[currency]}
            </Price>
            <FormAddCart sizes={sizes} />
            <Details>
                <Item>Подробности</Item>
                <DescriptionText key={description?.length}>{description}</DescriptionText>
                <DescriptionContainer onClick={toggleOpenDetails}>
                    <Title>
                        Обмеры и описание
                        <ArrowContainer isOpenDetails={isOpenDetails}>
                            <ArrowR />
                        </ArrowContainer>
                    </Title>
                    <OpenListDescription isOpenDetails={isOpenDetails}>
                        {lengthSleeve && <Text key={lengthSleeve}>Длина рукава: {lengthSleeve}</Text>}
                        {modelParameters && <Text key={modelParameters}>Параметры модели: {modelParameters}</Text>}
                        {sizeOnTheModel && <Text key={sizeOnTheModel}>Размер модели: {sizeOnTheModel}</Text>}
                        {growthModel && <Text key={growthModel}>Рост модели: {growthModel}</Text>}
                        {compound && <Text key={compound}>{compound}</Text>}
                        {season && <Text key={season}>Сезон: {season}</Text>}
                    </OpenListDescription>
                    <Line />
                </DescriptionContainer>
            </Details>
        </Description>
    );
};

export default ProductDescription;
