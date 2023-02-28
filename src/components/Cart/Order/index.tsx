import React from 'react';
import Photo1 from '@assets/foto/mainModel1.png';
import { colorsSchema, currency, labelSymbol } from '@components/Catalog/components/Products/Product';
import { EllipseColor } from '@components/ProductCatalog/Description/style';
import InputSelect from '@components/ReusedComponents/InputSelect';
import DeleteIcon from '@assets/icons/delete.svg';
import { generateGithubPagesRoutes } from '@utils/helpers';
import {
    Container,
    ContainerShoppingList,
    YourOrder,
    ShoppingList,
    GroupOne,
    Image,
    Photo,
    Article,
    Name,
    Title,
    Color,
    ColorLine,
    Select,
    Counter,
    GroupTwo,
    Price,
    Icon,
    Line,
    Money,
    Total,
    Text,
} from './style';
import { ROUTES } from '../../../routes/constants';

const products = [
    {
        id: 1,
        name: 'Белая куртка',
        article: 'арт. 1589956',
        prices: { ru: 2350, ua: 12.2 },
        sizes: [
            {
                value: 1,
                label: 'XXS',
            },
            {
                value: 2,
                label: 'XS',
            },
            {
                value: 3,
                label: 'S',
            },
            {
                value: 4,
                label: 'M',
            },
            {
                value: 5,
                label: 'L',
            },
        ],
        color: 'blue',
        images: [Photo1],
    },
    {
        id: 2,
        name: 'Белая куртка',
        article: 'арт. 1589958',
        prices: { ru: 5000, ua: 12.2 },
        sizes: [
            {
                value: 1,
                label: 'XXS',
            },
            {
                value: 2,
                label: 'XS',
            },
            {
                value: 3,
                label: 'S',
            },
            {
                value: 4,
                label: 'M',
            },
            {
                value: 5,
                label: 'L',
            },
        ],
        color: 'yellow',
        images: Photo1,
    },
    {
        id: 3,
        name: 'Белая куртка',
        article: 'арт. 1589958',
        prices: { ru: 2000, ua: 12.2 },
        sizes: [
            {
                value: 1,
                label: 'XXS',
            },
            {
                value: 2,
                label: 'XS',
            },
            {
                value: 3,
                label: 'S',
            },
            {
                value: 4,
                label: 'M',
            },
            {
                value: 5,
                label: 'L',
            },
        ],
        color: 'white',
        images: Photo1,
    },
];
const Order = () => {
    const sumAll = products.reduce((sum, current) => sum + current.prices[currency], 0);
    return (
        <Container>
            <YourOrder>Ваш заказ</YourOrder>
            {products.map((product) => {
                const Link = `${generateGithubPagesRoutes(ROUTES.CATALOG)}/${product.id}`;
                return (
                    <ContainerShoppingList key={product.id}>
                        <ShoppingList>
                            <GroupOne>
                                <Image to={Link}>
                                    <Photo src={product.images} alt="photoModel" />
                                </Image>
                                <Title>
                                    <Article>{product.article}</Article>
                                    <Name to={Link}>{product.name}</Name>
                                </Title>
                            </GroupOne>
                            <Color>
                                <ColorLine>
                                    <EllipseColor radius={24} color={colorsSchema[product.color]} />
                                </ColorLine>
                            </Color>
                            <Select>
                                <InputSelect width={98} options={product.sizes} placeholder={product.sizes[0].label} />
                            </Select>
                            <Counter>counter</Counter>
                            <GroupTwo>
                                <Price>
                                    {product.prices[currency]} {labelSymbol[currency]}
                                </Price>
                                <Icon>
                                    <DeleteIcon />
                                </Icon>
                            </GroupTwo>
                        </ShoppingList>
                        <Line />
                    </ContainerShoppingList>
                );
            })}
            <Total>
                <Text>К оплате:</Text>
                <Money>
                    {sumAll} {labelSymbol[currency]}
                </Money>
            </Total>
        </Container>
    );
};
export default Order;
