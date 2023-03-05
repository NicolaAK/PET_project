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
import DeleteIcon from '@assets/icons/delete.svg';
import RHFSelect from '@components/RHF/RHFSelect';
import { ROUTES } from '../../../routes/constants';

interface Props {
    product: any;
    remove: any;
    index: number;
}

const Product: FC<Props> = ({ product, remove, index }) => {
    const Link = `${generateGithubPagesRoutes(ROUTES.CATALOG)}/${product.id}`;
    const toggleDeleteProduct = () => remove(index);
    //
    // const handleCountChange = (countValue: number) => {
    //     onCountChange(product.id, countValue);
    // };
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
                    <RHFSelect
                        name="products"
                        width={98}
                        options={product.sizes}
                        placeholder={product.sizes[0].label}
                    />
                </Select>
                <Counter>{/* <TotalCount value={product.countProduct} /> */}</Counter>
                <GroupTwo>
                    <Price>
                        {product.prices[currency]} {labelSymbol[currency]}
                    </Price>
                    <Icon onClick={toggleDeleteProduct}>
                        <DeleteIcon />
                    </Icon>
                </GroupTwo>
            </ShoppingList>
            <Line />
        </ContainerShoppingList>
    );
};

export default Product;
