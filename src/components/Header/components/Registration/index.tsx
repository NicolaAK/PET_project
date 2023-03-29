import React, { FC } from 'react';
import { Exit, ExitContainer } from '@components/ProductCatalog/Image/style';
import { Button } from '@components/ReusedComponents/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ADD_REGISTRATION, registrationCheck } from '@components/Header/components/Registration/validations';
import RHFInput from '@components/RHF/RHFInput';
import { ModalBackground, ModalWindow, Title } from './style';

interface IProps {
    onChange: () => void;
    isAuth: () => void;
}

const Registration: FC<IProps> = ({ onChange, isAuth }) => {
    const methods = useForm({ resolver: yupResolver(registrationCheck) });
    const { handleSubmit } = methods;
    const onSubmit = (registrationData: any) => console.log('Registration', registrationData);
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBackground onClick={onChange}>
                    <ExitContainer onClick={onChange}>
                        <Exit>X</Exit>
                    </ExitContainer>
                    <ModalWindow onClick={(e) => e.stopPropagation()}>
                        <Title>Авторизация</Title>
                        <RHFInput name={ADD_REGISTRATION.EMAIL} placeholder="Ваш e-mail*" />
                        <RHFInput
                            type={ADD_REGISTRATION.PASSWORD}
                            name={ADD_REGISTRATION.PASSWORD}
                            placeholder="Ваш пароль*"
                        />
                        <Button>Отправит данные</Button>
                        <Button onClick={isAuth}>Не отправит</Button>
                    </ModalWindow>
                </ModalBackground>
            </form>
        </FormProvider>
    );
};

export default Registration;
