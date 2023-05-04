import React from 'react';
import { CheckboxContainer } from './style';

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
        <div>
            <CheckboxContainer isChecked={isChecked} onClick={handleClick} /> News
        </div>
    );
};

export default Checkbox;
