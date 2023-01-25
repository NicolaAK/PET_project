import React, { useState } from 'react';
import { DropDownHeader, DropDownList, ListItem, DropDownContainer } from './styled';

interface IArrow {
    value: string;
    label: string;
}
interface IProps {
    options: IArrow[];
}

const Dropdown = ({ options }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0].label);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: any) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>{selectedOption}</DropDownHeader>
            {isOpen && (
                <DropDownList>
                    {options.map((option: { value: string; label: string }) => (
                        <ListItem onClick={onOptionClicked(option.value)} key={option.value}>
                            {option.label}
                        </ListItem>
                    ))}
                </DropDownList>
            )}
        </DropDownContainer>
    );
};

export default Dropdown;
