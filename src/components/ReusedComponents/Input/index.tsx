import React from 'react';
import { ErrorText, InputContainer, InputContent } from '@components/ReusedComponents/Input/style';

export interface IInput {
    value?: string;
    onChange?: (arg0: string) => void;
    type?: string;
    placeholder?: string;
    errorText?: string;
    textAlign?: string;
}

const Input = ({ value, onChange, type = 'text', placeholder, errorText, textAlign }: IInput) => (
    <InputContainer>
        <InputContent
            textAlign={textAlign}
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
