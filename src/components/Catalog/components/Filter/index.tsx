import React, { useState } from 'react';
import DropdownFilter from '@components/Catalog/components/DropdownFilter';
import { FilterContainer } from './style';
const sizeArr = [
    { value: 'L', label: 'L' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
];
const colorArr = [
    { value: 'white', label: 'Белый' },
    { value: 'blue', label: 'Синий' },
    { value: 'yellow', label: 'Желтый' },
];
const priceArr = [
    { value: 'expensive', label: 'Дороже' },
    { value: 'cheap', label: 'Дешевле' },
];
const sortArr = [
    { value: 'popularity', label: 'Популярности' },
    { value: 'estimation', label: 'Оценке' },
    { value: 'discount', label: 'Скидке' },
];
const Filter = () => {
    const [size, setSize] = useState(sizeArr[0].value);
    const [color, setColor] = useState(colorArr[0].value);
    const [price, setPrice] = useState(priceArr[0].value);
    const [sort, setSort] = useState(sortArr[0].value);
    // console.log(size);
    // console.log(color);
    // console.log(price);
    // console.log(sort);
    return (
        <FilterContainer>
            <DropdownFilter width={79} value={size} onChange={setSize} options={sizeArr} placeholder="Размер" />
            <DropdownFilter width={60} value={color} onChange={setColor} options={colorArr} placeholder="Цвет" />
            <DropdownFilter width={62} value={price} onChange={setPrice} options={priceArr} placeholder="Цена" />
            <DropdownFilter
                width={145}
                value={sort}
                onChange={setSort}
                options={sortArr}
                placeholder="Сортировать по"
            />
        </FilterContainer>
    );
};

export default Filter;
