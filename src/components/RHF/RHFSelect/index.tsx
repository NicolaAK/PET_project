import React, { FC } from 'react';
import { Controller, ControllerFieldState, ControllerRenderProps, useFormContext } from 'react-hook-form';
import Select, { IProps } from '@components/ReusedComponents/InputSelect';

interface IRHFSelect extends IProps {
    name: string;
}

const RHFSelect: FC<IRHFSelect> = ({ name, ...other }) => {
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
            }) => <Select errorText={error?.message} {...other} onChange={field.onChange} />}
        />
    );
};

export default RHFSelect;
