import React from 'react';
import { ErrorText } from '@components/ReusedComponents/Input/style';
import { Input, Label, RadioBox, Text, ContainerRadio } from './style';

interface IProps {
    name?: string;
    value: any;
    label: string;
}
export interface IRadio {
    option: IProps[];
    errorText?: string;
    onChange?: () => void;
}
const RadioButton = ({ option, errorText, onChange }: IRadio) => (
    <ContainerRadio>
        {option.map((item) => (
            <Label id={item.value}>
                <Input type="radio" name={item.name} id={item.value} value={item.value} onChange={onChange} />
                <RadioBox />
                <Text>{item.label}</Text>
            </Label>
        ))}
        {errorText && <ErrorText>{errorText}</ErrorText>}
    </ContainerRadio>
);

export default RadioButton;
