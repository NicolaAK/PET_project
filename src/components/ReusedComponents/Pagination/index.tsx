import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';
import { getProductTotalCount } from '@store/product/selectors';
import { fetchProductList } from '@store/product';
import { getPagesArray } from '@components/ReusedComponents/Pagination/utils';
import { Off, On, Container, PrevPage, NextPage } from './style';

const Pagination = () => {
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [quantityPages, setQuantityPages] = useState(1);
    const xTotalCount = useSelector(getProductTotalCount);
    const displayRange = 1;
    useEffect(() => {
        dispatch(fetchProductList(currentPage));
    }, [currentPage]);
    useEffect(() => {
        setQuantityPages(xTotalCount / 18);
    }, [xTotalCount]);
    const pagesArray = getPagesArray(quantityPages);
    const changePage = (newPageNumber: number) => {
        setCurrentPage(newPageNumber);
    };
    const changePrevPage = (newPageNumber: number) => {
        setCurrentPage(newPageNumber - 1);
    };
    const changeNextPage = (newPageNumber: number) => {
        setCurrentPage(newPageNumber + 1);
    };
    return (
        <Container>
            {currentPage !== 1 && <PrevPage onClick={() => changePrevPage(currentPage)}>AA</PrevPage>}
            {pagesArray.map((page) => {
                if (
                    page === 1 ||
                    page === currentPage - displayRange ||
                    (page > currentPage - displayRange && page < currentPage + displayRange) ||
                    page === currentPage + displayRange ||
                    page === quantityPages
                ) {
                    return currentPage === page ? (
                        <On key={page}>{page}</On>
                    ) : (
                        <Off onClick={() => changePage(page)} key={page}>
                            {page}
                        </Off>
                    );
                } else {
                    return null;
                }
            })}
            {currentPage !== quantityPages && <NextPage onClick={() => changeNextPage(currentPage)}>BB</NextPage>}
        </Container>
    );
};

export default Pagination;
