import React, { useEffect, useState } from 'react';
import Menu from '@components/Catalog/components/Menu';
import Filter from '@components/Catalog/components/Filter';
import Products from '@components/Catalog/components/Products';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import { fetchProductList } from '@store/product';
import { useAppDispatch } from '@store';
import { useParams } from 'react-router-dom';
import { CatalogContent, CatalogContainer, Container, Heading, Text } from './style';

const Catalog = () => {
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const { idCategory } = useParams();

    useEffect(() => {
        dispatch(fetchProductList({ page: currentPage, idCategory: idCategory ? Number(idCategory) : undefined }));
    }, [currentPage, dispatch, idCategory]);

    return (
        <CatalogContainer>
            <CatalogContent>
                <Breadcrumbs />
                <Container>
                    <Heading>
                        <Text>Каталог</Text>
                    </Heading>
                    <Menu />
                    <Filter />
                    <Products currentPage={currentPage} onPageEdit={setCurrentPage} />
                </Container>
            </CatalogContent>
        </CatalogContainer>
    );
};
export default Catalog;
