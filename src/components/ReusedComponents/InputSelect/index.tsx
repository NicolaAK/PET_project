import React, { useState } from 'react';
import ArrowR from '@assets/icons/arrowR.svg';
import { Container, ListContainer, List, ListItem, Header, ArrowContainer } from './styled';
import useClickOutside from '../../../HOK/ClickOutside';
interface IProps {
    options: string[];
}
const Select = ({ options }: IProps) => {
    const [isOpenSelect, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const toggling = () => setIsOpen(!isOpenSelect);
    const onOptionClicked = (value: any) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };
    const close = () => setIsOpen(false);
    const wrapperRef = useClickOutside(close);
    return (
        <Container ref={wrapperRef}>
            <Header onClick={toggling}>
                {selectedOption || 'Выберите размер'}
                <ArrowContainer isOpenSelect={isOpenSelect}>
                    <ArrowR />
                </ArrowContainer>
            </Header>

            {isOpenSelect && (
                <ListContainer>
                    <List>
                        {options.map((option) => (
                            <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>
                        ))}
                    </List>
                </ListContainer>
            )}
        </Container>
    );
};
export default Select;
