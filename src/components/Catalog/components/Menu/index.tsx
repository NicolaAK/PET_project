import React from 'react';
import { MenuContainer, CategoryContainer, MenuContent, Text } from './style';

const categoriesArr = [
    { name: 'New' },
    { name: 'Bestsellers' },
    { name: 'Верхняя одежда' },
    { name: 'Шубы' },
    { name: 'Тренчи' },
    { name: 'Пальто' },
    { name: 'Пуховики и жилеты' },
    { name: 'Костюмы' },
    { name: 'Жакеты' },
    { name: 'Платья' },
    { name: 'Рубашки и блузы' },
    { name: 'Юбки' },
    { name: 'Футболки и топы' },
    { name: 'Аксессуары' },
    { name: 'Sale' },
    { name: 'Summer' },
];
const Menu = () => (
    <MenuContainer>
        <MenuContent>
            <CategoryContainer>
                {categoriesArr.map((categor) => (
                    <Text key={categor.name}>{categor.name}</Text>
                ))}
            </CategoryContainer>
        </MenuContent>
    </MenuContainer>
);

export default Menu;
