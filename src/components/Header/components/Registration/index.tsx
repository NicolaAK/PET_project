import React, { Dispatch, FC, SetStateAction } from 'react';
import { Exit, ExitContainer } from '@components/ProductCatalog/Image/style';
import { Button } from '@components/ReusedComponents/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ADD_REGISTRATION, registrationCheck } from '@components/Header/components/Registration/validations';
import RHFInput from '@components/RHF/RHFInput';
import { useAppDispatch } from '@store';
import { setAuth } from '@store/user';
import { ModalBackground, ModalWindow, Title } from './style';

interface IProps {
    onChange: () => void;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}
interface IRegistrationForm {
    [ADD_REGISTRATION.EMAIL]: string;
    [ADD_REGISTRATION.PASSWORD]: string;
}

const Registration: FC<IProps> = ({ onChange, setModalOpen }) => {
    const dispatch = useAppDispatch();

    const methods = useForm<IRegistrationForm>({ resolver: yupResolver(registrationCheck) });
    const { handleSubmit } = methods;
    const onSubmit = (registrationData: any) => {
        dispatch(setAuth(true));
        setModalOpen(false);
        // eslint-disable-next-line no-console
        console.log('Registration', registrationData);
    };
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
                    </ModalWindow>
                </ModalBackground>
            </form>
        </FormProvider>
    );
};

export default Registration;
