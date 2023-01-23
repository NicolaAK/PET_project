import React from 'react';
import { InputContainer, InputContent } from '@components/Input/styled';

interface IProps {
    value?: string;
    onChange: (arg0: string) => void;
    width?: number;
    type?: string;
    placeholder?: string;
}
const Input = ({ value, onChange, width, type = 'text', placeholder }: IProps) => (
    <InputContainer>
        <InputContent
            width={width}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type={type}
            placeholder={placeholder}
        />
    </InputContainer>
);
export default Input;
