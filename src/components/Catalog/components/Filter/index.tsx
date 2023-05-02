import React, { useState } from 'react';
import DropdownFilter from '@components/Catalog/components/DropdownFilter';
import { Button } from '@components/ReusedComponents/Button';
import { FilterContainer, ButtonContainer } from './style';
const sizeArr = [
    { value: 'L', label: 'L' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
];

const priceArr = [
    { value: 'expensive', label: 'Дороже' },
    { value: 'cheap', label: 'Дешевле' },
];

const Filter = () => {
    const [size, setSize] = useState<string>();
    const [price, setPrice] = useState<string>();
    return (
        <FilterContainer>
            <DropdownFilter width={79} value={size} onChange={setSize} options={sizeArr} placeholder="Размер" />
            <DropdownFilter width={62} value={price} onChange={setPrice} options={priceArr} placeholder="Цена" />
            <ButtonContainer>
                <Button>Сбросить</Button>
            </ButtonContainer>
        </FilterContainer>
    );
};

export default Filter;
