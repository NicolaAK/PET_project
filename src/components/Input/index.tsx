import React from 'react';
import { InputContainer, InputContent } from '@components/Input/styled';

interface IProps {
    value?: string;
    onChange: (arg0: string) => void;
    width?: number;
}
const Input = ({ value, onChange, width }: IProps) => (
    <InputContainer>
        <InputContent
            width={width}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            placeholder="Ваш e-mail*"
        />
    </InputContainer>
);
export default Input;
