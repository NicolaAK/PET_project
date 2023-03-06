import React from 'react';
import { ErrorText } from '@components/ReusedComponents/Input/style';
import { Input, Label, RadioBox, Text, ContainerRadio } from './style';

interface IProps {
    id: string;
    name?: string;
    value: any;
    label: string;
}
export interface IRadio {
    option: IProps[];
    errorText?: string;
}
const RadioButton = ({ option, errorText }: IRadio) => (
    <ContainerRadio>
        {option.map((item) => (
            <Label id={item.id}>
                <Input type="radio" name={item.name} id={item.id} value={item.value} />
                <RadioBox />
                <Text>{item.label}</Text>
            </Label>
        ))}
        {errorText && <ErrorText>{errorText}</ErrorText>}
    </ContainerRadio>
);

export default RadioButton;
