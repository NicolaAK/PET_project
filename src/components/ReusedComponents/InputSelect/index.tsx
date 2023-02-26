import React, { useState } from 'react';
import ArrowR from '@assets/icons/arrowR.svg';
import { ErrorText } from '@components/ReusedComponents/Input/style';
import { Container, ListContainer, List, ListItem, Header, ArrowContainer } from './style';
import useClickOutside from '../../../HOK/ClickOutside';

export interface IOptions {
    label: string;
    value: number;
}

export interface IProps {
    options: IOptions[];
    value?: number;
    onChange?: (value: number) => void;
    placeholder: string;
    errorText?: string;
}

const Select = ({ options, value, onChange, placeholder, errorText }: IProps) => {
    const [isOpenSelect, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpenSelect);
    const close = () => setIsOpen(false);
    const wrapperRef = useClickOutside(close);

    const selectOption = options.find((optionItem) => optionItem.value === value);
    const onOptionClicked = (valueSelected: number) => () => {
        if (onChange) {
            onChange(valueSelected);
            setIsOpen(false);
        }
    };

    return (
        <Container ref={wrapperRef}>
            <Header onClick={toggling}>
                {selectOption?.label || placeholder}
                <ArrowContainer isOpenSelect={isOpenSelect}>
                    <ArrowR />
                </ArrowContainer>
            </Header>

            {isOpenSelect && (
                <ListContainer>
                    <List>
                        {options.map((option) => (
                            <ListItem onClick={onOptionClicked(option.value)} key={option.value}>
                                {option.label}
                            </ListItem>
                        ))}
                    </List>
                </ListContainer>
            )}
            {errorText && <ErrorText>{errorText}</ErrorText>}
        </Container>
    );
};
export default Select;
