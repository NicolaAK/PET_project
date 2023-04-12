import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';
import { getProductTotalCount } from '@store/product/selectors';
import { fetchProductList } from '@store/product';
import { getPagesArray } from '@components/ReusedComponents/Pagination/utils';
import ArrowLeft from '@assets/icons/arrowLeftSlider.svg';
import ArrowRight from '@assets/icons/arrowRightSlider.svg';
import { NotActivePage, ActivePage, Container, PrevPage, NextPage } from './style';

const Pagination = () => {
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [quantityPages, setQuantityPages] = useState(1);
    const xTotalCount = useSelector(getProductTotalCount);
    const pagesArray = getPagesArray(quantityPages);
    let lastPage = 0;
    const displayRange = 1;

    useEffect(() => {
        dispatch(fetchProductList(currentPage));
    }, [currentPage]);

    useEffect(() => {
        setQuantityPages(xTotalCount / 18);
    }, [xTotalCount]);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const changePage = (newPageNumber: number) => {
        scrollToTop();
        setCurrentPage(newPageNumber);
    };
    const changePrevPage = (newPageNumber: number) => {
        scrollToTop();
        setCurrentPage(newPageNumber - 1);
    };
    const changeNextPage = (newPageNumber: number) => {
        scrollToTop();
        setCurrentPage(newPageNumber + 1);
    };

    return (
        <Container>
            {currentPage !== 1 && (
                <PrevPage onClick={() => changePrevPage(currentPage)}>
                    <ArrowLeft />
                </PrevPage>
            )}
            {pagesArray.map((page) => {
                if (
                    page === 1 ||
                    page === currentPage - displayRange ||
                    (page > currentPage - displayRange && page < currentPage + displayRange) ||
                    page === currentPage + displayRange ||
                    page === quantityPages
                ) {
                    return currentPage === page ? (
                        <ActivePage key={page}>{page}</ActivePage>
                    ) : (
                        <NotActivePage onClick={() => changePage(page)} key={page}>
                            {page}
                        </NotActivePage>
                    );
                } else if (page > lastPage + 1) {
                    lastPage = page;
                    return '...';
                } else {
                    lastPage = page;
                    return null;
                }
            })}
            {currentPage !== quantityPages && (
                <NextPage onClick={() => changeNextPage(currentPage)}>
                    <ArrowRight />
                </NextPage>
            )}
        </Container>
    );
};

export default Pagination;
