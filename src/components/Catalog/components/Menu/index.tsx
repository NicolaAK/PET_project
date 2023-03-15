import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCategoryList, getIsLoading } from '@store/category/selectors';
import { useAppDispatch } from '@store';
import { fetchCategoryList } from '@store/category';
import { MenuContainer, CategoryContainer, MenuContent, Text } from './style';

const Menu = () => {
    const dispatch = useAppDispatch();
    const categoryList = useSelector(getCategoryList);
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchCategoryList());
    }, [dispatch]);

    return (
        <MenuContainer>
            <MenuContent>
                {isLoading ? (
                    <p>Loading</p>
                ) : (
                    <CategoryContainer>
                        {categoryList.map((category) => (
                            <Text key={category.name}>{category.name}</Text>
                        ))}
                    </CategoryContainer>
                )}
            </MenuContent>
        </MenuContainer>
    );
};

export default Menu;
