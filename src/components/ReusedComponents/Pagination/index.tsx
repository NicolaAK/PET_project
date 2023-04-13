import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';
import { getProductTotalCount } from '@store/product/selectors';
import { fetchProductList } from '@store/product';
import ArrowLeft from '@assets/icons/arrowLeftSlider.svg';
import ArrowRight from '@assets/icons/arrowRightSlider.svg';
import { COUNT_PRODUCT_ON_PAGE } from '@utils/constants';
import { getPagesArray } from '@components/ReusedComponents/Pagination/utils';
import { NotActivePage, ActivePage, Container, PrevPage, NextPage } from './style';

const Pagination = () => {
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [quantityPages, setQuantityPages] = useState(1);
    const xTotalCount = useSelector(getProductTotalCount);
    let lastPage = 0;
    const displayRange = 1;
    const pagesArray = getPagesArray(quantityPages);

    useEffect(() => {
        dispatch(fetchProductList(currentPage));
    }, [currentPage, dispatch]);

    useEffect(() => {
        setQuantityPages(xTotalCount / COUNT_PRODUCT_ON_PAGE);
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

    const getPaginationNumbers = (page: number) => {
        if (
            page === 1 ||
            page === currentPage - displayRange ||
            (page > currentPage - displayRange && page < currentPage + displayRange) ||
            page === currentPage + displayRange ||
            page === quantityPages
        ) {
            if (currentPage === page) {
                return <ActivePage key={page}>{page}</ActivePage>;
            }
            return (
                <NotActivePage onClick={() => changePage(page)} key={page}>
                    {page}
                </NotActivePage>
            );
        }
        if (page > lastPage + 1) {
            lastPage = page;
            return '...';
        }
        lastPage = page;
        return null;
    };

    return (
        <Container>
            {currentPage !== 1 && (
                <PrevPage onClick={() => changePrevPage(currentPage)}>
                    <ArrowLeft />
                </PrevPage>
            )}
            {pagesArray.map((page) => getPaginationNumbers(page))}
            {currentPage !== quantityPages && (
                <NextPage onClick={() => changeNextPage(currentPage)}>
                    <ArrowRight />
                </NextPage>
            )}
        </Container>
    );
};

export default Pagination;
