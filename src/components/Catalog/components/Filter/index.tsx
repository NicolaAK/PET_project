import React, { FC, useState } from 'react';
import DropdownFilter from '@components/Catalog/components/DropdownFilter';
import { Button } from '@components/ReusedComponents/Button';
import Checkbox from '@components/ReusedComponents/Checkbox_3_action';
import { FilterContainer, ButtonContainer } from './style';
const sizeArr = [
    { value: 'L', label: 'L', sort: 'size' },
    { value: 'S', label: 'S', sort: 'size' },
    { value: 'M', label: 'M', sort: 'size' },
];

const priceArr = [
    { value: 'desc', label: 'Дороже', sort: 'price' },
    { value: 'asc', label: 'Дешевле', sort: 'price' },
];

interface IProps {
    price?: string;
    setPrice: (value: string) => void;
    filterResetButton: () => void;
    setSortCategory: (value: string) => void;
    isChecked: boolean | undefined;
    setIsChecked: (b: undefined | boolean) => void;
}
const Filter: FC<IProps> = ({ setPrice, price, filterResetButton, setSortCategory, setIsChecked, isChecked }) => {
    const [size, setSize] = useState<string>();

    console.log(isChecked);
    return (
        <FilterContainer>
            <DropdownFilter width={79} value={size} onChange={setSize} options={sizeArr} placeholder="Размер" />
            <DropdownFilter
                width={62}
                value={price}
                onChange={setPrice}
                setSortCategory={setSortCategory}
                options={priceArr}
                placeholder="Цена"
            />
            <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
            <ButtonContainer>
                <Button onClick={filterResetButton}>Сбросить</Button>
            </ButtonContainer>
        </FilterContainer>
    );
};

export default Filter;
