import React, { FC } from 'react';
import { generateGithubPagesRoutes } from '@utils/helpers';
import {
    Article,
    Color,
    ColorLine,
    ContainerShoppingList,
    Counter,
    GroupOne,
    GroupTwo,
    Icon,
    Image,
    Line,
    Name,
    Photo,
    Price,
    Select,
    ShoppingList,
    Title,
} from '@components/Cart/Order/style';
import { EllipseColor } from '@components/ProductCatalog/Description/style';
import { colorsSchema, currency, labelSymbol } from '@components/Catalog/components/Products/Product';
import InputSelect from '@components/ReusedComponents/InputSelect';
import TotalCount from '@components/ReusedComponents/TotalCount';
import DeleteIcon from '@assets/icons/delete.svg';
import { ROUTES } from '../../../routes/constants';

interface Props {
    product: any;
    onProduceDelete: (id: any) => void;
    onCountChange: (id: number, count: number) => void;
}

const Product: FC<Props> = ({ product, onProduceDelete, onCountChange }) => {
    const Link = `${generateGithubPagesRoutes(ROUTES.CATALOG)}/${product.id}`;

    const handleCountChange = (countValue: number) => {
        onCountChange(product.id, countValue);
    };

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
                <Counter>
                    <TotalCount value={product.countProduct} onChange={handleCountChange} />
                </Counter>
                <GroupTwo>
                    <Price>
                        {product.prices[currency]} {labelSymbol[currency]}
                    </Price>
                    <Icon onClick={() => onProduceDelete(product.id)}>
                        <DeleteIcon />
                    </Icon>
                </GroupTwo>
            </ShoppingList>
            <Line />
        </ContainerShoppingList>
    );
};

export default Product;
