import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import { IconWrapper, InputWrapper } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
    icon?: ReactNode;
};

const Input: FC<Props> = ({ icon, ...other }) => {
    const Icon = icon;
    return (
        <InputWrapper icon={!!icon}>
            <input {...other} />
            {Icon && <IconWrapper>{Icon}</IconWrapper>}
        </InputWrapper>
    );
};

export default Input;
