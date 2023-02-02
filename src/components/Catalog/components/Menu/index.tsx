import React from 'react';
import { MenuContainer, CategoryContainer, MenuContent, CategoryBtn, Text } from './style';

const categoriesArr = [
    { category: 'New' },
    { category: 'Bestsellers' },
    { category: 'Верхняя одежда' },
    { category: 'Шубы' },
    { category: 'Тренчи' },
    { category: 'Пальто' },
    { category: 'Пуховики и жилеты' },
    { category: 'Костюмы' },
    { category: 'Жакеты' },
    { category: 'Платья' },
    { category: 'Рубашки и блузы' },
    { category: 'Юбки' },
    { category: 'Футболки и топы' },
    { category: 'Аксессуары' },
    { category: 'Sale' },
    { category: 'Summer' },
];
const Menu = () => (
    <MenuContainer>
        <MenuContent>
            <CategoryContainer>
                {categoriesArr.map((categor) => (
                    <CategoryBtn key={categor.category}>
                        <Text>{categor.category}</Text>
                    </CategoryBtn>
                ))}
            </CategoryContainer>
        </MenuContent>
    </MenuContainer>
);

export default Menu;
