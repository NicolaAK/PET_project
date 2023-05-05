import React, { useEffect } from 'react';
import ProductImage from '@components/ProductCatalog/Image';
import ProductDescription from '@components/ProductCatalog/Description';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductList } from '@store/product/selectors';
import { fetchProductById } from '@store/product';
import { useAppDispatch } from '@store';
import { Content, Container } from './style';

const ProductCatalog = () => {
    const dispatch = useAppDispatch();
    const { idProduct } = useParams();
    const products = useSelector(getProductList);
    const product = products.find(
        (productPersonal) => idProduct !== undefined && Number(idProduct) === productPersonal.id,
    );
    useEffect(() => {
        dispatch(fetchProductById(Number(idProduct)));
    }, [dispatch, idProduct]);

    if (!product) {
        return (
            <Container>
                <div>Товар не найден</div>
            </Container>
        );
    }

    return (
        <Container>
            <Breadcrumbs />
            <Content>
                <ProductImage images={product.images} />
                <ProductDescription product={product} />
            </Content>
        </Container>
    );
};

export default ProductCatalog;
