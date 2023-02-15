import React, { useEffect, useRef, useState } from 'react';
import ArrowR from '@assets/icons/arrowR.svg';
import { DropDownHeader, DropDownList, ListItem, DropDownContainer, ArrowContainer, Text, Placeholder } from './styled';

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
    const ref = useRef<HTMLDivElement>(null);
    const toggling = () => setIsOpenDropdown(!isOpenDropdown);
    const onOptionClicked = (e: any) => () => {
        if (onChange) {
            onChange(e);
        }
        setIsOpenDropdown(false);
    };

    useEffect(() => {
        const checkIfClickedOutside = (e: { target: any }) => {
            if (isOpenDropdown && ref.current && !ref.current.contains(e.target)) {
                setIsOpenDropdown(false);
            }
        };
        document.addEventListener('mousedown', checkIfClickedOutside);
        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [isOpenDropdown]);

    const labelVision = options?.find((i) => i.value === value)?.label;

    return (
        <DropDownContainer ref={ref}>
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
