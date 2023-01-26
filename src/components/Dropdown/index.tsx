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
    value?: string;
    onChange?: (arg0: string) => void;
}

const Dropdown = ({ options, width, value, onChange }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (e: any) => () => {
        if (onChange) {
            onChange(e);
        }
        setIsOpen(false);
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
                {value}
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
                        value === option.label ? (
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
