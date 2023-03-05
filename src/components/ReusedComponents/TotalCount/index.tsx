import React from 'react';
import MinusIcon from '@assets/icons/minus.svg';
import PlusIcon from '@assets/icons/plus.svg';
import { Controller, useFormContext } from 'react-hook-form';
import { Plus, Count, Minus, Content, Container } from './style';

interface ICount {
    name: string;
}
const RHFTotalCount = ({ name }: ICount) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => <TotalCount onChange={field.onChange} value={field.value} />}
        />
    );
};

const TotalCount = ({ value, onChange }: { value: number; onChange: (value: any) => void }) => {
    const formattedValue = value || 0;

    const toggleDecreaseProduct = () => {
        if (formattedValue > 1) {
            onChange(formattedValue - 1);
        }
    };
    const toggleIncreaseProduct = () => {
        onChange(formattedValue + 1);
    };

    return (
        <Container>
            <Content>
                <Minus onClick={toggleDecreaseProduct} type="button">
                    <MinusIcon />
                </Minus>
                <Count>{formattedValue}</Count>
                <Plus onClick={toggleIncreaseProduct} type="button">
                    <PlusIcon />
                </Plus>
            </Content>
        </Container>
    );
};

export default RHFTotalCount;
