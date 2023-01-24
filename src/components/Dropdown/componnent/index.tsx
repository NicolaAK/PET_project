import React from 'react';
import { SelectContainer, Option } from './styled';
type IOption = {
    value: string;
    label: string;
};

type IProps = {
    options: IOption[];
    value: string;
    onChange: (value: string) => void;
};
const Select = ({ options, value, onChange }: IProps) => {
    function handleOnChange(e: React.FormEvent<HTMLSelectElement>) {
        const { selectedIndex } = e.currentTarget;
        const selectedOption = options[selectedIndex];
        onChange(selectedOption.value);
    }
    return (
        <SelectContainer value={value} onChange={(option) => handleOnChange(option)}>
            {options.map((option) => (
                <Option key={option.value} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </SelectContainer>
    );
};

export default Select;
