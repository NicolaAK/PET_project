import React from 'react';
import { ErrorText, InputContainer, InputContent } from '@components/ReusedComponents/Input/styled';

export interface IInput {
    value?: string;
    onChange?: (arg0: string) => void;
    width?: number;
    type?: string;
    placeholder?: string;
    errorText?: string;
}

const Input = ({ value, onChange, width, type = 'text', placeholder, errorText }: IInput) => (
    <InputContainer>
        <InputContent
            width={width}
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            type={type}
            placeholder={placeholder}
            isError={!!errorText}
        />
        {errorText && <ErrorText>{errorText}</ErrorText>}
    </InputContainer>
);
export default Input;
