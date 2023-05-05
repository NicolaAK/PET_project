import React, { FC } from 'react';
import Product from '@components/Catalog/components/Products/Product';
import { useSelector } from 'react-redux';
import { getProductIsLoading, getProductList } from '@store/product/selectors';
import { Skeleton } from '@components/ReusedComponents/Skeleton/style';
import Pagination from '@components/ReusedComponents/Pagination';
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

interface IProducts {
    currentPage: number;
    onPageEdit: (value: number) => void;
}

const Products: FC<IProducts> = ({ currentPage, onPageEdit }) => {
    const products = useSelector(getProductList);
    const isLoading = useSelector(getProductIsLoading);
    console.log(products);
    return (
        <ProductsContainer>
            <Content>
                {isLoading ? (
                    <ContainerSkeleton>{componentSkeleton}</ContainerSkeleton>
                ) : (
                    <>
                        {products.map((product) => (
                            <Product heightImage={360} key={product.id} product={product} widthImage={310} />
                        ))}
                    </>
                )}
            </Content>
            <Pagination currentPage={currentPage} onPageEdit={onPageEdit} />
        </ProductsContainer>
    );
};

export default Products;
