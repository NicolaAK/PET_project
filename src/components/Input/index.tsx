import React from 'react';
import { InputContainer, InputContent } from '@components/Input/styled';

interface IProps {
    value?: string;
    onChange: (arg0: string) => void;
}
const Input = ({ value, onChange }: IProps) => (
    <InputContainer>
        <InputContent value={value} onChange={(e) => onChange(e.target.value)} type="text" placeholder="Ваш e-mail*" />
    </InputContainer>
);
export default Input;
