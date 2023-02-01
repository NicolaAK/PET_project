import React from 'react';
import { MenuContainer, CategoryContainer, MenuContent, CategoryBtn, Text, Heading } from './style';

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
    { category: 'Пальто' },
    { category: 'Пальто' },
];
const Menu = () => (
    <MenuContainer>
        <MenuContent>
            <Heading>Каталог</Heading>
            <CategoryContainer>
                {categoriesArr.map((categor) => (
                    <CategoryBtn>
                        <Text>{categor.category}</Text>
                    </CategoryBtn>
                ))}
            </CategoryContainer>
        </MenuContent>
    </MenuContainer>
);

export default Menu;
