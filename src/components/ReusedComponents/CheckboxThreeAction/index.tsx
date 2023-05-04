import React from 'react';
import { CheckboxContainer, Container, Text } from './style';

interface CheckboxProps {
    isChecked: boolean | undefined;
    setIsChecked: (b: undefined | boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, setIsChecked }) => {
    const handleClick = () => {
        if (isChecked === true) {
            setIsChecked(false);
        } else if (isChecked === false) {
            setIsChecked(undefined);
        } else {
            setIsChecked(true);
        }
    };

    return (
        <Container onClick={handleClick}>
            <CheckboxContainer isChecked={isChecked} /> <Text>New</Text>
        </Container>
    );
};

export default Checkbox;
