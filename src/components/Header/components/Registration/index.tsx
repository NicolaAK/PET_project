import React, { FC } from 'react';
import { Exit, ExitContainer } from '@components/ProductCatalog/Image/style';
import Input from '@components/ReusedComponents/Input';
import { Button } from '@components/ReusedComponents/Button';
import { ModalBackground, ModalWindow, Title } from './style';

interface IProps {
    onChange: () => void;
    isAuth: () => void;
}

const Registration: FC<IProps> = ({ onChange, isAuth }) => (
    <ModalBackground onClick={onChange}>
        <ExitContainer onClick={onChange}>
            <Exit>X</Exit>
        </ExitContainer>
        <ModalWindow onClick={(e) => e.stopPropagation()}>
            <Title>Авторизация</Title>
            <Input placeholder="Ваш e-mail*" />
            <Input placeholder="Ваш пароль*" />
            <Button onClick={isAuth}>Войти</Button>
        </ModalWindow>
    </ModalBackground>
);

export default Registration;
