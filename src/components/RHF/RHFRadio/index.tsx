import React, { FC } from 'react';
import { Controller, ControllerFieldState, ControllerRenderProps, useFormContext } from 'react-hook-form';
import RadioButton, { IRadio } from '@components/ReusedComponents/RadioButton';

interface IRHFRadio extends IRadio {
    name: string;
}

const RHFSelect: FC<IRHFRadio> = ({ name, ...other }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field,
                fieldState: { error },
            }: {
                field: ControllerRenderProps;
                fieldState: ControllerFieldState;
            }) => <RadioButton errorText={error?.message} {...other} onChange={field.onChange} value={field.value} />}
        />
    );
};

export default RHFSelect;
