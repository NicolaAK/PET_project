import React from 'react';
import { InputContainer, InputContent } from '@components/Input/styled';

interface IProps {
    state?: string;
    setState?: (arg0: string) => void;
}
const Input = ({ state, setState }: IProps) => (
    <InputContainer>
        <InputContent value={state} onChange={(e) => setState(e.target.value)} type="text" placeholder="Ваш e-mail*" />
    </InputContainer>
);
export default Input;
