import React, { FC } from 'react';
import { useFormContext, Controller, ControllerRenderProps, ControllerFieldState } from 'react-hook-form';
import Input, { IInput } from '@components/Input';

interface IRHFInput extends IInput {
    name: string;
}

const RHFInput: FC<IRHFInput> = ({ name, ...other }) => {
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
            }) => <Input errorText={error?.message} {...other} onChange={field.onChange} />}
        />
    );
};

export default RHFInput;
