import React, { useState } from 'react';
import Arrow from '@assets/icons/arrowBotton.svg';
import { DropDownHeader, DropDownList, ListItem, DropDownContainer, ArrowContainer } from './styled';

interface IArrow {
    value: string;
    label: string;
}
export interface IProps {
    options: IArrow[];
    width?: number;
}

const Dropdown = ({ options, width }: IProps) => {
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
            <DropDownHeader onClick={toggling}>
                {selectedOption}
                {isOpen ? (
                    <ArrowContainer>
                        <Arrow />
                    </ArrowContainer>
                ) : (
                    <Arrow />
                )}
            </DropDownHeader>
            {isOpen && (
                <DropDownList>
                    {options.map((option) =>
                        selectedOption === option.label ? (
                            ''
                        ) : (
                            <ListItem
                                width={width}
                                onClick={onOptionClicked(option.value)}
                                key={option.value}
                                options={options}
                            >
                                {option.label}
                            </ListItem>
                        ),
                    )}
                </DropDownList>
            )}
        </DropDownContainer>
    );
};

export default Dropdown;
