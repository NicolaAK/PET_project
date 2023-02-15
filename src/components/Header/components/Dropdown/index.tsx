import React, { useEffect, useRef, useState } from 'react';
import Arrow from '@assets/icons/arrowBotton.svg';
import { DropDownHeader, DropDownList, ListItem, DropDownContainer, ArrowContainer, Text } from './styled';

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

    return (
        <DropDownContainer ref={ref}>
            <DropDownHeader onClick={toggling}>
                <Text>{value}</Text>
                <ArrowContainer value={isOpenDropdown}>
                    <Arrow />
                </ArrowContainer>
            </DropDownHeader>
            <DropDownList value={isOpenDropdown}>
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
                            <Text>{option.label}</Text>
                        </ListItem>
                    ),
                )}
            </DropDownList>
        </DropDownContainer>
    );
};

export default Dropdown;
