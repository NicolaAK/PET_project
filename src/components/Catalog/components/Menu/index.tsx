import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCategoryList, getCategoryIsLoading } from '@store/category/selectors';
import { useAppDispatch } from '@store';
import { fetchCategoryList } from '@store/category';
import { Skeleton } from '@components/ReusedComponents/Skeleton/style';
import { generateRoute } from '@utils/helpers';
import { MenuContainer, CategoryContainer, MenuContent, Text, ContainerSkeleton } from './style';
import { ROUTES } from '../../../../routes/constants';

const skeletonArr = new Array(6).fill(null);
const componentSkeleton = skeletonArr.map((item) => <Skeleton height={19} width={150} key={item + Math.random()} />);

const Menu = () => {
    const dispatch = useAppDispatch();
    const categoryList = useSelector(getCategoryList);
    const isLoading = useSelector(getCategoryIsLoading);

    useEffect(() => {
        dispatch(fetchCategoryList());
    }, [dispatch]);
    console.log(categoryList);
    return (
        <MenuContainer>
            <MenuContent>
                {isLoading ? (
                    <ContainerSkeleton>{componentSkeleton}</ContainerSkeleton>
                ) : (
                    <CategoryContainer>
                        {categoryList.map((category) => (
                            <Text
                                to={generateRoute(`${ROUTES.CATALOG}/${category.id}`)}
                                key={category.name}
                                activeClassName="active"
                            >
                                {category.name}
                            </Text>
                        ))}
                    </CategoryContainer>
                )}
            </MenuContent>
        </MenuContainer>
    );
};

export default Menu;
