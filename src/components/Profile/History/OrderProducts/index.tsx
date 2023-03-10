import React, { FC } from 'react';
import { generateRoute } from '@utils/helpers';
import {
    Article,
    Color,
    ColorLine,
    ContainerShoppingList,
    Counter,
    GroupOne,
    GroupTwo,
    Image,
    Name,
    Photo,
    Price,
    Select,
    ShoppingList,
    Title,
} from '@components/Cart/Order/style';
import { EllipseColor } from '@components/ProductCatalog/Description/style';
import { colorsSchema, currency, labelSymbol } from '@components/Catalog/components/Products/Product';
import { Container } from './style';
import { ROUTES } from '../../../../routes/constants';

export interface IProduct {
    id: number;
    name: string;
    prices: { ru: number; ua: number };
    size: string;
    color: string;
    article: string;
    countProduct: number;
    images: string;
}

const OrderProducts: FC<IProduct> = ({ countProduct, article, prices, id, images, name, size, color }) => {
    const Link = `${generateRoute(ROUTES.CATALOG)}/${id}`;
    return (
        <Container>
            <ContainerShoppingList key={id}>
                <ShoppingList>
                    <GroupOne>
                        <Image to={Link}>
                            <Photo src={images} alt="photoModel" />
                        </Image>
                        <Title>
                            <Article>{article}</Article>
                            <Name to={Link}>{name}</Name>
                        </Title>
                    </GroupOne>
                    <Color>
                        <ColorLine>
                            <EllipseColor disabled radius={24} color={colorsSchema[color]} />
                        </ColorLine>
                    </Color>
                    <Select>Размер: {size}</Select>
                    <Counter>Количество: {countProduct}</Counter>
                    <GroupTwo>
                        <Price>
                            {prices[currency]} {labelSymbol[currency]}
                        </Price>
                    </GroupTwo>
                </ShoppingList>
            </ContainerShoppingList>
        </Container>
    );
};

export default OrderProducts;
