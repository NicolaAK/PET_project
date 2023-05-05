import React from 'react';
import { CheckboxContainer, Container, Text } from './style';

interface CheckboxProps {
    isChecked?: boolean;
    setIsChecked: (b?: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, setIsChecked }) => {
    const handleClick = () => setIsChecked(!isChecked);

    return (
        <Container onClick={handleClick}>
            <CheckboxContainer isChecked={isChecked} /> <Text>New</Text>
        </Container>
    );
};

export default Checkbox;
