import React, { useState } from 'react';
import ArrowR from '@assets/icons/arrowR.svg';
import { DropDownHeader, DropDownList, ListItem, DropDownContainer, ArrowContainer, Text, Placeholder } from './style';
import useClickOutside from '../../../../HOK/ClickOutside';

interface IArrow {
    value: string;
    label: string;
}
export interface IProps {
    options: IArrow[];
    width?: number;
    onChange?: (arg0: string) => void;
    placeholder?: string;
    value?: string;
}

const Dropdown = ({ options, width, onChange, placeholder, value }: IProps) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const toggling = () => setIsOpenDropdown(!isOpenDropdown);
    const onOptionClicked = (e: any) => () => {
        if (onChange) {
            onChange(e);
        }
        setIsOpenDropdown(false);
    };
    const close = () => setIsOpenDropdown(false);
    const wrapperRef = useClickOutside(close);

    const labelVision = options?.find((i) => i.value === value)?.label;

    return (
        <DropDownContainer ref={wrapperRef}>
            <DropDownHeader onClick={toggling}>
                <Placeholder>{labelVision || placeholder}</Placeholder>
                <ArrowContainer isOpenDropdown={isOpenDropdown}>
                    <ArrowR />
                </ArrowContainer>
            </DropDownHeader>
            <DropDownList isOpenDropdown={isOpenDropdown}>
                {options.map((option) => (
                    <ListItem
                        width={width}
                        onClick={onOptionClicked(option.value)}
                        key={option.value}
                        options={options}
                    >
                        <Text isActive={value === option.value}>{option.label}</Text>
                    </ListItem>
                ))}
            </DropDownList>
        </DropDownContainer>
    );
};

export default Dropdown;
