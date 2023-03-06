import React from 'react';
import { Input, Label, RadioBox, Text, ContainerRadio } from './style';

export interface IRadio {
    value: any;
    label: string;
    name?: string;
    errorText?: string;
    onChange?: () => void;
}
const RadioButton = ({ errorText, onChange, label, value, name }: IRadio) => (
    <ContainerRadio>
        <Label>
            <Input type="radio" name={name} id={value} value={value} onChange={onChange} />
            <RadioBox errorText={errorText} />
            <Text>{label}</Text>
        </Label>
    </ContainerRadio>
);

export default RadioButton;
