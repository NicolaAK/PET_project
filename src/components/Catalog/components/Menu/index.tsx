import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCategoryList, getCategoryIsLoading } from '@store/category/selectors';
import { useAppDispatch } from '@store';
import { fetchCategoryList } from '@store/category';
import { Skeleton } from '@components/ReusedComponents/Skeleton/style';
import { generateRoute } from '@utils/helpers';
import { useMediaHook } from '@theme/breakpoints';
import ArrowR from '@assets/icons/arrowR.svg';
import {
    MenuContainer,
    CategoryContainer,
    MenuContent,
    Text,
    ContainerSkeleton,
    ContainerMobile,
    CatalogMobile,
    Title,
    ArrowContainer,
    MobileText,
    OpenCategoryList,
    Line,
    MobileCategoryList,
} from './style';
import { ROUTES } from '../../../../routes/constants';

const skeletonArr = new Array(6).fill(null);
const componentSkeleton = skeletonArr.map((item) => <Skeleton height={19} width={150} key={item + Math.random()} />);

const Menu = () => {
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const dispatch = useAppDispatch();
    const categoryList = useSelector(getCategoryList);
    const isLoading = useSelector(getCategoryIsLoading);
    const { isSm } = useMediaHook();
    const toggleOpenDetails = () => setIsOpenDetails(!isOpenDetails);

    useEffect(() => {
        dispatch(fetchCategoryList());
    }, [dispatch]);

    return (
        <MenuContainer>
            <MenuContent>
                {isLoading ? (
                    <ContainerSkeleton>{componentSkeleton}</ContainerSkeleton>
                ) : (
                    <>
                        {!isSm ? (
                            <CategoryContainer>
                                {categoryList.map((category) => (
                                    <Text
                                        to={generateRoute(`${ROUTES.CATALOG}/${category.id}`)}
                                        key={category.name}
                                        activeclassname="active"
                                    >
                                        {category.name}
                                    </Text>
                                ))}
                            </CategoryContainer>
                        ) : (
                            <CatalogMobile onClick={toggleOpenDetails}>
                                <ContainerMobile>
                                    <Title>Каталог</Title>
                                    <ArrowContainer isOpenDetails={isOpenDetails}>
                                        <ArrowR />
                                    </ArrowContainer>
                                </ContainerMobile>
                                <OpenCategoryList isOpenDetails={isOpenDetails}>
                                    {categoryList.map((category) => (
                                        <MobileCategoryList key={category.name}>
                                            <MobileText to={generateRoute(`${ROUTES.CATALOG}/${category.id}`)}>
                                                {category.name}
                                            </MobileText>
                                            <Line />
                                        </MobileCategoryList>
                                    ))}
                                </OpenCategoryList>
                            </CatalogMobile>
                        )}
                    </>
                )}
            </MenuContent>
        </MenuContainer>
    );
};

export default Menu;
