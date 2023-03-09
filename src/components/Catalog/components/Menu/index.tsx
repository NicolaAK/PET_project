import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCategoryList } from '@store/category/selectors';
import { useAppDispatch } from '@store';
import { fetchCategoryList } from '@store/category';
import { MenuContainer, CategoryContainer, MenuContent, Text } from './style';

const Menu = () => {
    const dispatch = useAppDispatch();
    const categoryList = useSelector(getCategoryList);

    useEffect(() => {
        dispatch(fetchCategoryList());
    }, [dispatch]);

    return (
        <MenuContainer>
            <MenuContent>
                <CategoryContainer>
                    {categoryList.map((category) => (
                        <Text key={category.name}>{category.name}</Text>
                    ))}
                </CategoryContainer>
            </MenuContent>
        </MenuContainer>
    );
};

export default Menu;
