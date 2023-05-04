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
    const [price, setPrice] = useState<string>();
    const [sortCategory, setSortCategory] = useState<string>();
    const [isChecked, setIsChecked] = useState<boolean>();
    const { idCategory } = useParams();

    const filterResetButton = () => {
        setPrice(undefined);
        setSortCategory(undefined);
        setIsChecked(undefined);
    };

    useEffect(() => {
        dispatch(
            fetchProductList({
                page: currentPage,
                idCategory: idCategory ? Number(idCategory) : undefined,
                sort: sortCategory,
                order: price,
                isNew: isChecked,
            }),
        );
    }, [currentPage, dispatch, idCategory, price, sortCategory, isChecked]);

    return (
        <CatalogContainer>
            <CatalogContent>
                <Breadcrumbs />
                <Container>
                    <Heading>
                        <Text>Каталог</Text>
                    </Heading>
                    <Menu />
                    <Filter
                        price={price}
                        setPrice={setPrice}
                        filterResetButton={filterResetButton}
                        setSortCategory={setSortCategory}
                        isChecked={isChecked}
                        setIsChecked={setIsChecked}
                    />
                    <Products currentPage={currentPage} onPageEdit={setCurrentPage} />
                </Container>
            </CatalogContent>
        </CatalogContainer>
    );
};
export default Catalog;
