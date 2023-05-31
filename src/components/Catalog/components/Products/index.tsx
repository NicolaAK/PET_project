import React from 'react';
import Product from '@components/Catalog/components/Products/Product';
import { useSelector } from 'react-redux';
import { getProductIsLoading, getProductList } from '@store/product/selectors';
import { Skeleton } from '@components/ReusedComponents/Skeleton/style';
import { useMediaHook } from '@theme/breakpoints';
import { ProductsContainer, ContainerSkeleton, ContentSkeleton, Content } from './style';

const skeletonArr = new Array(18).fill(null);
const componentSkeleton = skeletonArr.map((item) => (
    <ContentSkeleton key={item + Math.random()}>
        <Skeleton height={360} width={310} />
        <Skeleton height={19} width={150} />
        <Skeleton height={19} width={120} />
        <Skeleton height={19} width={100} />
    </ContentSkeleton>
));

const Products = () => {
    const products = useSelector(getProductList);
    const isLoading = useSelector(getProductIsLoading);
    const { isMd } = useMediaHook();
    return (
        <ProductsContainer>
            <Content>
                {isLoading ? (
                    <ContainerSkeleton>{componentSkeleton}</ContainerSkeleton>
                ) : (
                    <>
                        {products.map((product) => (
                            <Product
                                heightImage={isMd ? 230 : 360}
                                key={product.id}
                                product={product}
                                widthImage={isMd ? 165 : 310}
                            />
                        ))}
                    </>
                )}
            </Content>
        </ProductsContainer>
    );
};

export default Products;
